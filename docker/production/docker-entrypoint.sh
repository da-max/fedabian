#! /bin/sh

exec mongod &
until mongo --eval "print(\"waited for connection\")"; do
  sleep 1
done
mongo --eval "db.getSiblingDB('${MONGO_INITDB_DATABASE}').createUser({user: '${MONGO_INITDB_ROOT_USERNAME}', pwd: '${MONGO_INITDB_ROOT_PASSWORD}', roles: ['readWrite', 'dbAdmin']})"
echo "--Start webapp"
cd webapp && yarn build

exec yarn start &

echo "--Start api"
cd ../api && gunicorn -w 4 -b 0.0.0.0:4000 "run:create_app()"
