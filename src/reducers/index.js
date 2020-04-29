import {MOVE_OBJECTS} from "../Actions";
import moveObject from "./moveObject";

const initialState = {
	angle: 0,
};

function reducer(state = initialState, action) {
	switch (action.type) {
		case MOVE_OBJECTS:
			return moveObject(state, action);
		default:
			return state;
	}
}

export default reducer;
