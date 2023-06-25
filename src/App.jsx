
import { Route, Routes } from 'react-router-dom'
import './index.css'
import Layout from './components/shared/layout'
import Dashboard from './pages/Dashboard'
import Inbox from './pages/Inbox'
import Users from './pages/Users'
import Product from './pages/Product'
import Category from './pages/Category'
import NewProduct from './pages/NewProduct'
import Setting from './pages/Setting'
import Login from './pages/Login'
import BarChart from './pages/BarChart'
import PieChart from './pages/PieChart'
import LineChart from './pages/LineChart'
import Calender from './pages/Calender'
import ColorPicker from './pages/ColorPicker'
import RichEditor from './pages/RichEditor'

function App() {

  return (
    <Routes>
      <Route path='/' index element={<Login/>}/>
      <Route path='/admin' element={<Layout/>}>
        <Route index  element={<Dashboard/>}/>
        <Route path='inbox' element={<Inbox/>}/>
        <Route path='users' element={<Users/>}/>
        <Route path='products' element={<Product/>}/>
        <Route path='products/add' element={<NewProduct/>}/>
        <Route path='category' element={<Category/>}/>
        <Route path='calender' element={<Calender/>}/>
        <Route path='editor' element={<RichEditor/>}/>
        <Route path='colorpicker' element={<ColorPicker/>}/>
        <Route path='barchart' element={<BarChart/>}/>
        <Route path='piechart' element={<PieChart/>}/>
        <Route path='linechart' element={<LineChart/>}/>
        <Route path='setting' element={<Setting/>} />
      </Route>
    </Routes>
  )
}

export default App
