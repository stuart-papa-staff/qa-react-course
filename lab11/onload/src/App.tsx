import { useState, useEffect } from 'react'
import './App.css'

const apiUrl = 'https://dog.ceo/api/breeds/image/random';

function App() {
  const [imageUrl, setimageUrl] = useState("")

  useEffect(() => {
    fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => setimageUrl(data.message))
  }, [])

  return (
    <>
    <main>
      <h1>Go Fetch</h1>
      <img width={300} src={imageUrl} alt="" />
    </main>
    </>
  )
}

export default App
