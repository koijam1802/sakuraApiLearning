import {Routable, Route, SakuraApi, SapiRoutableMixin} from '@sakuraapi/core';
import {UserModel} from '../models/user-model';
import {NextFunction, Request, Response} from 'express';

export {SakuraApi};

@Routable({
  baseUrl: 'user',
  model: UserModel,
  suppressApi: true
})
export class UserApi extends SapiRoutableMixin() {

  // GET : to get all documents
  @Route()
  async GetAllUser(req: Request, res: Response, next: NextFunction) {
    let user;

    try {
      user = await UserModel.get({filter: {}, limit: 30, skip: 0});
    } catch (err) {
      user = {message: err.message};
    }
    res.status(200).send(user);
    next();
  }

  // GET : id : to get document based on id
  @Route({
    method: 'get',
    path: ':id'
  })
  async GetUserById(req: Request, res: Response, next: NextFunction) {
    let user;

    try {
      user = await UserModel.getById(req.params.id);
    } catch (err) {
      user = {message: err.messages};
    }
    res.status(200).send(user);
    next();
  }

  // POST : to create the new document
  @Route({
    method: 'post',
    path: ''
  })
  async SaveUser(req: Request, res: Response, next: NextFunction) {
    const user = UserModel.fromJson(req.body);
    let result;

    try {
      result = await user.create();
    } catch (err) {
      result = {message: err.message};
    }
    res.status(200).send(result);
    next();
  }

  // Post OR put : update the documents
  @Route({
    method: 'put',
    path: ':id'
  })
  async UpdateUserById(req: Request, res: Response, next: NextFunction) {
    if (!req.params.id) {
      res.status(400).send({message: 'missing id'});
    } else {
      // console.log('Testing >> req.body', req.body);
      const user = UserModel.fromJson(req.body);
      let result;

      try {
        result = await user.save();
      } catch (err) {
        result = {message: err.messages};
      }
      res.status(200).send(result);
    }
    next();
  }

  // DELETE : to delete the document by id
  @Route({
    method: 'delete',
    path: ':id'
  })
  async DeleteUserById(req: Request, res: Response, next: NextFunction) {
    let user;

    try {
      user = await UserModel.removeById(req.params.id);
    } catch (err) {
      user = {message: err.message};
    }
    res.status(200).send(user);
    next();
  }
}
