import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTimetables } from '../../../redux/timetableRelated/timetableHandle';
import { CircularProgress } from '@mui/material';
import Popup from '../../../components/Popup';

const GetTimetables = () => {
    const dispatch = useDispatch();

    const timetableState = useSelector(state => state.timetable);
    const { timetableList, loading, error, response } = timetableState;


    const [showPopup, setShowPopup] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        dispatch(getTimetables());
    }, [dispatch]);

    useEffect(() => {
        if (error) {
            setMessage(response);
            setShowPopup(true);
        }
    }, [error, response]);

    useEffect(() => {
        console.log(timetableList); // Log the timetableList to confirm it's being set
    }, [timetableList]);

    return (
        <div className="timetable">
            {loading ? (
                <CircularProgress size={24} color="inherit" />
            ) : (
                <div className="timetableList">
                    {console.log(timetableList)}
                    {timetableList && timetableList.length > 0 ? ( 
                        timetableList.map((timetable, index) => (
                            <div key={index} className="timetableItem">
                                <p><strong>Day:</strong> {timetable.day}</p>
                                <p><strong>Start Time:</strong> {timetable.startTime}</p>
                                <p><strong>End Time:</strong> {timetable.endTime}</p>
                                <p><strong>Teacher:</strong> {timetable.teacher}</p>
                                <p><strong>Subject:</strong> {timetable.subject}</p>
                                <p><strong>Room:</strong> {timetable.room}</p>
                                <p><strong>Course:</strong> {timetable.course}</p>
                                <p><strong>Semester:</strong> {timetable.semester}</p>
                                <p><strong>Academic Year:</strong> {timetable.academicYear}</p>
                            </div>
                        ))
                    ) : (
                        <p>No timetables found.</p>
                    )}
                </div>
            )}
            <Popup message={message} setShowPopup={setShowPopup} showPopup={showPopup} />
        </div>
    );
};

export default GetTimetables;
