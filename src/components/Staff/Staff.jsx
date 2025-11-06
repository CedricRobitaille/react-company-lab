import "./Staff.css"

const Staff = (props) => {
  const staff = [
    {
      name: "Matt",
      role: " Instructor",
      tenure: "200 years",
      bio: "Matt is a full-stack engineer with a background in data analytics. He leads immersive coding courses and mentors students transitioning into tech careers."
    },
    {
      name: "Keith",
      role: " TA",
      tenure: "4 years",
      bio: "Keith is a full-stack engineer with a background in data analytics. He leads immersive coding courses and mentors students transitioning into tech careers."
    },
    {
      name: "Megan",
      role: "TA / Office Hours Lead",
      tenure: "3 years",
      bio: "Megan oversees student success at General Assembly, ensuring each cohort has the support, resources, and guidance needed to thrive in the program."
    }
  ];

  return (
    <>
      <h1>Our Team</h1>
      <ul className="team-list">
      {staff.map((person, index) => (
        <li className="staff-card" key={index}>
          <h2>{person.name}</h2>
          <div className="staff-credentials">
            <p>{person.role}</p>
            <p>{person.tenure}</p>
          </div>
          <p>{person.bio}</p>
        </li>
      ))}
      </ul>
    </>
  )

}

export default Staff;