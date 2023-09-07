import axios from "axios";
import { useState } from "react";
const BASE_URL = 'http://localhost:5000'

function App() {
  const [imageUrl, setImageUrl] = useState(undefined);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    imageFileName: "",
    imageFile: undefined
  });

  /** Call backend, submit form data, return URL to image */
  async function postPropertiesFormData(formData) {

    // generate a new FormData instance and populate with our form data
    // TODO: we should do this inside our form component
    let multiPartFormData = new FormData();
    multiPartFormData.append('imageFile', formData.imageFile);
    multiPartFormData.append('title', formData.title);
    multiPartFormData.append('description', formData.description);
    multiPartFormData.append('price', formData.price);

    const url = `${BASE_URL}/properties`;
    const response = await axios.post(url, multiPartFormData);
    console.log("axios response.data:", response.data);
    return response.data.url;
  }
  // update form input
  function handleChange(evt) {
    console.log("updating formData");
    console.log("evt.target.files is:", evt.target.files);
    // check if the form update was associated with files and
    // pull the file into a separate field from the file path
    if (evt.target.files && evt.target.files[0]) {
      console.log("file type was updated, running special logic");
      // file was changed this time so use different logic
      setFormData(formData => ({
        ...formData,
        imageFile: evt.target.files[0],
        imageFileName: evt.target.value,
      }));
    } else {
      // traditional form input changed; run normal logic
      console.log("normal input was updated, running normal logic");
      let { name, value } = evt.target;
      setFormData(formData => ({
        ...formData,
        [name]: value
      }));

    }
  }

  // handle form submission and send user data to app via signUp() callback
  async function handleSubmit(evt) {
    console.log("formData from form submission", formData);
    evt.preventDefault();
    try {
      const url = await postPropertiesFormData(formData);
      console.log("url received from postProperties ...:", url);
      setImageUrl(url);
    } catch (err) {
      console.log("error:", err);
    }
  }

  return (
    <div className="App">
      <form className="App-form" onSubmit={ handleSubmit }>
        <label htmlFor="appForm-title">title</label>
        <input
          id="appForm-title"
          name="title"
          value={formData.title}
          onChange={ handleChange }>
        </input>

        <label htmlFor="appForm-description">description</label>
        <input
          id="appForm-description"
          name="description"
          value={formData.description}
          onChange={ handleChange }>
        </input>

        <label htmlFor="appForm-price">price</label>
        <input
          id="appForm-price"
          name="price"
          value={formData.price}
          onChange={ handleChange }>
        </input>

        <label htmlFor="appForm-imageFile">imageFile</label>
        <input
          id="appForm-imageFile"
          name="imageFile"
          type="file"
          value={formData.imageFileName}
          onChange={ handleChange }>
        </input>
        <button className="AppForm-btn">List Property</button>
      </form>
      <div className="AppForm-image">
        { imageUrl ? <img src={imageUrl}></img> : ''}
      </div>
    </div>
  );
}

export default App;
