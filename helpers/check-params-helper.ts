export default (datasToCheck: {[key: string]: string}, paramsToCheck: string[]): Promise<boolean> => {
  return new Promise((resolve, reject): void => {
    try {
      let paramsCheckResult = true;
      paramsToCheck.forEach((params): void => {
        if (typeof datasToCheck[params] === 'undefined' || datasToCheck[params] === '') {
          paramsCheckResult = false;
        }
      });
      resolve(paramsCheckResult);
    } catch (err) {
      reject(err);
    }
  });
};
