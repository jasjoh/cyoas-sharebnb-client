import { useState } from "react";
import ShareBnbApi from "./api";

function ListPropertyForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    photoPrimaryName: "",
    photoPrimaryFileName: "",
    photoPrimaryFile: undefined
  });

  /** Call backend, submit form data, return URL to image */
  async function postPropertiesFormData(formData) {

    // generate a new FormData instance and populate with our form data
    // TODO: we should do this inside our form component
    let multiPartFormData = new FormData();
    multiPartFormData.append('photoPrimaryFile', formData.photoPrimaryFile);
    multiPartFormData.append('title', formData.title);
    multiPartFormData.append('description', formData.description);
    multiPartFormData.append('pricePerDay', formData.pricePerDay);
    multiPartFormData.append('photoPrimaryName', formData.photoPrimaryName);

    await ShareBnbApi.createListing(multiPartFormData);
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
        photoPrimaryFile: evt.target.files[0],
        photoPrimaryFileName: evt.target.value,
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
      await postPropertiesFormData(formData);
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

        <label htmlFor="appForm-pricePerDay">pricePerDay</label>
        <input
          id="appForm-pricePerDay"
          name="pricePerDay"
          value={formData.pricePerDay}
          onChange={ handleChange }>
        </input>

        <label htmlFor="appForm-photoPrimaryName">photoPrimaryName</label>
        <input
          id="appForm-photoPrimaryName"
          name="photoPrimaryName"
          value={formData.photoPrimaryName}
          onChange={ handleChange }>
        </input>

        <label htmlFor="appForm-photoPrimaryFile">photoPrimaryFile</label>
        <input
          id="appForm-photoPrimaryFile"
          name="photoPrimaryFile"
          type="file"
          value={formData.photoPrimaryFileName}
          onChange={ handleChange }>
        </input>
        <button className="AppForm-btn">List Property</button>
      </form>
    </div>
  );
}

export default ListPropertyForm;