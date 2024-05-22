import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    timetableList: [],
    loading: false,
    error: null,
    response: null,
    status: 'idle',
};

const timetableSlice = createSlice({
    name: 'timetable',
    initialState,
    reducers: {
        getRequest: (state) => {
            state.loading = true;
        },
        getSuccess: (state, action) => {
            state.loading = false;
            state.status = 'fetched';
            state.timetableList = action.payload;
        },
        getFailed: (state, action) => {
            state.loading = false;
            state.status = 'failed';
            state.response = action.payload;
        },
        getError: (state, action) => {
            state.loading = false;
            state.status = 'error';
            state.error = action.payload;
        },
        underTimetableControl: (state) => {
            state.loading = false;
            state.response = null;
            state.error = null;
            state.status = 'idle';
        },
    },
});

export const { getRequest, getSuccess, getFailed, getError, underTimetableControl } = timetableSlice.actions;

export const timetableReducer = timetableSlice.reducer;
