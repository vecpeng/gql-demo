###
 # @Author: vecpeng
 # @Date: 2022-03-13 22:08:43
 # @LastEditors: vecpeng
 # @LastEditTime: 2022-03-13 22:08:44
 # @FilePath: /gql-demo/init-mongo.sh
 # @Desc: 
 # 
 # Copyright (c) 2022 by vecpeng, All Rights Reserved. 
### 
#!/usr/bin/env bash
#
# MongoDB init script that create initial DB and user during first mongodb docker start up
#

if [ "$DATABASE_NAME" ] && [ "$DATABASE_USERNAME" ] && [ "$DATABASE_PASSWORD" ]; then
    echo 'Creating application user and db for authen service'
    mongo \
        --host localhost \
        --port 27017 \
        -u ${MONGO_INITDB_ROOT_USERNAME} \
        -p ${MONGO_INITDB_ROOT_PASSWORD} \
        admin \
        --eval "db.getSiblingDB('${DATABASE_NAME}').createUser({user: '${DATABASE_USERNAME}', pwd: '${DATABASE_PASSWORD}', roles:[{role:'dbOwner', db: '${DATABASE_NAME}'}]});"
fi