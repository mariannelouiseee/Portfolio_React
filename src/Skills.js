import bootstrap from "./assets/Skills/bootstrap.png";
import canva from "./assets/Skills/canva.png";
import css from "./assets/Skills/css.png";
import git from "./assets/Skills/git.png";
import html from "./assets/Skills/html.png";
import js from "./assets/Skills/js.png";
import react from "./assets/Skills/react.png";
import mysql from "./assets/Skills/mysql.png";
import node from "./assets/Skills/node.png";
import photoshop from "./assets/Skills/photoshop.png";
import php from "./assets/Skills/php.png";
import vs from "./assets/Skills/vs.png";
import github from "./assets/Skills/github.png";
import office from "./assets/Skills/office.png";
import xampp from "./assets/Skills/xampp.png";
import android from "./assets/Skills/android.png";
import python from "./assets/Skills/python.png";

function Skills() {
  return (
    <div className="myskills">
      <h1>SKILLS</h1>
      <div className="skills-section"></div>
      <div className="frontend-skills">
        <h3>Frontend Development</h3>
        <div className="skills-item">
          <div className="skill">
            <img src={html} alt="html" />
          </div>
          <div className="skill">
            <img src={css} alt="css" />
          </div>
          <div className="skill">
            <img src={js} alt="javascript" />
          </div>
          <div className="skill">
            <img src={bootstrap} alt="bootstrap" />
          </div>
          <div className="skill">
            <img src={react} alt="react" />
          </div>
        </div>
      </div>
      <div className="backend-skills">
        <h3>Backend Development</h3>
        <div className="skills-item">
          <div className="skill">
            <img src={python} alt="python" />
          </div>
          <div className="skill">
            <img src={php} alt="php" />
          </div>
          <div className="skill">
            <img src={mysql} alt="mysql" />
          </div>
          <div className="skill">
            <img src={node} alt="node" />
          </div>
        </div>
      </div>
      <div className="other-skills">
        <h3>Other Tools and Platforms</h3>
        <div className="skills-item">
          <div className="skill">
            <img src={git} alt="git" />
          </div>
          <div className="skill">
            <img src={github} alt="gitHub" />
          </div>
          <div className="skill">
            <img src={vs} alt="vscode" />
          </div>
          <div className="skill">
            <img src={android} alt="android" />
          </div>
          <div className="skill">
            <img src={xampp} alt="xampp" />
          </div>
          <div className="skill">
            <img src={canva} alt="canva" />
          </div>
          <div className="skill">
            <img src={photoshop} alt="photoshop" />
          </div>
          <div className="skill">
            <img src={office} alt="office" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
