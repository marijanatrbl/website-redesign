import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="footerinfo">
          <Link to="">Press</Link>
          <div className="stubic"></div>
          <Link to="">Privacy Policy</Link>
          <div className="stubic"></div>
          <Link to="">Imprint</Link>
        </div>

        <p>A project by Marijana Munćan</p>
      </footer>
    </>
  );
}

export default Footer;
