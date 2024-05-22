import axios from 'axios';
import { getRequest, getSuccess, getFailed, getError } from './timetableSlice';

export const getTimetables = () => async (dispatch) => {
    dispatch(getRequest());
    try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/student/getTimeTable`);
        console.log(response.data); // Log the response to confirm
        dispatch(getSuccess(response.data));
    } catch (error) {
        if (error.response) {
            dispatch(getFailed(error.response.data.message));
        } else {
            dispatch(getError('Network Error'));
        }
    }
};

export const addTimetable = (fields) => async (dispatch) => {
    dispatch(getRequest());
    try {
        const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/student/addTimeTable`, fields);
        dispatch(getSuccess(response.data));
    } catch (error) {
        if (error.response) {
            dispatch(getFailed(error.response.data.message));
        } else {
            dispatch(getError('Network Error'));
        }
    }
};
