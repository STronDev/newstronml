import React from "react";
import PropTypes from "prop-types";

const Skill = ({ title, percent }) => {
	const styles = {
		width: percent + "%",
	};

	return (
		<div class="skill">
			<h4>{title}</h4>
			<div class="progress" style={styles}>
				<h6>{percent}%</h6>
			</div>
		</div>
	);
};

Skill.defaultProps = {
	title: "",
	percent: 100,
};

Skill.propTypes = {
	title: PropTypes.string,
	percent: PropTypes.number,
};

export default Skill;
