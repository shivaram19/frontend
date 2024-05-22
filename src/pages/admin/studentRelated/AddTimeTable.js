import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addTimetable } from '../../../redux/timetableRelated/timetableHandle';
import Popup from '../../../components/Popup';
import { underTimetableControl } from '../../../redux/timetableRelated/timetableSlice';
import { CircularProgress } from '@mui/material';

const AddTimetable = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();

    const timetableState = useSelector(state => state.timetable);
    const { status, response, error } = timetableState;

    const [day, setDay] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [teacher, setTeacher] = useState('');
    const [subject, setSubject] = useState('');
    const [room, setRoom] = useState('');
    const [course, setCourse] = useState('');
    const [semester, setSemester] = useState('');
    const [academicYear, setAcademicYear] = useState('');

    const [showPopup, setShowPopup] = useState(false);
    const [message, setMessage] = useState('');
    const [loader, setLoader] = useState(false);

    const fields = { day, startTime, endTime, teacher, subject, room, course, semester, academicYear };

    const submitHandler = (event) => {
        event.preventDefault();
        setLoader(true);
        dispatch(addTimetable(fields));
    };

    useEffect(() => {
        if (status === 'added') {
            dispatch(underTimetableControl());
            setLoader(false);
            navigate(-1);
        } else if (status === 'failed' || status === 'error') {
            setMessage(response || 'Network Error');
            setShowPopup(true);
            setLoader(false);
        }
    }, [status, response, navigate, dispatch, loader]);

    return (
        <>
            <div className="register">
                <form className="registerForm" onSubmit={submitHandler}>
                    <span className="registerTitle">Add Timetable</span>
                    <label>Day</label>
                    <input className="registerInput" type="text" placeholder="Enter the day..."
                        value={day}
                        onChange={(event) => setDay(event.target.value)}
                        required />

                    <label>Start Time</label>
                    <input className="registerInput" type="time" placeholder="Enter the start time..."
                        value={startTime}
                        onChange={(event) => setStartTime(event.target.value)}
                        required />

                    <label>End Time</label>
                    <input className="registerInput" type="time" placeholder="Enter the end time..."
                        value={endTime}
                        onChange={(event) => setEndTime(event.target.value)}
                        required />

                    <label>Teacher</label>
                    <input className="registerInput" type="text" placeholder="Enter the teacher's name..."
                        value={teacher}
                        onChange={(event) => setTeacher(event.target.value)}
                        required />

                    <label>Subject</label>
                    <input className="registerInput" type="text" placeholder="Enter the subject..."
                        value={subject}
                        onChange={(event) => setSubject(event.target.value)}
                        required />

                    <label>Room</label>
                    <input className="registerInput" type="text" placeholder="Enter the room..."
                        value={room}
                        onChange={(event) => setRoom(event.target.value)}
                        required />

                    <label>Course</label>
                    <input className="registerInput" type="text" placeholder="Enter the course..."
                        value={course}
                        onChange={(event) => setCourse(event.target.value)}
                        required />

                    <label>Semester Number</label>
                    <input className="registerInput" type="number" placeholder="Enter the semester number..."
                        value={semester}
                        onChange={(event) => setSemester(event.target.value)}
                        required />

                    <label>Academic Year</label>
                    <input className="registerInput" type="text" placeholder="Enter the academic year..."
                        value={academicYear}
                        onChange={(event) => setAcademicYear(event.target.value)}
                        required />

                    <button className="registerButton" type="submit" disabled={loader}>
                        {loader ? (
                            <CircularProgress size={24} color="inherit" />
                        ) : (
                            'Add'
                        )}
                    </button>
                </form>
            </div>
            <Popup message={message} setShowPopup={setShowPopup} showPopup={showPopup} />
        </>
    );
};

export default AddTimetable;
