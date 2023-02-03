export default function userIsBoardAdmin(adminId: string, userId: string): boolean {
  return adminId === userId;
}
