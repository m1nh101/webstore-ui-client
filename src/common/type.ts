export type ActionPayload<TValue> = {
  type: string;
  payload: TValue;
};

export type UserAuth = {
  username: string;
  password: string;
};

export type UserSession = {
  userName: string;
  fullName: string;
  avatar: string;
};
