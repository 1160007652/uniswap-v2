import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AddLiquidity from './AddLiquidity';
import {
  RedirectDuplicateTokenIds,
  RedirectOldAddLiquidityPathStructure,
  RedirectToAddLiquidity,
} from './AddLiquidity/redirects';
import MigrateV1 from './MigrateV1';
import MigrateV1Exchange from './MigrateV1/MigrateV1Exchange';
import RemoveV1Exchange from './MigrateV1/RemoveV1Exchange';
import Pool from './Pool';
import PoolFinder from './PoolFinder';
import RemoveLiquidity from './RemoveLiquidity';
import { RedirectOldRemoveLiquidityPathStructure } from './RemoveLiquidity/redirects';
import Swap from './Swap';
import { RedirectPathToSwapOnly, RedirectToSwap } from './Swap/redirects';
import AppLayout from '../Layouts/AppLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <RedirectPathToSwapOnly />,
      },
      {
        path: '/swap',
        element: <Swap />,
        children: [
          {
            path: ':outputCurrency',
            element: <RedirectToSwap />,
          },
        ],
      },

      {
        path: '/send',
        element: <RedirectPathToSwapOnly />,
      },

      {
        path: '/find',
        element: <PoolFinder />,
      },
      {
        path: '/pool',
        element: <Pool />,
      },
      {
        path: '/create',
        element: <RedirectToAddLiquidity />,
      },
      {
        path: '/add',
        element: <AddLiquidity />,
        children: [
          {
            path: ':currencyIdA',
            element: <RedirectOldAddLiquidityPathStructure />,
          },
          {
            path: ':currencyIdA/:currencyIdB',
            element: <RedirectDuplicateTokenIds />,
          },
        ],
      },
      {
        path: '/remove/v1/:address',
        element: <RemoveV1Exchange />,
      },
      {
        path: '/remove/:tokens',
        element: <RedirectOldRemoveLiquidityPathStructure />,
      },
      {
        path: '/remove/:currencyIdA/:currencyIdB',
        element: <RemoveLiquidity />,
      },
      {
        path: '/migrate/v1',
        element: <MigrateV1 />,
        children: [
          {
            path: '/migrate/v1/:address',
            element: <MigrateV1Exchange />,
          },
        ],
      },
      {
        path: '*',
        element: <RedirectPathToSwapOnly />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
