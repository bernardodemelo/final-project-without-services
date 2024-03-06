/* Import React / React-Router-Dom Features  */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

/* Import Axios */
import axios from "axios";

function AddPlanetPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  // Initialize Navigate
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const planet = { name, description };

    axios
      .post("/api/planet", planet)
      .then(() => navigate("/planets"))
      .catch((error) => console.log(error));
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>name</label>
      <input
        value={name}
        name="name"
        type="text"
        required
        onChange={(e) => setName(e.target.value)}
      />
      <label>Description</label>
      <input
        value={description}
        name="description"
        type="text"
        required
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Project</button>
    </form>
  );
}

export default AddPlanetPage;
