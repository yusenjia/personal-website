import React from "react";
import "./Contact.css"
// import TextField from '@mui/material/TextField';
import { TextField,TextareaAutosize } from '@mui/material';

export default function Contact(){
    return(
        <div className="contact-container">
            <h1>Contact Me</h1>
                <form action="#" className="contact-form">

                    <TextField id="outlined-required" label="Name*" variant="outlined" name="name"style={{marginBottom:20}}/>
                    <TextField id="outlined-required" style={{marginBottom:20}}label="Email*" variant="outlined" name="email"/>

                    <TextareaAutosize
                        aria-label="empty textarea"
                        placeholder="Message*"
                        style={{ width: 300 }}
                        minRows={10}
                    />
                    <button className="submit">SUBMIT</button>
                </form>
        </div>
 
    )
}