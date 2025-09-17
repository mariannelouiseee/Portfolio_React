import mypic from "./assets/mypic.JPG";

function Info() {
  return (
    <>
      <div className="image">
        <img className="mypic" src={mypic} alt="My Picture" />
      </div>
      <div className="info">
        <h3>
          Hello! I'm <span>M</span>arianne.
        </h3>
        <h1>
          <span>S</span>oftware <span>D</span>eveloper
        </h1>
        <h4>
          <i>
            <strong>
              A fresh graduate from Isabela State University - Roxas
            </strong>
          </i>
        </h4>
      </div>
    </>
  );
}

export default Info;
