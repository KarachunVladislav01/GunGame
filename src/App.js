import React, {Component} from "react";
import PropTypes from "prop-types";
import {getCanvasPosition} from "./utils/formula";
import Canvas from "./components/Canvas";

class App extends Component {
	componentDidMount() {
		const self = this;
		setInterval(() => {
			self.props.moveObject(self.canvasMousePosition);
		}, 10);
	}

	trackMouse(event) {
		this.canvasMousePosition = getCanvasPosition(event);
	}

	render() {
		return (
			<Canvas
				angle={this.props.angle}
				trackMouse={(event) => this.trackMouse(event)}
			/>
		);
	}
}

App.propTypes = {
	angle: PropTypes.number.isRequired,
	moveObject: PropTypes.func.isRequired,
};

export default App;
