import db from '../config/database';

export default {
  getUsers(query: object[]): Promise<object[]> {
    return new Promise((resolve, reject): void => {
      const collection = db.get('users');
      collection.find({ $and: query })
        .then((res): void => resolve(res))
        .catch((err): void => reject(err));
    });
  },
};
