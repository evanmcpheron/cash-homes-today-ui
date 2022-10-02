import SignInPage from "./SignInPage";
import authRoles from "../../../auth/authRoles";

const SignInConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  auth: authRoles.onlyGuest,
  routes: [
    {
      path: "future-flipper",
      element: <SignInPage />,
    },
  ],
};

export default SignInConfig;
