import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function GroupInfo(){
  const groupName = localStorage.getItem('groupName');
  const code = localStorage.getItem('code');
  return(
    <div>
      <h1>Welcome to Group {groupName}</h1>
      <h3>Your Group Code is:</h3>
      <h4 >{code}</h4>   
      <p>Fill out when you are available</p>
    </div>
  );
}
function CreateTable(){
  const tableRef = useRef(null);
  useEffect(() => {
    const table = tableRef.current;
    const startDayValue = localStorage.getItem('startDay');
    const endDayValue = localStorage.getItem('endDay');
    const startTime = localStorage.getItem('startTime');
    const endTime = localStorage.getItem('endTime');
    // console.log(startTime);
    // const startDayValue = 'December 17, 1995 03:24:00';
    // const endDayValue = 'December 19, 1995 03:24:00';
    // const startTime = '3:00';
    // const endTime = '5:00';
    const startDay = new Date(startDayValue);
    const endDay = new Date(endDayValue);
    const daysArray = []
    for(let d = startDay; d <= endDay; d.setDate(d.getDate()+1)){
        daysArray.push(new Date(d));
    }
    const rowHeadElem = document.createElement('tr');
    const spaceElem = document.createElement('th');
    spaceElem.textContent = " ";
    rowHeadElem.appendChild(spaceElem);
    for(let i = 0; daysArray.length > i; i++){
      const dateThElem = document.createElement('th');
      dateThElem.textContent = daysArray[i];
      // date.getDay() + " " + date.getMonth() + " " + date.getDate() + " " + date.getYear();
      rowHeadElem.appendChild(dateThElem);
    }
    const tableHeadElem = document.createElement("thead");
    const tableBodyElem = document.createElement("tbody");
    tableHeadElem.appendChild(rowHeadElem);
    const startTimeLst = startTime.split(':');
    const endTimeLst = endTime.split(':');
    const startHour = startTimeLst[0];
    const endHour = endTimeLst[0];
    const hoursArray = [];
    for(let i = startHour; i <= endHour; i++){
        let hour = i + ":00";
        hoursArray.push(i);
    }
    
    let time = Object();
    for(let i = 0; hoursArray.length > i; i++){
      const timeEl = document.createElement('td');
      timeEl.textContent = hoursArray[i];
      const rowEl = document.createElement('tr');
      rowEl.appendChild(timeEl);
      for(let j = 0; daysArray.length > j; j++){
          const hourElem = document.createElement('td')
          const idSelect = hoursArray[i] + daysArray[j];
          time[idSelect] = 'no'
          hourElem.innerHTML = `<select onchange="this.className=this.options[this.selectedIndex].className" class="no" id = "${idSelect}" > <option class = "no">No</option> <option class = "yes">Yes</option> <option class = "maybe">Maybe</option></select>`;
          rowEl.appendChild(hourElem);
      }
      tableBodyElem.appendChild(rowEl);
    }
    table.appendChild(tableHeadElem);
    table.appendChild(tableBodyElem);
  },[]);
 
  return(
    <div>
      <table ref = {tableRef}>
        {/* {tableHeadElem} */}
        {/* {tableBodyElem} */}
      </table>
    </div>
  );
}
function SubmitTimes(){
  const navigate = useNavigate();
  const handleClick = () =>{
    navigate('../results');
  };
  return(
    <div>
    <button type = "submit" className="btn btn-secondary" onClick={handleClick}>Submit Times</button>
    </div>
  );
}
export function Time() {
  return (
    <main>
      <GroupInfo /> 
      <div>
          <CreateTable />
          <br />
          <SubmitTimes />
          
      </div>
    </main>
  );
}