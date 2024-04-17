import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EasyApplyLogo from "../assets/img/EASYAPPLY_bg.svg";
import RightArrow from "../assets/icons/arrow-right.svg";
import Bookmark from "../assets/icons/bookmark.svg";

const NewGrad = () => {
  const [newgrads, setNewGrad] = useState([]);
  const [filteredNewGrad, setFilteredNewGrad] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedJobFunctions, setSelectedJobFunctions] = useState([]);
  const [selectedSalary, setSelectedSalary] = useState("");

  useEffect(() => {
    const fetchNewGrad = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/SimplifyJobs/New-Grad-Positions/dev/.github/scripts/listings.json"
        );
        const data = await response.json();
        setNewGrad(data);
        setFilteredNewGrad(data); // Initialize filteredNewGrad with all newgrads
      } catch (error) {
        console.error("Error fetching JSON data:", error);
      }
    };

    fetchNewGrad();
  }, []);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Filter newgrads based on search text
    let filtered = newgrads.filter((newgrad) =>
      newgrad.title.toLowerCase().includes(searchText.toLowerCase())
    );

    // Apply location filter
    if (selectedLocations.length > 0) {
      filtered = filtered.filter((newgrad) =>
        selectedLocations.includes(newgrad.location)
      );
    }

    // Apply job function filter
    if (selectedJobFunctions.length > 0) {
      filtered = filtered.filter((newgrad) =>
        selectedJobFunctions.includes(newgrad.jobFunction)
      );
    }

    // Apply salary filter
    if (selectedSalary !== "") {
      filtered = filtered.filter((newgrad) =>
        newgrad.salary.includes(selectedSalary)
      );
    }

    setFilteredNewGrad(filtered);
  };

  return (
    <div>
      {/* <header>
        <img
          src={EasyApplyLogo}
          alt="EasyApply Logo"
          className="img-fluid"
          // style={{height: "60vh", width: "100%"}}
        />
      </header> */}
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
      <div className="container mw-100">
        <div class="row">
          <h2 className="mt-2">New Grad Positions</h2>
          <aside className="col-md-4 border-right mt-3">
            <form className="row g-3" onSubmit={handleSubmit}>
              <div className="col-12 d-flex justify-content-left">
                <label htmlFor="Search" className="form-label p-1">
                  <b>Search</b>
                </label>
                <input
                  type="text"
                  id="Search"
                  name="Search"
                  className="form-control"
                  placeholder="Search for job titles"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />
              </div>

              {/* Location filter */}
              <div className="col-12 d-flex justify-content-left">
                <label htmlFor="Location" className="form-label">
                  <b>Location</b>
                </label>
              </div>
              <div className="col-12 row">
                {locations.map((location) => (
                  <div key={location} className="col-6 text d-flex">
                    <input
                      type="checkbox"
                      id={`Location-${location}`}
                      name="Location"
                      value={location}
                      checked={selectedLocations.includes(location)}
                      onChange={(e) => {
                        const checked = e.target.checked;
                        setSelectedLocations((prev) =>
                          checked
                            ? [...prev, location]
                            : prev.filter((loc) => loc !== location)
                        );
                      }}
                    />
                    <label htmlFor={`Location-${location}`} className="p-1">
                      {location}
                    </label>
                  </div>
                ))}
              </div>

              {/* Job function filter */}
              <div className="col-12 d-flex justify-content-left">
                <label htmlFor="JobFunction" className="form-label">
                  <b>Job Function</b>
                </label>
              </div>
              <div className="col-12 row">
                {jobFunctions.map((jobFunction) => (
                  <div key={jobFunction} className="col-6 text d-flex">
                    <input
                      type="checkbox"
                      id={`Job-Function-${jobFunction}`}
                      name="Job-Function"
                      value={jobFunction}
                      checked={selectedJobFunctions.includes(jobFunction)}
                      onChange={(e) => {
                        const checked = e.target.checked;
                        setSelectedJobFunctions((prev) =>
                          checked
                            ? [...prev, jobFunction]
                            : prev.filter((func) => func !== jobFunction)
                        );
                      }}
                    />
                    <label
                      htmlFor={`Job-Function-${jobFunction}`}
                      className="p-1"
                    >
                      {jobFunction}
                    </label>
                  </div>
                ))}
              </div>

              {/* Salary filter */}
              <div className="col-12 d-flex justify-content-left">
                <label htmlFor="Salary" className="form-label">
                  <b>Salary</b>
                </label>
              </div>
              <div className="col-12 row">
                {salaries.map((salary) => (
                  <div key={salary} className="col-6 text d-flex">
                    <input
                      type="radio"
                      id={`Salary-${salary}`}
                      name="Salary"
                      value={salary}
                      checked={selectedSalary === salary}
                      onChange={(e) => setSelectedSalary(e.target.value)}
                    />
                    <label htmlFor={`Salary-${salary}`} className="p-1">
                      {salary}
                    </label>
                  </div>
                ))}
              </div>

              <div className="col-12">
                <button
                  type="submit"
                  id="submit"
                  className="btn btn-dark text-white"
                >
                  Submit
                </button>
              </div>
            </form>
          </aside>
          <NewGradComponent newgrads={filteredNewGrad} />
        </div>
      </div>
      <footer className="container mt-5">
        <h5>Contact Us:</h5>
        <form
          action="https://api.sheetmonkey.io/form/41hqe59kpePUWnq8Aziz9d"
          method="post"
          className="row"
        >
          <label htmlFor="name" className="col-2 text-right m-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="col-9 m-2"
            required
          />
          <label htmlFor="email" className="col-2 text-right m-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Provide your email"
            className="col-9 m-2"
            required
          />

          <label htmlFor="message" className="col-2 text-right m-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Any improvements"
            rows="5"
            cols="50"
            className="col-9 m-2"
          ></textarea>
          <div className="d-flex align-items-center justify-content-center">
            <button type="reset" className="btn btn-primary m-2">
              Reset
            </button>
            <button type="submit" className="btn btn-primary m-2">
              Submit
            </button>
          </div>
        </form>
        <h6>© 2021 EasyApply. All rights reserved.</h6>
      </footer>
    </div>
  );
};

