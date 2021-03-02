import React, { useState }  from "react"
import axios from "axios";
import { Link } from "gatsby"

import "../sass/contact/contact.scss";

const Contact = (props) => {
    const [serverState, setServerState] = useState({
        submitting: false,
        status: null
      });
      const handleServerResponse = (ok, msg, form) => {
        setServerState({
          submitting: false,
          status: { ok, msg }
        });
        if (ok) {
          form.reset();
        }
      };
      const handleOnSubmit = e => {
        e.preventDefault();
        const form = e.target;
        setServerState({ submitting: true });
        axios({
          method: "post",
          url: "https://getform.io/f/03e3cf6d-49b0-46ca-9abb-e331e9bd14f2",
          data: new FormData(form)
        })
          .then(r => {
            handleServerResponse(true, "Thanks!", form);
          })
          .catch(r => {
            handleServerResponse(false, r.response.data.error, form);
          });
      };

    return (
        <section id="contact-page" className="contact">
          <div className="header-container">
              <h1>Contact</h1>
          </div>
            <div className="contact-page">
            <div className="column-one">
              <h2>
                <strong>Get in touch</strong> // Let's work together!
              </h2>
              <article className="contact-info-text">
                Hopefully I've caught your eye by now!
              </article>
              <br></br>
              <article className="contact-info-text">
                I'm always looking to tackle new projects and learn new technologies. If you'd 
                like to create a simple static webpage, or maybe a project that requires a
                database, I'm always looking to take the challenge head on!
              </article>
              <br></br>
              <article className="contact-info-text">
                Leave an email in the box to the right, whether to inquire or simply say hello!
              </article>
              <span className="contact-subheader">Find me at the following sites below.</span>
              <div className="button-holder">
                <a href="https://www.linkedin.com/in/jeddy-hwang-b764611a0/" target="_blank"><button className="borderman btn-border">LinkedIn</button></a>
                <a href="https://github.com/jedidiahhwang" target="_blank"><button className="borderman btn-border">GitHub</button></a>
              </div>
            </div>
            <div className="column-two">
                <div className="contact-box">
                    <form onSubmit={handleOnSubmit} action="https://getform.io/f/03e3cf6d-49b0-46ca-9abb-e331e9bd14f2">
                        <div className="form-group">
                            <label for="exampleInputEmail1" required="required">Email address</label>
                            <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                        </div> 
                        <div className="form-group">
                            <label for="exampleInputName">Name</label>
                            <input type="text" name="name" className="form-control" id="exampleInputName" placeholder="Enter your name" required="required"/>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputMessage">Message</label>
                            <textarea name="message" className="form-control message" id="exampleInputMessage" placeholder="Write a message" rows="5"/>
                        </div>
                        <button type="submit" className="borderman btn-border"  disabled={serverState.submitting}>
                            Submit
                        </button>
                        {serverState.status && (
                            <p id="thanks" className={!serverState.status.ok ? "errorMsg" : ""}>
                            {serverState.status.msg}
                            </p>
                        )}
                    </form>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Contact