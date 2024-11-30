import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import HomePage from './HomePage'
import FormPage from './FormPage'
import SellersPage from './SellersPage'
import ShopPage from './ShopPage'
import ErrorPage from './ErrorPage'
import CartPage from './CartPage'

const router = createBrowserRouter([
  {path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />
    },
    {path: "/additem",
    element: <FormPage/>,
    errorElement: <ErrorPage />
    },
    {path: "/sellers",
    element: <SellersPage />,
    errorElement: <ErrorPage />
    },
    {path: "/shop",
    element: <ShopPage />,
    errorElement: <ErrorPage />
    },
    {path: "/cart",
      element: <CartPage />,
      errorElement: <ErrorPage />
    }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
