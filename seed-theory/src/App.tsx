
import { BrowserRouter, Route, Routes } from 'react-router'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import ItemsPage from './pages/ItemsPage'
//import './App.css'
import itemsData from './itemsData.json';
import CheckoutPage from './pages/CheckoutPage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path="/items" element={<ItemsPage itemsData={itemsData} />} />
            <Route path='/checkout' element={<CheckoutPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
