import React, { useState } from 'react';

function StudentTimeTable() {
  const [day, setDay] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [teacher, setTeacher] = useState('');
  const [subject, setSubject] = useState('');
  const [room, setRoom] = useState('');
  const [course, setCourse] = useState('');
  const [semester, setSemester] = useState('');
  const [academicYear, setAcademicYear] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'day':
        setDay(value);
        break;
      case 'startTime':
        setStartTime(value);
        break;
      case 'endTime':
        setEndTime(value);
        break;
      case 'teacher':
        setTeacher(value);
        break;
      case 'subject':
        setSubject(value);
        break;
      case 'room':
        setRoom(value);
        break;
      case 'course':
        setCourse(value);
        break;
      case 'semester':
        setSemester(value);
        break;
      case 'academicYear':
        setAcademicYear(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="class-schedule">
      <div className="header">Class Schedule</div>
      <div className="form-container">
        <label htmlFor="day">Day:</label>
        <input type="text" name="day" id="day" value={day} onChange={handleChange} />
        <label htmlFor="startTime">Start Time:</label>
        <input type="text" name="startTime" id="startTime" value={startTime} onChange={handleChange} />
        <label htmlFor="endTime">End Time:</label>
        <input type="text" name="endTime" id="endTime" value={endTime} onChange={handleChange} />
        <label htmlFor="teacher">Teacher:</label>
        <input type="text" name="teacher" id="teacher" value={teacher} onChange={handleChange} />
        <label htmlFor="subject">Subject:</label>
        <input type="text" name="subject" id="subject" value={subject} onChange={handleChange} />
        <label htmlFor="room">Room:</label>
        <input type="text" name="room" id="room" value={room} onChange={handleChange} />
        <label htmlFor="course">Course:</label>
        <input type="text" name="course" id="course" value={course} onChange={handleChange} />
        <label htmlFor="semester">Semester:</label>
        <input type="text" name="semester" id="semester" value={semester} onChange={handleChange} />
        <label htmlFor="academicYear">Academic Year:</label>
        <input type="text" name="academicYear" id="academicYear" value={academicYear} onChange={handleChange} />
      </div>
    </div>
  );
}

export default StudentTimeTable;

// styles.css
// .class-schedule {
//   background-color: white;
//   font-family: sans-serif;
//   margin: 0 auto;
//   padding: 20px;
// }

// .header {
//   background-color: blue;
//   color: white;
//   padding: 10px 20px;
//   font-size: 1.5em;
// }

// .form-container {
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-between;
// }

// .form-container label {
//   width: 100px;
//   margin-bottom: 5px;
// }

// .form-container input {
//   width: calc(100% - 110px);
//   padding: 5px;
//   border: 1px solid #ccc;
//   margin-bottom: 10px;
// }
