import React from "react";
import PropTypes from "prop-types";
import Sky from "./Sky";
import Ground from "./Ground";
import CannonBase from "./CannonBase";
import CannonPipe from "./ConnonPipe";

const Canvas = (props) => {
	const width = window.innerWidth;
	const height = window.innerHeight;
	const viewBox = [width / -2, 100 - height, width, height];
	const style = {
		border: "1px solid black",
	};
	return (
		<svg
			id="aliens-go-home-canvas"
			preserveAspectRatio="xMaxYMax none"
			onMouseMove={props.trackMouse}
			viewBox={viewBox}
		>
			<Sky />
			<Ground />
			<CannonPipe rotation={props.angle} />
			<CannonBase />
		</svg>
	);
};

Canvas.propTypes = {
	angle: PropTypes.number.isRequired,
	trackMouse: PropTypes.func.isRequired,
};

export default Canvas;
