export default function handleError(error: any): void | null {
  const debugMode: boolean = typeof process.env.DEBUG_MODE === 'string' && JSON.parse(process.env.DEBUG_MODE);

  if (debugMode) {
    return console.error(error.response ? error.response : error);
  }

  return null;
}
