import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <div className="buttons">
      <p>Contact Me ──</p>
      <a
        href="https://www.facebook.com/share/1968xvtyRQ/"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faFacebook} />
      </a>

      <a
        href="https://www.instagram.com/guiamedrano_?igsh=ZTZmZGxpYWd1ZnJn"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>

      <a
        href="https://www.tiktok.com/@guiamedrano_?_t=ZS-8xmwvWttTRI&_r=1"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faTiktok} />
      </a>

      <a
        href="https://github.com/mariannelouiseee"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  );
}

export default Contact;
