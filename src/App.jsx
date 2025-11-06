import { useState } from 'react'
import Nav from "./components/nav/Nav.jsx"
import Home from './components/Home/Home.jsx'
import CompanyHistory from './components/CompanyHistory/CompanyHistory.jsx'
import PastWork from './components/PastWork/PastWork.jsx'
import Staff from './components/Staff/Staff.jsx'
import ContactUs from './components/ContactUs/ContactUs.jsx'


function App() {

  const [page, setPage] = useState(Home)

  const handlePageChange = async (state) => {
    setPage(state);
  }



  return (
    <>
      <h1>Hello</h1>
      <Nav handlePageChange={handlePageChange} />
      { page }
    </>
  )
}

export default App
