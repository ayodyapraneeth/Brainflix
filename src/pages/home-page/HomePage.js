import React, { useEffect, useState } from "react";
import axios from "axios";
import Main from "../../components/main/main";

const HomePage = () => {
	const [videos, setVideos] = useState([]);
	const [videoDetails, setVideoDetails] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					"http://localhost:8080/videos"
				);
				setVideos(response.data);

				if (response.data.length > 0) {
					const id = response.data[0].id;

					const videoDetailsResponse = await axios.get(
						`http://localhost:8080/videos/${id}`
					);
					setVideoDetails(videoDetailsResponse.data);
					setVideos((videos) => videos.filter((video) => video.id !== id));
				}
			} catch (error) {
				console.error("Error fetching videos:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<main>
			{videoDetails && <Main videos={videos} videoDetails={videoDetails} />}
		</main>
	);
};

export default HomePage;
