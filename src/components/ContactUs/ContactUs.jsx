import { useState } from "react";
import "./ContactUs.css"

const ContactUs = (props) => {

  const [formResponse, setFormResponse] = useState()

  const defaultFormData = {
    name: "",
    email: "",
    message: "",
  }
  const [formData, setFormData] = useState(defaultFormData)

  const handleChange = async (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormResponse(formData)
    setFormData(defaultFormData)
  }

  return (
    <>
      <h1>Contact Us</h1>
      {formResponse ? <p className="form-response">Thanks for submitting your message, {formResponse.name}</p> : null}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="Email">Email</label>
          <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="Message">Your Message</label>
          <textarea name="message" id="message" value={formData.message} onChange={handleChange} ></textarea>
        </div>

        <button type="text">Submit</button>

      </form>
    </>

  )
}

export default ContactUs;