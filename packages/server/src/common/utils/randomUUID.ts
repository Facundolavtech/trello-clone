import { randomBytes } from 'crypto';

const generateRandomId = (): string => {
  const randomBytesBuffer = randomBytes(8);
  const randomId = randomBytesBuffer.toString('hex');
  return randomId;
};

export default generateRandomId;
