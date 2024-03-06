/* eslint-disable react-hooks/exhaustive-deps */
/* Import React / React-Router-Dom Features  */
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

/* Import Axios */
import axios from "axios";

function EditPlanetPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/api/planets/${id}`)
      .then((response) => {
        setName(response.data.name);
        setDescription(response.data.description);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedPlanet = { name, description };

    axios
      .put(`/api/planets/${id}`, updatedPlanet)
      .then(() => {
        navigate("/planets");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = () => {
    axios
      .delete(`/api/planets/${id}`)
      .then(() => {
        navigate("/planets");
      })
      .catch((error) => console.log(error));
  };

  return (
    <article>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Description</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Update Project</button>
      </form>
      <button onClick={handleDelete}>Delete Project</button>
    </article>
  );
}

export default EditPlanetPage;
