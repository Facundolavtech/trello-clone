export default function sortArr(arr: any[], sortBy: string, order: 'asc' | 'desc' = 'asc'): any[] {
  return arr.sort((a, b) => {
    return order === 'asc' ? a[sortBy] - b[sortBy] : b[sortBy] - a[sortBy];
  });
}
