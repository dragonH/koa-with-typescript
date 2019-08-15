import bcrypt from 'bcrypt';

export default (password: string): Promise<string> => new Promise(
  async (resolve, reject): Promise<void> => {
    try {
      const salt = 10;
      const hashedPassword = await bcrypt.hash(password, salt);
      resolve(hashedPassword);
    } catch (err) {
      reject(err);
    }
  },
);
