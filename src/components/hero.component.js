import React from "react";
import DownArrow from "../assets/Down Arrow.svg";
import { Link } from "react-router-dom";

const Hero = () => {
	return (
		<div class="hero">
			<h4 class="text-vertical-90">
				<Link to="/works" class="works-link">
					Works
				</Link>
			</h4>
			<div>
				<h1 class="hero-heading">I am a Professional Web Designer</h1>
				<img id="arrow-down" class="up-down" src={DownArrow} />
			</div>
			<h4 class="text-vertical--90">
				<Link to="/skills" class="skills-link">
					Skills
				</Link>
			</h4>
		</div>
	);
};

export default Hero;
