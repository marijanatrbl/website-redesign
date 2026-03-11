import { Link } from "react-router-dom";
import "./Home.css";

import hero from "../assets/1.jpg";
import location from "../assets/location.png";
import modernity from "../assets/modernity.png";
import balance from "../assets/balance.png";
import consult from "../assets/consult.jpeg";
import contact from "../assets/contact.jpg";

import Button from "../components/Button";

function Home() {
  return (
    <>
      <main>
        {/* HERO */}
        <div className="homeHero">
          <div className="slikaHero">
            <img src={hero} alt="Hero" className="hero" />
          </div>
          <h1>Live above it all</h1>
          <p className="opisHero">where the city meets the river</p>
          <Button to="/findus">Location</Button>
        </div>
        {/* ABOUT US SEKCIJA */}
        <div className="homeAbout">
          <h2>About Us</h2>
          {/* STUBOVI */}
          <div className="stubovi">
            {/* LOCATION STUB */}
            <div className="stub">
              <h3>Location</h3>
              <div className="homeLocation stubVeci">
                <div className="locationOpis">
                  <div className="aboutIcon">
                    <img src={location} alt="Location" className="ikonica" />
                  </div>
                  <p>
                    Located in Vienna’s 3rd district on the Donaukanal, the
                    project combines open green spaces, proximity to the Prater
                    park, and a spectacular 360° view of the city.
                  </p>
                </div>
              </div>
            </div>
            {/* STUB IZMEDJU */}
            <div className="stubManji"></div>
            {/* MODERNITY STUB */}
            <div className="stub">
              <h3>Modernity</h3>
              <div className="homeModernity stubVeci">
                <div className="modernityOpis">
                  <div className="aboutIcon">
                    <img src={modernity} alt="Modernity" className="ikonica" />
                  </div>
                  <p>
                    The design by the acclaimed architects Henke Schreieck
                    consists of three over 100 meter high towers with
                    apartments, penthouses and lofts, shopping areas and an
                    office block.
                  </p>
                </div>
              </div>
            </div>
            {/* STUB IZMEDJU */}
            <div className="stubManji"></div>
            {/* BALANCE STUB */}
            <div className="stub">
              <h3>Balance</h3>
              <div className="homeBalance stubVeci">
                <div className="balanceOpis">
                  <div className="aboutIcon">
                    <img src={balance} alt="Balance" className="ikonica" />
                  </div>
                  <p>
                    Perfection, unity and harmony – directly on the Donaukanal,
                    TRIIIPLE harnesses the power of the symbolic number three
                    combining modern living, working and leisure.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="aboutusTxt">
            <p>
              Offering concierge service, a rooftop pool and event kitchen,
              these residential towers provide well-connected apartments and
              studios with generous infrastructure, introducing a new dimension
              of living, working and leisure in Vienna’s 3rd district.
            </p>
          </div>
          <Link to="/apartments">Check out our apartments</Link>
        </div>
        {/* LIVING OPTIONS */}
        <div className="living">
          <h2>More information</h2>
          <div className="kartice">
            <div className="livingopKartica">
              <div className="livingopSlika">
                <img src={consult} alt="Consult" className="hero" />
              </div>
              <h3>Consulting</h3>
              <p>Contact us for more details and personalized assistance.</p>

              <Button to="/findus">&rarr;</Button>
            </div>
            <div className="livingopKartica">
              <div className="livingopSlika">
                <img src={contact} alt="Contact" className="hero" />
              </div>
              <h3>Inquiries</h3>
              <p>Send us a message and we’ll be happy to help.</p>
              <Button to="/contact">&rarr;</Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
