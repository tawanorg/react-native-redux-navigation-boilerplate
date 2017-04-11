export const REQUEST = "REQUEST/APP_INITIAL";
export const SUCCESS = "SUCCESS/APP_INITIAL";
export const ERROR = "ERROR/APP_INITIAL";

const request = () => {
	return {
		type: REQUEST
	}
}

const success = (data) => {
	return {
		type: SUCCESS,
		payload: data
	}
}

const error = (error) => {
	return {
		type: ERROR,
		payload: error
	}
}


export const initialApp = () => {
	return (dispatch) => {
		dispatch(request());
	}
}