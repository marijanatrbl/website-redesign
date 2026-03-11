// import { Link } from "react-router-dom";
import "./FindUs.css";

import map from "../assets/4.jpg";
import Button from "../components/Button";

function FindUs() {
  return (
    <>
      <div className="findus">
        <h2>Consulting</h2>
        <div className="red">
          <p>
            Our real estate consultants will be happy to show you our TrIIIple
            model apartments. <br></br>
            <br></br>
            You can also contact your estate agents to arrange an appointment:
            01 890 0800 2300
          </p>

          <Button to="/contact">Appointment request</Button>
        </div>
        <div className="kartice">
          <div className="karticaprva">
            <h3>How to find us</h3>
            <h4>by car</h4>
            <p>
              A 23 exit St. Marx – Franzosengraben – ErdbergstraßeA <br></br>23
              exit Erdberg – Schlachthausgasse – ErdbergstraßeA <br></br>23 exit
              Gürtel – Schlachthausgasse – Erdbergstraße <br></br> Coming from
              Landstraßer Hauptstraße – Schlachthausgasse – Erdbergstraße
            </p>
            <h4>by metro</h4>
            <p>U3 Station Erdberg or Schlachthausgasse</p>
            <h4>car parks in town</h4>
            <p>
              Two entrances: one in Erdbergstraße, the other in Schnirchgasse{" "}
              <br></br>
              <br></br>
              Barrier-free access through metro station Erdberg, the elevator in
              Erdbergstrasse 133 and in Würtlerstrasse as well as through the
              elevators of the underground parking in Schnirchgasse.
            </p>
          </div>
          <div className="karticadruga">
            <img src={map} alt="Map" className="map" />
          </div>
        </div>
      </div>
    </>
  );
}

export default FindUs;
