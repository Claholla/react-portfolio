import emailjs from 'emailjs-com';
import React from 'react';

export default function ContactForm() {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_6u7m5bu', 'template_xzqnsgh', e.target, 'user_GmCILK4ShVceEL74pwGo9')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
        e.target.reset()
    }

    return (
        <>
        <br /><br />
    <form onSubmit={sendEmail}>
        <div className="columns">
        <div className="column is-3 is-one-fifth-mobile"></div>
        <div className="column is-mobile">
        <div className="field">
        <label className="label">Name</label>
            <div className="control">
                <input className="input" type="text" placeholder="Enter your name" name="name" />
            </div>
        </div>

        <div className="field">
        <label className="label">Email</label>
            <div className="control">
                <input className="input" type="email" placeholder="Enter your email address" name="email" />
            </div>
        </div>

        <div className="field">
        <label className="label">Subject</label>
            <div className="control">
                <input className="input" type="text" placeholder="Enter the subject of your message" name="subject" />
            </div>
        </div>

        <div className="field">
        <label className="label">Message</label>
            <div className="control">
                <textarea className="textarea" placeholder="Write your message here" name="message"></textarea>
            </div>
        </div>

        <div className="field is-grouped">
            <div className="control">
                <button className="button is-medium submitbtn">Submit</button>
            </div>
        </div>
        </div>
        <div className="column is-3 is-one-fifth-mobile"></div>
        </div>
    </form>
    <br /><br />
        </>
    )
}