import monk from 'monk';
import env from './env';

export default monk(env.databaseUrl);
