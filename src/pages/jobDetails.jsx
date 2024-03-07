import React from "react";
import EasyApplyLogo from '../assets/img/EASYAPPLY.jpg'
import RightArrow from "../assets/icons/arrow-right.svg";
import { useParams } from "react-router-dom";

const jobDetails = (props) => {
  const { id } = useParams();
  // const detail = internships.find((job) => job.id == id);
  console.log('props', props);
  // console.log(detail);
  // const internshipData = props.location.state.internshipData;
  // const detail = internshipData.filter((job) => job.id == id);
  return (
    <div>
      <header>
        <img
          src={EasyApplyLogo}
          alt="Easy Apply Logo"
          style={{height: "60vh", width: "100%"}}
        />
        {/* <h6>Streamlining Success: Your Path to Effortless Job Hunting</h6> */}
      </header>
      <main>
        <h1>Job Details</h1>
        {/* {detail.map((job) => {
          {job.title}
        })} */}
        <section>
          <h2>Software Engineer Intern</h2>
          <sub>Rhombus Power</sub>
          <sub>Location:San Jose, CA</sub>
          <article>
            <h2>Summary</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod, nisi ac aliquet tincidunt, mauris velit ultrices nunc, id
              lacinia nisl mauris id nunc. Nullam auctor, justo ut lacinia
              tincidunt, nunc nunc lacinia nunc, id tincidunt nisl nunc in nunc.
              Sed euismod, nisi ac aliquet tincidunt, mauris velit ultrices
              nunc, id lacinia nisl mauris id nunc. Nullam auctor, justo ut
              lacinia tincidunt, nunc nunc lacinia nunc, id tincidunt nisl nunc
              in nunc. Sed euismod, nisi ac aliquet tincidunt, mauris velit
              ultrices nunc, id lacinia nisl mauris id nunc. Nullam auctor,
              justo ut lacinia tincidunt, nunc nunc lacinia nunc, id tincidunt
              nisl nunc in nunc.
            </p>
          </article>
          <article>
            <h2>Company Overview</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Inventore at atque sint, neque magnam velit accusantium veniam
              assumenda beatae. Molestiae, atque aut modi quos repellendus error
              unde non. Deserunt, et?
            </p>
          </article>
        </section>
        <button>Detail</button>
        <a href="jobDetails.html">
          <button>
            Apply Now <img src={RightArrow} alt='right-arrow' style={{width:"15px", height:'15px'}}/>
          </button>
        </a>
      </main>
      <aside>
        <h1>Connections for Referrals</h1>
        <section>
          <figure>
            <img src="" alt="" />
          </figure>
          <p>
            John Wick <br /> Senior Director
            <br /> Since 2020
          </p>
          <button>Ask for Referral</button>
        </section>
      </aside>
    </div>
  );
};

export default jobDetails;
