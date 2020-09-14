import { SuccessActions } from "../actions/successAction";

type NameState = {
	success: boolean;
	name: string,
	phoneNumber: string
};

const initialState: NameState = {
	success: false,
	name: "",
	phoneNumber: ""
};

const NameReducer = (state: NameState = initialState, action: SuccessActions) => {
	
	switch (action.type) {
		case "SET_SUCCESS":
			return {
				...state,
				name: action.name,
				phoneNumber: action.phoneNumber,
				success: true
			};
		default:
			return state;
	}
};
export default NameReducer;
