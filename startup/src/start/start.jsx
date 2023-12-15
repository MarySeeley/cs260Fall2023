import React, { useState, useEffect } from 'react';
import { Time } from '../time/time';
import { useNavigate } from 'react-router-dom';


function GroupName(){
  const [groupName, setGroupName] = useState('');
  React.useEffect(() => {
    localStorage.setItem('groupName', groupName);
  }, [groupName]);

  const handleInputChange = (event) => {
    setGroupName(event.target.value);
  };
  
  return(
    <div>
      <label htmlFor = "groupName">Group Name</label>
      <input type = "text" id="groupName" placeholder = "Group name here" value={groupName} onChange={handleInputChange}/>
    </div>
  );
}
function Notes(){
  const [notes, setNotes] = useState('');
  React.useEffect(() => {
    localStorage.setItem('notes', notes);
  }, [notes]);

  const handleInputChange = (event) => {
    setNotes(event.target.value);
  };
  
  return(
    <div>
      <label htmlFor = "notes">Notes to Participants</label>
      <input type = "text" id = "notes" placeholder = "Notes to participants here" value={notes} onChange={handleInputChange}/>
    </div>
  );
}

function StartDay(){
  const [startDay, setStartDay] = useState('');
  React.useEffect(() => {
    localStorage.setItem('startDay', startDay);
  }, [startDay]);

  const handleInputChange = (event) => {
    setStartDay(event.target.value);
  };
  
  return(
    <div>
      <label htmlFor = "startDay">Start Day</label>
      <input type = "date" className = "datepicker" id = "startDay" value={startDay} onChange={handleInputChange}/>
    </div>
  );
}

function EndDay(){
  const [endDay, setEndDay] = useState('');
  React.useEffect(() => {
    localStorage.setItem('endDay', endDay);
  }, [endDay]);

  const handleInputChange = (event) => {
    setEndDay(event.target.value);
  };
  
  return(
    <div>
      <label htmlFor = "endDay">End Day</label>
      <input type = "date" id = "endDay" value={endDay} onChange={handleInputChange}/>
    </div>
  );
}

function StartTime(){
  const [startTime, setStartTime] = useState('');
  React.useEffect(() => {
    localStorage.setItem('startTime', startTime);
  }, [startTime]);

  const handleInputChange = (event) => {
    setStartTime(event.target.value);
  };
  
  return(
    <div>
      <label htmlFor = "startTime">Start Time</label>
            <input type = "time" id = "startTime" value={startTime} onChange={handleInputChange}/>
    </div>
  );
}

function EndTime(){
  const [endTime, setEndTime] = useState('');
  React.useEffect(() => {
    localStorage.setItem('endTime', endTime);
  }, [endTime]);

  const handleInputChange = (event) => {
    setEndTime(event.target.value);
  };
  
  return(
    <div>
      <label htmlFor = "endTime">End Time</label>
      <input type = "time" id = "endTime"value={endTime} onChange={handleInputChange}/>
    </div>
  );
}
function Submit(user){
  const navigate = useNavigate();
  const handleClick = () => {
    const groupCode = Math.floor(Math.random() *10000);//make no repeats
    localStorage.setItem('code', groupCode);
    // const groupName = localStorage.getItem('groupName');
    // const notes = localStorage.getItem('notes');
    // const startDay = localStorage.getItem('startDay');
    // const endDay = localStorage.getItem('endDay');
    // const startTime = localStorage.getItem('startTime');
    // const endTime = localStorage.getItem('endTime');
    // const group = {'code': groupCode, 'name': groupName, 'notes': notes, 'startDay': startDay, 'endDay': endDay, 'startTime': startTime, 'endTime': endTime, 'user' : user};
    // localStorage.setItem('group', JSON.stringify(group));
    
    
      // Navigate to another route when a button is clicked
      navigate('../time');
    
    
  };
  
  return(
    <div>
      <button type = "submit" className="btn btn-secondary" onClick = {handleClick}>Create Group</button>
    </div>
  );
}

export function Start(userName) {

  return (
    <main>
        <h1>Let's Get Start a Group</h1>
        <div>
            <GroupName />
            <br />
            <Notes />
            <br />
            <StartDay />
            <br />
            <EndDay />
            <br />
            <StartTime />
            <br />
            <EndTime />
            <br />
            <Submit userName={userName}/>
        </div>
    </main>
  );
}