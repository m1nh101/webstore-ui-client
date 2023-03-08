import { createContext } from "react";
import { UserSession } from "../common/type";

export type userContextState = typeof defaultUserContextState;

export type userContextProp = {
  state: userContextState;
};

export const defaultUserContextState = {
  user: {
    userName: "",
    fullName: "",
    avatar: "",
  } as UserSession,
};

const initialContextValue: userContextProp = {
  state: defaultUserContextState,
};

const UserContext = createContext<userContextProp>(initialContextValue);

export default UserContext;
