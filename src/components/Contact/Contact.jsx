import React from 'react';
import './Contact.css';
import ContactImage from '../../assets/contact/contact.jpg';
import { useState } from 'react';

export default function Contact() {
    const[inputs,setInputs] = useState({});
    const[textarea,setTextarea] = useState({});

    const handleChange = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values,[name]: value,}))
        setTextarea(event.target.value)
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(inputs);
        alert("Successful LogIn");
    }
  return (
    
    <>
        <section id="contact">
            <div className="container">
                <div className="contact_wrapper">
                    <div className="contact_col">
                        <div className="contact_image">
                            <img src={ContactImage} alt="Contact"/>
                        </div>
                    </div>
                    <div className="contact_col">
                        <h2>Contact US</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="input_wrapper">
                                <input type="text"  name="name" value={inputs.name || ""} className ="form-control" onChange={handleChange} 
                                placeholder="Your Name..."  required/>
                            </div>
                            <div className="input_wrapper">
                                <input type="number"  name="phn" value={inputs.phn || ""} className="form-control" onChange={handleChange} 
                                placeholder="Your Phone..."  required/>
                            </div>
                            <div className="input_wrapper">
                                <input type="email" name="email" value={inputs.email || ""} className="form-control" onChange={handleChange} 
                                placeholder="Your Email..."   required/>
                            </div>
                            <div className="input_wrapper">
                                <textarea name="Texts" value={textarea} 
                                 onChange={handleChange}   placeholder="Write a Message..."></textarea>
                            </div>
                            <div className="btn_wrapper">
                                <button type="submit" className="btn">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

