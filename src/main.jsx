import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Surah from './components/Surah.jsx'
import Surahs from './components/Surahs.jsx'
import App from './App.jsx'
import Favourites from './components/Favourites.jsx'

const routes = createBrowserRouter([
  {path:'',element:<App />,children:[
    {path:'',element:<Surah />},
    {path:'favourites',element:<Favourites />},
    {path:'surah/:id',element:<Surahs />},
  ]},
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <RouterProvider router={routes}/>
  // </React.StrictMode>,
)
