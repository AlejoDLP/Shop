import Home from './pages/Home'
import Product from './pages/Product'
import PapeleriaList from './pages/PapeleriaList'
import Register from './pages/Register'
import Login from './pages/Login'
import AlimentosList from './pages/AlimentosList'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/register',
        element: <Register />,
    },
    {
        path: '/alimentos',
        element: <AlimentosList />,
    },
    {
        path: '/papeleria',
        element: <PapeleriaList />,
    },
    {
        path: '/product',
        element: <Product />,
    },
])

const App = () => {
    return <RouterProvider router={router} />
}

export default App
