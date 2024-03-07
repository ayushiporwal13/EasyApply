import { useState } from "react";
import EasyApplyLogo from './assets/img/EASYAPPLY.jpg'
import React from 'react';

import "./App.css";
import {
  Link,
  Outlet,
} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div classNameName="app">
      <header>
        <img
          src={EasyApplyLogo}
          alt="EasyApply Logo"
          style={{height: "60vh", width: "100%"}}
        />
      </header>
      <main>
        <h2>
          Embarking on your career journey is exciting, but we understand it
          comes with its challenges. EasyApply is designed exclusively for
          college students like you, eliminating the need to scour multiple
          websites for job opportunities. We've streamlined the process,
          making job hunting easy and efficient, so you can focus on kick
          starting your career.
        </h2>
        <figure>
          <img src="" />
        </figure>
        <h2>WHY EASYAPPLY?</h2>
        <section>
          <figure>
            <img src="" />
          </figure>
          <h3>All Jobs in One Place</h3>
          <p>
            Say goodbye to endless job site hopping. EasyApply brings together
            all the latest job postings in one centralized hub, saving you
            time and effort.
          </p>
        </section>
        <section>
          <figure>
            <img src="" />
          </figure>
          <h3>Tailored for College Students</h3>
          <p>
            We get it – entering the job market can be overwhelming. Our
            platform is crafted with college students and recent graduates in
            mind, providing a user-friendly experience to simplify your
            journey into the professional world.
          </p>
        </section>
        <section>
          <figure>
            <img src="" />
          </figure>
          <h3>Unlock Industry Contacts</h3>
          <p>
            Ever wished you had an industry insider to guide you? With
            EasyApply, you can. Click on a job listing, and discover contacts
            within the company, giving you a valuable edge in your job
            application.
          </p>
        </section>

        <h2>READY TO APPLY?</h2>
        <Link to="/intern">
          <div className="box-div">
            <h5>INTERNSHIPS</h5>
          </div>
        </Link>
        <Link to="/new-grad">
          <div className="box-div">
            <h5>NEW GRAD</h5>
          </div>
        </Link>
        <Link to="/experienced">
          <div className="box-div">
            <h5>EXPERIENCED</h5>
          </div>
        </Link>
      </main>
      <footer>
        <h6>Contact Us:</h6>
        <form
          action="https://api.sheetmonkey.io/form/41hqe59kpePUWnq8Aziz9d"
          method="post"
        >
          <label for="name">Name</label>
          <input type="text" id="name" name="name" required />
          <br />
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Provide your email"
            required
          />
          <br />
          <label for="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Any improvements"
            rows="5"
            cols="50"
          ></textarea>
          <br />
          <button type="reset">Reset</button>
          <button type="submit">Submit</button>
        </form>
        <h6>© 2021 EasyApply. All rights reserved.</h6>
      </footer>
      <Outlet />
    </div>
  );
}

export default App;
