import React, { useState } from "react";
import "./App.css";
import { Link, Outlet } from "react-router-dom";
// import EasyApplyLogo from "./assets/img/EASYAPPLY_bg.svg";
import OfficeLogo from "./assets/img/Office.jpg";
import OneIcon from "./assets/icons/1-square-fill.svg";
import CollegeIcon from "./assets/icons/mortarboard-fill.svg";
import UnlockIcon from "./assets/icons/unlock-fill.svg";

function App() {
  return (
    <div className="app">
      <header 
      className="col d-flex flex-column justify-content-center">
        {/* <img
          src={EasyApplyLogo}
          alt="EasyApply Logo"
          className="img-fluid"
          // style={{height: "60vh", width: "100%"}}
        /> */}
        <div className="">
        <h1 className="col-12 ">EASYAPPLY</h1>
        <h4 className="col-12">Streamlining Success: Your Path to Effortless Job Hunting</h4>
        </div>
      </header>
      <main className="container text-center">
        <h2 className="lead mt-5 mb-4 row text-center">
          Embarking on your career journey is exciting, but we understand it
          comes with its challenges. EasyApply is designed exclusively for
          college students like you, eliminating the need to scour multiple
          websites for job opportunities. We've streamlined the process, making
          job hunting easy and efficient, so you can focus on kick starting your
          career.
        </h2>
        <figure className="row d-flex justify-content-center">
          <img src={OfficeLogo} className="img-fluid col-8" alt="Responsive image" />
        </figure>
        <h2 className="bg-dark text-white text-center">WHY EASYAPPLY?</h2>
        
        <section className="col-lg-12">
          <figure>
            <img src={OneIcon} className="img-fluid" />
          </figure>
          <h3>All Jobs in One Place</h3>
          <p>
            Say goodbye to endless job site hopping. EasyApply brings together
            all the latest job postings in one centralized hub, saving you time
            and effort.
          </p>
        </section>
        <section className="row justify-content-end">
          <figure>
            <img src={CollegeIcon} className="img-fluid" />
          </figure>
          <h3>Tailored for College Students</h3>
          <p>
            We get it – entering the job market can be overwhelming. Our
            platform is crafted with college students and recent graduates in
            mind, providing a user-friendly experience to simplify your journey
            into the professional world.
          </p>
        </section>
        <section className="col-lg-12">
          <figure>
            <img src={UnlockIcon} />
          </figure>
          <h3>Unlock Industry Contacts</h3>
          <p>
            Ever wished you had an industry insider to guide you? With
            EasyApply, you can. Click on a job listing, and discover contacts
            within the company, giving you a valuable edge in your job
            application.
          </p>
        </section>
        
        <h2 className="bg-dark text-white text-center">READY TO APPLY?</h2>
        <div className="row box-div my-4 mx-3 d-flex justify-content-between">
          <div className="d-flex align-items-center justify-content-center col-lg-3 rounded m-2">
            <Link to="/intern" className="text-dark">
              <h5>INTERNSHIPS</h5>
            </Link>
          </div>
          <div className="d-flex align-items-center justify-content-center col-lg-3 rounded m-2">
            <Link to="/new-grad" className="text-white">
              <h5>NEW GRAD</h5>
            </Link>
          </div>
          <div className="d-flex align-items-center justify-content-center col-lg-3 rounded m-2">
            <Link to="/experienced" className="text-dark">
              <h5>EXPERIENCED</h5>
            </Link>
          </div>
        </div>
      </main>
      <footer className="container mt-5">
        <h5>Contact Us:</h5>
        <form
          action="https://api.sheetmonkey.io/form/41hqe59kpePUWnq8Aziz9d"
          method="post"
          className="row"
        >
          <label htmlFor="name" className="col-2 text-right m-2">Name</label>
          <input type="text" id="name" name="name" className="col-9 m-2" required />
          <label htmlFor="email" className="col-2 text-right m-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Provide your email"
            className="col-9 m-2"
            required
          />
          
          <label htmlFor="message" className="col-2 text-right m-2">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Any improvements"
            rows="5"
            cols="50"
            className="col-9 m-2"
          ></textarea>
          <div className="d-flex align-items-center justify-content-center">
          <button type="reset" className="btn btn-primary m-2">Reset</button>
          <button type="submit" className="btn btn-primary m-2">Submit</button>
          </div>
        </form>
        <h6>© 2021 EasyApply. All rights reserved.</h6>
      </footer>
    </div>
  );
}

export default App;
