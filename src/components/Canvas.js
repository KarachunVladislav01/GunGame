import React from "react";
import Sky from "./Sky";
import Ground from "./Ground";

const Canvas = () => {
	const width = window.innerWidth;
	const height = window.innerHeight;
	const viewBox = [width / -2, 100 - height, width, height];
	const style = {
		border: "1px solid black",
	};
	return (
		<svg
			id="aliens-go-home-canvs"
			preserveAspectRatio="xMaxYMax none"
			viewBox={viewBox}
		>
			<Sky />
			<Ground />
			<circle cx={0} cy={0} r={50}></circle>
		</svg>
	);
};

export default Canvas;
