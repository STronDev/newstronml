import React from "react";
import Skill from "./skill.component";
import BackToHome from "./backToHome.component";

const Skills = () => {
	return (
		<div className="bg-light">
			<BackToHome />
			<div className="skills">
				<div className="container40">
					<h1 className="skill-head">Skills</h1>
					<Skill title="HTML & CSS" percent={98} />
					<Skill title="Javascript" percent={78} />
					<Skill title="Python" percent={92} />
					<Skill title="React" percent={45} />
				</div>
			</div>
		</div>
	);
};

export default Skills;