export default NewGrad;

const locations = [
  "Australia",
  "Bahamas",
  "Canada",
  "China",
  "India",
  "New Zealand",
  "United Kingdom",
  "United States",
  "Vietnam",
];

const jobFunctions = [
  "Accounting",
  "Finance",
  "Human Resources",
  "Marketing",
  "Sales",
];

const salaries = ["40k+", "60k+", "80k+", "120k+", "140k+", "160k+", "180k+"];

const NewGradComponent = ({ newgrads }) => {
  // console.log('newgrads', newgrads);
  return (
    <main className="col-md-8 row">
      <div className="row w-100 mt-1 p-2 d-flex flex-row justify-content-center flex-wrap ">
        {newgrads.map(
          (newgrad, index) => (
            console.log("newgrad", newgrad),
            (
              <div className="col-lg-4 mb-4 p-2" key={newgrad.id}>
                <div className="h-100 p-4 text-white bg-dark d-flex align-items-center flex-column border rounded">
                  <h5>{newgrad.title}</h5>
                  {newgrad.locations}
                  <br />
                  {newgrad.company_name}
                </div>
                <div className="d-flex justify-content-center">
                  <img
                    src={Bookmark}
                    alt="Bookmark Icon"
                    className="m-1"
                    style={{ width: "15px", height: "15px" }}
                  />
                  <a href={newgrad.url} target="_blank">
                    Learn More{" "}
                    <img
                      src={RightArrow}
                      alt="right-arrow"
                      style={{ width: "15px", height: "15px" }}
                    />
                  </a>
                </div>
              </div>
            )
          )
        )}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#internshipsCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#internshipsCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </main>
  );
};
