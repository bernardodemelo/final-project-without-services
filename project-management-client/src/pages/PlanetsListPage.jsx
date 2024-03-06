/* Import React / React-Router-Dom Features  */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/* Import Axios */
import axios from "axios";

function PlanetsListPage() {
  const [planets, setplanets] = useState([]);

  useEffect(() => {
    axios
      .get("/api/planets")
      .then((response) => setplanets(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Link className="link-button" to="add-planet">
        Add Planets
      </Link>
      {planets &&
        planets.map((planet) => {
          return (
            <div key={planet._id} className="planet-div">
              <Link to={`/planets/${planet._id}`}>
                <img
                  width={300}
                  height={300}
                  src="https://www.svgrepo.com/show/205662/planet-earth-global.svg"
                ></img>
                <h3>{planet.name}</h3>
              </Link>
              <Link to={`/edit-planet/${planet._id}`}>
                <p>Edit planet</p>
              </Link>
            </div>
          );
        })}
    </div>
  );
}

export default PlanetsListPage;
