import React from "react";
import "./Contact.css"
// import TextField from '@mui/material/TextField';
import { TextField,TextareaAutosize } from '@mui/material';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import zIndex from "@mui/material/styles/zIndex";




export default function Contact(){

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_ysc76nc', 'template_o02slfb', form.current, 'CsHn51mpkvYm3lP8_')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });   
          form.current.reset()   
      };
    
    return(
        <div className="contact-container" id="Contact">
            <h1>Contact Me</h1>
                <form ref={form} onSubmit={sendEmail} className="contact-form" >
                    <TextField                     
                        id="outlined-basic" 
                        label="Name"
                        variant="outlined" 
                        required 
                        name="name"
                        style={{marginBottom:20}}
                    />
                    <TextField 
                        id="outlined-required" 
                        style={{marginBottom:20}}
                        label="Email" 
                        required 
                        variant="outlined" 
                        name="email"
                        
                    />
                    

                    <TextareaAutosize
                        required
                        name="message"
                        aria-label="empty textarea"
                        placeholder="Message"
                        style={{ maxWidth:400,marginBottom:20}}
                        // style={{zIndex: 0}}
                        minRows={10}
                    />
                    <button className="submit" type="submit">SUBMIT</button>
                </form>
        </div>
 
    )
}