import { RouterProvider } from "react-router-dom";
import UserContext from "./contexts/userContext";
import router from "./routers/router";

const App = (): JSX.Element => {
  const state = {
    user: {
      userName: "tuan",
      fullName: "tuantm",
      avatar: "string",
    },
  };
  return (
    <UserContext.Provider value={{ state }}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  );
};

export default App;
