
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import ItemsPage from './pages/ItemsPage'
//import './App.css'
//import itemsData from './itemsData.json';
import CheckoutPage from './pages/CheckoutPage';
import { useEffect, useState } from 'react';

// Note the difference between this and seed theory 2 is that it uses an external API to map the products

function App() {

  const [itemsData, setItemsData] = useState([])

    useEffect(() => {
      fetch('https://seed-theory-api.netlify.app/data.json')
      .then((response) => response.json())
      .then((data) => setItemsData(data))
    }, [])

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
