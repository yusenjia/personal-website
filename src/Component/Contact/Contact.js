import React from "react";
import "./Contact.css"
import { TextField,TextareaAutosize } from '@mui/material';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { Alert } from '@mui/material';
import { flexbox } from "@mui/system";
import Swal from 'sweetalert2'
export default function Contact(){
    const [email,setEmail] = React.useState()
    const [emailFormat,setEmailFormat] = React.useState(true)
    const form = useRef();
    const sendEmail = (e) => {
        // validate input than submit
        e.preventDefault();
        //validate email format
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
            setEmailFormat(false)
 
        } else{
            setEmailFormat(true)
            emailjs.sendForm('service_ysc76nc', 'template_o02slfb', form.current, 'CsHn51mpkvYm3lP8_')
            .then((result) => {

                // customize message 
                Swal.fire(
                    {
                        title: 'Message send！',
                        icon:"success",
                        timer:"2000",
                        showConfirmButton:false,   
                        padding:"2rem",   
                    }
                  )

                form.current.reset()  
    
            }, (error) => {

                Swal.fire(
                    {
                        title: 'Ops, something went wrong！',
                        icon:"error",
                        timer:"2000",
                        showConfirmButton:false,   
                        padding:"2rem",   
                    }
                  )

            }); 
        }
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
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                    {!emailFormat &&
                        <Alert 
                            variant="outlined" 
                            severity="error"
                            style={{marginBottom:20,marginTop:-10, height:30,display:flexbox,alignItems:"center"}}
                        >
                            Wrong email format.
                        </Alert>
                    }
                    
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