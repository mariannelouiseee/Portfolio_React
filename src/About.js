import About_pic from "./assets/about_pic.JPG";

function About() {
  return (
    <div className="about_page">
      <div className="details">
        <div className="about_image">
          <img src={About_pic} alt="About Me Picture" />
        </div>
        <div className="about_info">
          <h1>ABOUT ME</h1>
          <p>
            I am Marianne Louise V. Medrano, a fresh graduate from Isabela State
            University – Roxas Campus, with a major in Web and Mobile
            Application Development. I have basic knowledge in HTML, CSS, PHP,
            and Python, along with a strong foundation in software, web, and
            mobile development. As an aspiring IT professional, I am passionate
            about creating innovative, efficient, and user-friendly solutions.
            My academic background and hands-on project experience have
            strengthened my skills in problem-solving, adaptability, and
            collaboration. I am eager to apply my knowledge, grow my expertise,
            and contribute meaningfully to dynamic development teams in the
            field of software and application development.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
