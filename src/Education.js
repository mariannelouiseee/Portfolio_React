import Tertiary from "./assets/ISU.png";
import Senior from "./assets/ASHS.png";
import Junior from "./assets/SNHS.png";
import Elem from "./assets/VES.png";

function Education() {
  return (
    <>
      <h1>EDUCATIONAL BACKGROUND</h1>
      <div className="timeline-items">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2025</div>
          <div className="timeline-content">
            <div className="school-header">
              <img src={Tertiary} alt="ISU Logo" className="school-logo" />
              <h3>Tertiary</h3>
            </div>
            <p>Bachelor of Science in Information Technology</p>
            <p>Isabela State University – Roxas Campus</p>
            <p>
              <em>Rang-ayan, Roxas, Isabela</em>
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2021</div>
          <div className="timeline-content">
            <div className="school-header">
              <img src={Senior} alt="ASHS Logo" className="school-logo" />
              <h3>Secondary (Senior)</h3>
            </div>
            <p>Accountancy, Business, and Management</p>
            <p>Aurora Senior High School</p>
            <p>
              <em>Ballesteros, Aurora, Isabela</em>
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2019</div>
          <div className="timeline-content">
            <div className="school-header">
              <img src={Junior} alt="SNHS Logo" className="school-logo" />
              <h3>Secondary (Junior)</h3>
            </div>
            <p>Sandiat National High School</p>
            <p>
              <em>Sandiat East, San Manuel, Isabela</em>
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2015</div>
          <div className="timeline-content">
            <div className="school-header">
              <img src={Elem} alt="VES Logo" className="school-logo" />
              <h3>Primary</h3>
            </div>
            <p>Villanueva Elementary School</p>
            <p>
              <em>Villanueva, San Manuel, Isabela</em>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
