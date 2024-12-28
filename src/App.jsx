
import { Outlet } from 'react-router-dom'
import './App.css'
import NavBer from './components/NavBer/NavBer'
import Footer from './components/Footer/Footer'
function App() {

  return (
    <div className='container m-auto'>
      <NavBer></NavBer>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App
