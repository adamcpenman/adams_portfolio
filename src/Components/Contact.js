import React, { useState } from "react";
import axios from "axios";


function Contact() {
    //   const [grabForm, putForm] = useState({
    //     email: "",
    //     subject: "",
    //     body: ""
    //   });
    //   const changeHandler = e => {
    //     e.preventDefault();
    //     putForm({
    //       ...grabForm,
    //       [e.target.name]: e.target.value
    //     });
    //   };
    //   const submitHandler = e => {
    //     e.preventDefault();
    //     if (grabForm.email === "" || grabForm.subject === "" || grabForm.body === "") {
    //      return alert("BITCH");
    //     } else {
    //       axios
    //         .post(
    //         "http://portfoliobe.herokuapp.com/api/email",
    //           grabForm
    //         )
    //         .then(() => {
    //           putForm({
    //             email: "",
    //             subject: "",
    //             body: ""
    //           });
    //         })
    //         .catch(() => {
    //         });
    //     }
    //   };
    return (
        <>
            <h1 className="contactTitle">Contact Info</h1>
            {/* <div className="ContactDiv" id="ScrollToContact"> */}


            {/* <form submitHandler={submitHandler}>
          <input
            type="email"
            name="email"
            className="inputHolder"
            placeholder="Email"
            value={grabForm.email}
            onChange={changeHandler}
          />
          <input
            type="text"
            name="subject"
           className="inputHolder"
            placeholder="Subject"
            value={grabForm.subject}
            onChange={changeHandler}
          />
          <textarea
            type="text"
            name="body"
            className="textHolder"
            placeholder="Your Message"
            value={grabForm.body}
            onChange={changeHandler}
          />
          <button className="formButton" type="submit">
            Send
          </button>
        </form>*/ }
            <div className="TopDiv">
                <div className="MainDiv">
                    <div className="babyDiv">
                        <ul>
                            <li>location: Chicago, IL</li>
                            <li><a href="mailto:adamcpenman@gmail.com">email</a>: adamcpenman@gmail.com</li>
                            <li>socials: please see below!</li>
                            {/* <ul><a href="mailto:adamcpenman@gmail.com">Contact us!</a></ul> */}
                        </ul>
                    </div>
                </div>
                
            </div>
           
            {/* <a href="mailto:adamcpenman@gmail.com">Contact us!</a> */}
        </>
    );
}

export default Contact;