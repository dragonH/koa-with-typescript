import userModel from '../models/user.model';

export default {
  getUsers(queryData: {[key: string]: string}): Promise<object[]> {
    return new Promise(async (resolve, reject): Promise<void> => {
      try {
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
        const users = await userModel.getUsers(query);
        resolve(users);
      } catch (err) {
        reject(err);
      }
    });
  },
  checkIfUserAccountExist(account: string): Promise<boolean> {
    return new Promise(async (resolve, reject): Promise<void> => {
      try {
        const query = [{ account }];
        const checkResult = await userModel.getUsers(query)
          .then((res): boolean => res.length > 0);
        resolve(checkResult);
      } catch (err) {
        reject(err);
      }
    });
  },
  addNewUser(paramsData: {[key: string]: string}): Promise<boolean> {
    return new Promise(async (resolve, reject): Promise<void> => {
      try {
        const paramsDataToCheck = ['account', 'password'];
        const newUserData:{[key: string]: string} = {};
        paramsDataToCheck.forEach((params): void => {
          if (typeof paramsData[params] !== 'undefined' && paramsData[params] !== '') {
            newUserData[params] = paramsData[params];
          }
        });
        const addNewUserResult = await userModel.addNewUser(newUserData);
        resolve(addNewUserResult);
      } catch (err) {
        reject(err);
      }
    });
  },
};
