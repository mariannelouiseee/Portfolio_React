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
            Hi! I’m Marianne Louise V. Medrano, a fresh graduate from Isabela
            State University – Roxas Campus, majoring in Web and Mobile
            Application Development. I have background knowledge in HTML, CSS,
            PHP, and Python. Although I sometimes struggle with creating fully
            responsive websites, I’m actively working to improve and expand my
            skills through consistent practice and self-learning. I come from a
            family of six and am the third child, which has taught me how to be
            both independent and cooperative. My experiences have shaped me into
            someone who is patient, responsible, and always eager to grow. I’m
            passionate about technology and excited to start my journey as a
            developer—learning from others, contributing to real-world projects,
            and continuously challenging myself along the way.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
