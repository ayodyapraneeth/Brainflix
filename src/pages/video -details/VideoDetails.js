import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Main from "../../components/main/main";
import axios from "axios";

const VideoPage = () => {
  const { id } = useParams();
  const [videos, setVideos] = useState([]);
  const [videoDetails, setVideoDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const videosResponse = await axios.get("http://localhost:8080/videos");
        setVideos(videosResponse.data);

        if (videosResponse.data.length > 0) {
          const mainVideo = videosResponse.data.find(video => video.id === id);
          if (mainVideo) {
            const videoDetailsResponse = await axios.get(`http://localhost:8080/videos/${id}`);
            setVideoDetails(videoDetailsResponse.data);
          } else {
            setVideoDetails(videosResponse.data[0]);
          }
        }
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      {videoDetails && <Main videos={videos} videoDetails={videoDetails} />}
    </div>
  );
};

export default VideoPage;
