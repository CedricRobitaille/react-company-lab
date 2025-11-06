import { useState } from 'react'
import Nav from "./components/nav/Nav.jsx"
import Home from './components/Home/Home.jsx'


function App() {


  const [page, setPage] = useState(Home)
  const handlePageChange = async (state) => {
    setPage(state);
  }


  return (
    <>
      <Nav handlePageChange={handlePageChange} />
      <main>
        {page}
      </main>
      
    </>
  )
}

export default App
