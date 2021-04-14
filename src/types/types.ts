export interface IResponse<T> {
  message: string;
  data: T;
  success: boolean;
  path: string;
}
