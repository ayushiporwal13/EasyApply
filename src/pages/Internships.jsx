import React, { useEffect, useState } from "react";
import { Link, BrowserRouter, Route, useNavigate } from "react-router-dom";
import EasyApplyLogo from "../assets/img/EASYAPPLY.jpg";
import RightArrow from "../assets/icons/arrow-right.svg";
import Bookmark from "../assets/icons/bookmark.svg";
import JobDetails from "./jobDetails";

const Internships = () => {
  const [internships, setInternships] = useState([]);
  const [showJobDetails, setShowJobDetails] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInternships = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/SimplifyJobs/Summer2024-Internships/dev/.github/scripts/listings.json"
        );
        const data = await response.json();
        setInternships(data);
      } catch (error) {
        console.error("Error fetching JSON data:", error);
      }
    };

    fetchInternships();
  }, []);

  // const element = useRoutes([
  //   {
  //     path:'/jobDetails/:id',
  //     element: <JobDetails data={internships} />
  //   },
  //   {
  //     path:'*',
  //     element: <h1>Not Found</h1>
  //   }
  // ])

  // <BrowserRouter>
      
  //       {/* Other routes */}
  //       <Route path="/jobDetails/:id" element={<JobDetails />} />
     
  //   </BrowserRouter>
  // <Route path="/jobDetails/:id" render={(props) => <JobDetails {...props} data={internships} />} />

  return (
    <div>
      <header>
        <img
          src={EasyApplyLogo}
          alt="Easy Apply Logo"
          style={{ height: "60vh", width: "100%" }}
        />
      </header>
      <aside>
        <form>
          <label htmlFor="Search">Search</label>
          <input
            type="text"
            id="Search"
            name="Search"
            placeholder="Search for job title, company, or location"
          />
          <br />
          <label htmlFor="Location">Location</label>
          <input
            type="checkbox"
            id="Location"
            name="Location"
            value="Australia"
          />
          Australia
          <input
            type="checkbox"
            className="Location"
            name="Location"
            value="Bahamas"
          />
          Bahamas
          <input
            type="checkbox"
            className="Location"
            name="Location"
            value="Canada"
          />
          Canada
          <input
            type="checkbox"
            className="Location"
            name="Location"
            value="China"
          />
          China
          <br />
          <label htmlFor="Job Function">Job Function</label>
          <input
            type="checkbox"
            id="Job Function"
            name="Job Function"
            value="Accounting"
          />
          Accounting
          <input
            type="checkbox"
            className="Job Function"
            name="Job Function"
            value="Finance"
          />
          Finance
          <input
            type="checkbox"
            className="Job Function"
            name="Job Function"
            value="Human Resources"
          />
          Human Resources
          <input
            type="checkbox"
            className="Job Function"
            name="Job Function"
            value="Marketing"
          />
          Marketing
          <input
            type="checkbox"
            className="Job Function"
            name="Job Function"
            value="Sales"
          />
          Sales
          <br />
          <label htmlFor="Salary">Salary</label>
          <input type="radio" id="Salary" name="Salary" value="40k+" />
          $40,000+
          <input type="radio" className="Salary" name="Salary" value="60k+" />
          $60,000+
          <input type="radio" className="Salary" name="Salary" value="80k+" />
          $80,000+
          <input type="radio" className="Salary" name="Salary" value="100k+" />
          $100,000+
          <input type="radio" className="Salary" name="Salary" value="120k+" />
          $120,000+
          <input type="radio" className="Salary" name="Salary" value="140k+" />
          $140,000+
          <input type="radio" className="Salary" name="Salary" value="160k+" />
          $160,000+
          <input type="radio" className="Salary" name="Salary" value="180k+" />
          $180,000+
          <br />
          <button type="submit" id="submit">
            Submit
          </button>
        </form>
      </aside>
      <main>
        {internships.map((internship) => (
          <section key={internship.id}>
            <h2>{internship.title}</h2>
            <p>{internship.locations}</p>
            <p>{internship.company_name}</p>
            <img
              src={Bookmark}
              alt="Bookmark Icon"
              style={{width:"15px", height:'15px'}}
            />
            {/* <button type="button" onClick={() => setShowJobDetails(true)}>
              Learn More <img src={RightArrow} alt='right-arrow' width="100px" />
            </button> */}
            {/* {showJobDetails && <JobDetails data={internship} />} */}

            {/* <Link to={`/jobDetails/${internship.id}`}>
                          Learn More <img src={RightArrow} alt='right-arrow' width="100px" />
                        </Link> */}

<Link
              to={`/jobDetails/${internship.id}`}
              state={{ internship: internship }}
            >
              Learn More <img src={RightArrow} alt='right-arrow' style={{width:"15px", height:'15px'}} />
            </Link>

            {/* <Link to="/jobDetails"> */}
            {/* Learn More <img src={RightArrow} alt='right-arrow' width="100px" />
            <JobDetails data={internship} /> */}
            {/* </Link> */}
          </section>
        ))}
      </main>
    </div>
  );
};

export default Internships;
