import {connect} from "react-redux";

import App from "../App";
import {moveObject} from "../Actions";

const mapStateProps = (state) => ({
	angle: state.angle,
});

const mapDispatchProps = (dispatch) => ({
	moveObject: (mousePosition) => {
		dispatch(moveObject(mousePosition));
	},
});

const Game = connect(mapStateProps, mapDispatchProps)(App);

export default Game;
