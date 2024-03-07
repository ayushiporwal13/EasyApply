import React from 'react';
import EasyApplyLogo from '../assets/img/EASYAPPLY.jpg';
import { Outlet, Link } from 'react-router-dom';
import App from '../App';


const Home = () => {
  return (
    <div>
      <header>
        <img
          src={EasyApplyLogo}
          alt="EasyApply Logo"
          style={{height: "60vh", width: "100%"}}
        />
      </header>
      
              <App />
        
            <Outlet />
      <footer>
        <h6>Contact Us:</h6>
        <form
          action="https://api.sheetmonkey.io/form/41hqe59kpePUWnq8Aziz9d"
          method="post"
        >
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
          <br />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Provide your email"
            required
          />
          <br />
          <label htmlFor="message">Message</label>
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
    </div>
  )
}

export default Home