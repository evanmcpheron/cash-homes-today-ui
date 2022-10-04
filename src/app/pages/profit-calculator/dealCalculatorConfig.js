import { lazy } from "react";
import { authRoles } from "../../auth";

const DealCalculatorPage = lazy(() => import("./dealCalculatorPage"));

const DealCalculatorConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  auth: authRoles.onlyGuest,
  routes: [
    {
      path: "deal-calculator",
      element: <DealCalculatorPage />,
    },
  ],
};

export default DealCalculatorConfig;
