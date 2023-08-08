import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./list.css";

const List = ({ videoList }) => {
	const [list, setList] = useState([]);

	useEffect(() => {
		setList(videoList);
	}, [videoList]);

	return (
		<section className="list__container">
			<h3 className="list__header">Next Videos</h3>
			{list.map((video) => (
				<article key={video.id} className="list__video-item">
					<div className="list__video-wrapper">
						<div>
							<Link to={`/video/${video.id}`}>
								<img
									src={video.image}
									alt="video-list-images"
									className="list__image"
								/>
							</Link>
						</div>
						<div>
							<header>
								<h3 className="list__details-tablet">{video.title}</h3>
							</header>
							<p className="list__channel-name">{video.channel}</p>
						</div>
					</div>
				</article>
			))}
		</section>
	);
};

export default List;
