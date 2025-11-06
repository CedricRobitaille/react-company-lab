import "./Nav.css"
import Home from '../Home/Home.jsx'
import CompanyHistory from '../CompanyHistory/CompanyHistory.jsx'
import PastWork from '../PastWork/PastWork.jsx'
import Staff from '../Staff/Staff.jsx'
import ContactUs from '../ContactUs/ContactUs.jsx'

const Nav = ({ handlePageChange }) => {

  const navLinks = [
    { text: "Home", component: <Home /> },
    { text: "Company History", component: <CompanyHistory /> },
    { text: "Past Work", component: <PastWork /> },
    { text: "Staff", component: <Staff /> },
    { text: "Contact Us", component: <ContactUs /> },
  ]

  const externalLinks = [
    { link: "https://github.com", text: "Github", icon: "/icons/github.svg" },
    { link: "https://linkedin.com", text: "LinkedIn", icon: "/icons/linkedin.svg" },
    { link: "https://facebook.com", text: "Facebook", icon: "/icons/facebook.svg" },
  ]

  return (
    <nav>
      <ul>
        {
          navLinks.map((link, index) => {
             return <li key={index}>
               <button onClick={() => { handlePageChange( link.component ) }}>{link.text}</button>
            </li>
          })
        }
        {
          externalLinks.map((link, index) => {
            return <li key={index}>
              <a href={link.link}><img src={link.icon}></img>{link.text}</a>
            </li>
          })
        }
      </ul>
    </nav>
  )
}

export default Nav;