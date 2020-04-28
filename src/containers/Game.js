import {connect} from "react-redux";

import App from "../App";

const mapStateProps = (state) => ({
	message: state.message,
});

const Game = connect(mapStateProps)(App);

export default Game;
