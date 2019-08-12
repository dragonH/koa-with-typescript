import userModel from '../models/user.model';

export default {
  getUsers(queryData: {[key: string]: string}): Promise<object[]> {
    return new Promise(async (resolve, reject): Promise<void> => {
      const queryParamsToCheck = ['account', 'status'];
      const query: object[] = [];
      queryParamsToCheck.forEach((params): void => {
        if (typeof queryData[params] !== 'undefined' && queryData[params] !== '') {
          const tempQuery: {[key: string]: string} = {};
          tempQuery[params] = queryData[params];
          query.push(tempQuery);
        }
      });
      if (!query.length) {
        query.push({});
      }
      await userModel.getUsers(query)
        .then((res): void => resolve(res))
        .catch((err): void => reject(err));
    });
  },
};
