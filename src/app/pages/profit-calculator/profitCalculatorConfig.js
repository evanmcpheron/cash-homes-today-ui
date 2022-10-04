import { lazy } from 'react';
import { authRoles } from '../../auth';

const ProfitCalculatorPage = lazy(() => import('./profitCalculatorPage'));


const HomeConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  auth: authRoles.onlyGuest,
  routes: [
    {
      path: 'profit-calculator',
      element: <ProfitCalculatorPage />,
    },
  ],
};

export default HomeConfig;
