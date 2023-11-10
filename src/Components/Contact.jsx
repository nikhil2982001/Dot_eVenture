import React from 'react'
import './Contact.css'
export default function Contact() {
  return (
    <div id='contact'>
      <h1>Contact Us</h1>
      <form>
        <input type='text' placeholder='Name 'required/>
        <input type='email'placeholder='Email'required/>
        <input type='submit' />
      </form>
      <h2>For queries mail at <a href='#'>nikhilthakur2982001@gmail.com</a></h2>
      </div>
  )
}
