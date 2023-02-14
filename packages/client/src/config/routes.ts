export enum ApiRoutes {
  AUTH = '/auth',
  USER = '/user',
  BOARD = '/boards',
}

export enum AppRoutes {
  DASHBOARD = '/dashboard',
  BOARD = '/dashboard/b',
  LOGIN = '/login',
  REGISTER = '/register',
}

export const publicRoutes: string[] = [AppRoutes.LOGIN, AppRoutes.REGISTER];
export const privateRoutes: string[] = [AppRoutes.DASHBOARD];
