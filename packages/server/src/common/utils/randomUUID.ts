import { randomBytes } from 'crypto';

const generateRandomId = () => randomBytes(8).toString('hex');

export default generateRandomId;
