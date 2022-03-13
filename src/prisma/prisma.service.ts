/*
 * @Author: vecpeng
 * @Date: 2022-03-13 22:41:39
 * @LastEditors: vecpeng
 * @LastEditTime: 2022-03-13 23:15:45
 * @FilePath: /gql-demo/src/prisma.service.ts
 * @Desc:
 *
 * Copyright (c) 2022 by vecpeng, All Rights Reserved.
 */
import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
    // Add soft delete middleware
    this.$use(async (params, next) => {
      if (params.model != null) {
        if (params.action == 'findUnique') {
          // Change to findFirst - you cannot filter
          // by anything except ID / unique with findUnique
          params.action = 'findFirst';
          // Add 'deleted' filter
          // ID filter maintained
          params.args.where['deleted'] = false;
        }
        if (params.action == 'findMany') {
          // Find many queries
          if (params.args.where != undefined) {
            if (params.args.where.deleted == undefined) {
              // Exclude deleted records if they have not been explicitly requested
              params.args.where['deleted'] = false;
            }
          } else {
            params.args['where'] = { deleted: false };
          }
        }
      }
      return next(params);
    });

    this.$use(async (params, next) => {
      if (params.model != null) {
        if (params.action == 'update') {
          // Change to updateMany - you cannot filter
          // by anything except ID / unique with findUnique
          params.action = 'updateMany';
          // Add 'deleted' filter
          // ID filter maintained
          params.args.where['deleted'] = false;
        }
        if (params.action == 'updateMany') {
          if (params.args.where != undefined) {
            params.args.where['deleted'] = false;
          } else {
            params.args['where'] = { deleted: false };
          }
        }
      }
      return next(params);
    });

    this.$use(async (params, next) => {
      // Check incoming query type
      if (params.model != null) {
        if (params.action == 'delete') {
          // Delete queries
          // Change action to an update
          params.action = 'update';
          params.args['data'] = { deleted: true };
        }
        if (params.action == 'deleteMany') {
          // Delete many queries
          params.action = 'updateMany';
          if (params.args.data != undefined) {
            params.args.data['deleted'] = true;
          } else {
            params.args['data'] = { deleted: true };
          }
        }
      }
      return next(params);
    });
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
