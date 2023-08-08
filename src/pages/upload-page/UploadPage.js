import Thumbnail from "../../assets/images/Upload-video-preview.jpg";
import "./uploadPage.css";
import axios from "axios";

const Upload = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const description = form.description.value;
    const channel = form.channel.placeholder;
    const image = form.image.placeholder;
    const video = form.video.placeholder;

    if (!title || !description) {
      alert("Please fill in all fields.");
      return;
    }
    console.log("Form data:", { title, description, channel, image, video });

    alert("Video uploaded successfully!");

    axios
      .post("http://localhost:8080/videos", { title, description, channel, image, video })
      .then((response) => {
        console.log("Video uploaded successfully:", response.data);
        window.location.href = "/";
        
      })
      .catch((error) => {
        console.error("Error uploading video:", error);

      });
  };

  return (
    <form onSubmit={handleSubmit} className="upload__outer-wrapper">
      <div className="upload__items-wrapper">
        <div>
          <h2 className="upload__heading">Upload video</h2>
        </div>
        <div className="upload__container">
          <div className="upload__container-tablet">
            <div className="upload__container-desktop">
              <div>
                <h3 className="upload__input-heading">Video Thumbnail</h3>
                <img
                  className="upload__thumbnail"
                  src={Thumbnail}
                  alt="upload-video-thumbnail"
                />
              </div>

              <div className="upload__video-details">
                <div>
                  <h3 className="upload__input-heading">Title your video</h3>
                </div>
                <input
                  className="upload__video-title"
                  type="text"
                  name="title"
                  placeholder="Add a title to your video"
                />
                <div>
                  <h3 className="upload__input-heading">
                    Add a video description
                  </h3>
                  <textarea
                    className="upload__video-description"
                    name="description"
                    placeholder="Add a description to your video"
                  ></textarea>
                </div>
                <input
                  className="upload__placeholder-value"
                  type="text"
                  name="channel"
                  placeholder="Random"
                />
                <input
                  className="upload__placeholder-value"
                  type="text"
                  name="image"
                  placeholder="http://localhost:8080/images/image9.jpg"
                />
                
                <input
                  className="upload__placeholder-value"
                  type="text"
                  name="video"
                  placeholder="https://project-2-api.herokuapp.com/stream"
                />
                </div>
            </div>
            <div className="upload__button-wrap-tablet">
              <div className="upload__button-container-tablet">
                <button className="upload__video-button" type="submit">
                  Publish
                </button>
              </div>
              <div className="upload__button-container-tablet">
                <button className="upload__video-cancel-button" type="button">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Upload;