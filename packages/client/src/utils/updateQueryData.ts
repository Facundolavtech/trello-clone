export default function updateQueryData(oldData: any, newData: any) {
  return oldData ? Object.assign({}, oldData, newData) : oldData;
}
