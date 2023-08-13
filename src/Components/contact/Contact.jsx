import React from "react";
import Back from "../common/back/Back";
import "./contact.css"

const Contact = () => {
  const map =
    "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13619.563506051802!2d31.79548605551146!3d31.417132489971713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1691915183070!5m2!1sen!2seg";
  return (
    <>
      <Back title="Contact Us" />
      <section className="contact padding">
        <div className="container shadow flexSB">
          <div className="left row">
            <iframe src={map}></iframe>
          </div>
          <div className="right row">
            <h1>Contact Us</h1>
            <p>We're open for any suggestion or just to have a chat</p>
            <div className="items grid2">
              <div className="box">
                <h4>ADDRESS: </h4>
                <p>27 st west wadi degla suite 3, Damietta</p>
              </div>
              <div className="box">
                <h4>Email: </h4>
                <p>info@gmail.com</p>
              </div>
              <div className="box">
                <h4>PHONE</h4>
                <p>+20 01557498614</p>
              </div>
            </div>
            <form action="">
              <div className="flexSB">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
              </div>
              <input type="email" placeholder="Subject" />
              <textarea cols="30" rows="10">
                Create a message here ...
              </textarea>
              <button className="primary-btn">SEND MESSAGE</button>
            </form>
            <h3> Follow us here</h3>
            <span>FACEBOOK INSTAGRAM TWITTER LINKEDIN</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
