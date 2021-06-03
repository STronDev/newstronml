import { FaLongArrowAltLeft } from "react-icons/fa";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BackToHome = ({ dark }) => {
	return (
		<h4 className={dark ? "bthome-dark" : "bthome"}>
			<FaLongArrowAltLeft className="i" />
			<Link to="/">Home</Link>
		</h4>
	);
};

BackToHome.defaultProps = {
	dark: false,
};

BackToHome.propTypes = {
	dark: PropTypes.bool,
};

export default BackToHome;
