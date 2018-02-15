import {Db, IDbGetParams, IFromDbOptions, Json, Model, SakuraApi, SapiModelMixin} from '@sakuraapi/core';
import {
  Collection,
  CollectionInsertOneOptions,
  CollectionOptions,
  Cursor,
  Db as MongoDb,
  DeleteWriteOpResultObject,
  InsertOneWriteOpResult,
  ObjectID,
  ReplaceOneOptions,
  UpdateWriteOpResult
} from 'mongodb';
import {dbs} from '../config/bootstrap/db';

export {
  Collection,
  CollectionInsertOneOptions,
  CollectionOptions,
  Cursor,
  MongoDb,
  DeleteWriteOpResultObject,
  InsertOneWriteOpResult,
  ObjectID,
  ReplaceOneOptions,
  UpdateWriteOpResult,
  IDbGetParams,
  IFromDbOptions,
  SakuraApi
};

@Model({
  dbConfig: dbs.user
})
export class UserModel extends SapiModelMixin() {
  // @Db() @Json()
  // email: string;
  //
  // @Db({field: 'emailVerified'}) @Json({field: 'emailVerified'})
  // emailVerificationKey: string;
  //
  // @Db({field: 'fn'}) @Json()
  // firstName: string;

  @Db({field: 'email'}) @Json()
  email: string;

  @Db({field: 'firstname'}) @Json()
  firstName: string;

  @Db({field: 'lastname'}) @Json()
  lastName: string;

  @Db({field: 'password'}) @Json()
  password: string;

  @Db({field: 'phone'}) @Json()
  phone: string;
}