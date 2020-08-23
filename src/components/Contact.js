import React from 'react'
import house from '../house.png';


function Contact(props){
    return(
    <div className="contact-card">
        <img src={props.imgUrl}/>
        <h3>{props.name}</h3>
        <p>phone:{props.phone}</p>
        <p>Email:{props.email}</p>
    </div>
    )
}

export default Contact