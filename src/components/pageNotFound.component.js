import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
	return (
		<div className="page-not-found">
			<div>
				<h1>Oops,</h1>
				<h4>The Page you requested is not available.</h4>
				<h6>
					Check if you mis-Spelled the link or go back to <Link to="/">Home</Link>
				</h6>
			</div>
		</div>
	);
};

export default PageNotFound;
