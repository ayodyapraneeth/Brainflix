import view_icon from "../../assets/images/views.svg";
import like_icon from "../../assets/images/likes.svg";
import List from "../list/List";
import "./main.css";

const Main = ({ videos, videoDetails }) => {
	const {
		title,
		channel,
		timestamp,
		image,
		video,
		views,
		likes,
		comments,
		description,
	} = videoDetails;

	return (
		<main>
			<article key={videoDetails.id}>
				<div className="main__video-player-aspect-ratio">
					<video className="main__video-player" controls poster={image}>
						<source src={video} type="video/mp4" />
					</video>
				</div>

				<div className="main__video-side-list">
					<div className="main__content alignment">
						<header>
							<h1 className="main__video-heading">{title}</h1>
						</header>
						<div className="main__video-details">
							<div className="main__video-details-alignment">
								<p className="main__video-channel">By {channel}</p>
								<time
									className="main__video-stats main__video-date-align"
									dateTime={new Date(timestamp).toISOString()}
								>
									{new Date(timestamp).toLocaleDateString("en-US", {
										year: "2-digit",
										month: "2-digit",
										day: "2-digit",
									})}
								</time>
							</div>
							<div className="main__icon-tablet">
								<div className="main__icon">
									<img
										src={view_icon}
										className="main__views-icon"
										alt="views-icon"
									/>
									<p className="main__video-stats">{views}</p>
								</div>
								<div className="main__icon">
									<img
										src={like_icon}
										className="main__likes-icon"
										alt="likes-icon"
									/>
									<p className="main__video-stats">{likes}</p>
								</div>
							</div>
						</div>

						<div>
							<p className="main__video-description">{description}</p>
						</div>
						<div>
							<h2 className="main__comment-subheading">
								{comments.length} Comments
							</h2>
						</div>
						<div className="main__comment-section">
							<div className="main__comment-new">
								<div className="main__display-photo"></div>
								<div className="main__comment-context">
									<div className="main__comment-tablet-wrap">
										<h3 className="main__comment-heading">
											Join the conversation
										</h3>
										<div>
											<textarea
												className="main__comment-text-area"
												name="commentInput"
												placeholder="Add a new comment"
											></textarea>
										</div>
									</div>
									<div className="main__button-tablet-wrap">
										<button className="main__button main__button-text">
											COMMENT
										</button>
									</div>
								</div>
							</div>
							{comments &&
								comments.map((comment) => (
									<div key={comment.id}>
										<div className="main__loaded-comment-wrap">
											<div className="main__display-empty-photo "></div>
											<div className="main__comment-wrap">
												<div className="main__name-date-wrap">
													<p className="main__comment-name">{comment.name}</p>
													<time
														className="main__video-stats"
														dateTime={new Date(comment.timestamp).toISOString()}
													>
														{new Date(comment.timestamp).toLocaleDateString(
															"en-US",
															{
																year: "2-digit",
																month: "2-digit",
																day: "2-digit",
															}
														)}
													</time>
												</div>
												<p className="main__comments">{comment.comment}</p>
											</div>
										</div>
									</div>
								))}
						</div>
					</div>

					<div className="main__video-list-align">
						<List videoList={videos} />
					</div>
				</div>
			</article>
		</main>
	);
};

export default Main;
