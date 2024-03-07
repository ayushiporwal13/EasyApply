import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EasyApplyLogo from '../assets/img/EASYAPPLY.jpg'
import RightArrow from '../assets/icons/arrow-right.svg'
import Bookmark from '../assets/icons/bookmark.svg'

const NewGrad = () => {
  const [newgrad, setNewGrad] = useState([]);

  useEffect(() => {
    const fetchNewGrad = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/SimplifyJobs/New-Grad-Positions/dev/.github/scripts/listings.json"
        );
        const data = await response.json();
        setNewGrad(data);
      } catch (error) {
        console.error("Error fetching JSON data:", error);
      }
    };

    fetchNewGrad();
  }, []);


  return (
    <div>
            <header>
        <img src={EasyApplyLogo} alt="Easy Apply Logo" style={{height: "60vh", width: "100%"}} />
      </header>
      <aside>
        <form>
          <label htmlFor="Search">Search</label>
          <input type="text" id="Search" name="Search" placeholder="Search for job title, company, or location" />
          <br/>
          <label htmlFor="Location">Location</label>
          <input type="checkbox" id="Location" name="Location" value="Australia" />Australia
          <input type="checkbox" className="Location" name="Location" value="Bahamas" />Bahamas
          <input type="checkbox" className="Location" name="Location" value="Canada" />Canada
          <input type="checkbox" className="Location" name="Location" value="China" />China
          <br/>
          <label htmlFor="Job Function">Job Function</label>
          <input type="checkbox" id="Job Function" name="Job Function" value="Accounting" />Accounting
          <input type="checkbox" className="Job Function" name="Job Function" value="Finance" />Finance
          <input type="checkbox" className="Job Function" name="Job Function" value="Human Resources" />Human Resources
          <input type="checkbox" className="Job Function" name="Job Function" value="Marketing" />Marketing
          <input type="checkbox" className="Job Function" name="Job Function" value="Sales" />Sales
          <br/>
          <label htmlFor="Salary">Salary</label>
          <input type="radio" id="Salary" name="Salary" value="40k+" />$40,000+
          <input type="radio" className="Salary" name="Salary" value="60k+" />$60,000+
          <input type="radio" className="Salary" name="Salary" value="80k+" />$80,000+
          <input type="radio" className="Salary" name="Salary" value="100k+" />$100,000+
          <input type="radio" className="Salary" name="Salary" value="120k+" />$120,000+
          <input type="radio" className="Salary" name="Salary" value="140k+" />$140,000+
          <input type="radio" className="Salary" name="Salary" value="160k+" />$160,000+
          <input type="radio" className="Salary" name="Salary" value="180k+" />$180,000+
          <br/>
          <button type="submit" id="submit">Submit</button>
        </form>
      </aside>
      <main>
    {newgrad.map((newgrad) => (
      <div key={newgrad.id}>
        <h2>{newgrad.company_name}</h2>
        <p>{newgrad.title}</p>
        <section>
          <div className="job-positions">Job Positions</div>
          <img src={Bookmark} alt="Bookmark Icon" style={{width:"15px", height:'15px'}} />
          {/* <Link to="/jobDetails">Learn More <img src={RightArrow} alt='right-arrow'style={{width:"15px", height:'15px'}}/></Link> */}
          <Link
              to={`/jobDetails/${newgrad.id}`}
              state={{ newgrad: newgrad }}
            >
              Learn More <img src={RightArrow} alt='right-arrow' style={{width:"15px", height:'15px'}} />
            </Link>
        </section>
        {/* Render other internship properties as needed */}
      </div>
    ))}
    </main>
  </div>
  );

    };

export default NewGrad;
