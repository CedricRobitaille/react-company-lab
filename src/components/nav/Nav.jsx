import "./Nav.css"


const Nav = (props) => {

  const navLinks = ["Home", "Company History", "Past Work", "Staff", "Contact Us"]

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
              <button onClick={() => {}}>{link}</button>
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