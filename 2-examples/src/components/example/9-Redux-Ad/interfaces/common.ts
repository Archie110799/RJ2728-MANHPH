export interface IAction {
  type: string;
  payload?: any
  callbacks?: any;
}

export interface IUser {
  avatar?: string;
  createdAt: string;
  id: string | undefined;
  name: string;
}