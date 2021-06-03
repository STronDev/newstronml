import React from "react";

const Work = ({ info }) => {
	return (
		<div className="work-container">
			<div>
				<h3>{info.title}</h3>
				<p>{info.description}</p>
				<a href={info.url} className="workLink">
					{info.urlName}
				</a>
			</div>
			<img src={info.imgUrl} alt={info.title} />
		</div>
	);
};

export default Work;
