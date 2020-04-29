export const MOVE_OBJECTS = "MOVE_OBJECTS";

export const moveObject = (mousePosition) => ({
	type: MOVE_OBJECTS,
	mousePosition,
});
