/* eslint-disable react-hooks/exhaustive-deps */
/* Import React / React-Router-Dom Features  */
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

/* Import Axios */
import axios from "axios";

function PlanetDetailsPage() {
  const [planet, setPlanet] = useState({});

  // Get my Route Params, so I can use them
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/api/planets/${id}`)
      .then((response) => setPlanet(response.data))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div>
      {planet && (
        <div>
          <h3>{planet.name}</h3>
          <p>{planet.description}</p>
          <Link to="/planets">Back</Link>
        </div>
      )}
    </div>
  );
}

export default PlanetDetailsPage;
