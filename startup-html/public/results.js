async function resultSetUp(){
    let hourDay = [];
    try {
        // Get the latest high scores from the service
        const response = await fetch('/api/hourDay');
        hourDay = await response.json();
    
        // Save the scores in case we go offline in the future
        localStorage.setItem('hourDay', JSON.stringify(hourDay));
    } catch {
        // If there was an error then just use the last saved scores
        const hourDayText = localStorage.getItem('hourDay');
        if (hourDayText) {
        hourDay = JSON.parse(hourDayText);
        }
    }
    let time = [];
    try {
        // Get the latest high scores from the service
        const response = await fetch('/api/time');
        time = await response.json();
    
        // Save the scores in case we go offline in the future
        localStorage.setItem('time', JSON.stringify(time));
    } catch {
        // If there was an error then just use the last saved scores
        const timeText = localStorage.getItem('time');
        if (timeText) {
        time = JSON.parse(timeText);
        }
    }
    
    
    displayResults(hourDay, time);
}
function displayResults(hourDay, time){
    
    
    const hoursArray = hourDay.hours;
    let daysArray = hourDay.days;
    for(let i = 0; daysArray.length > i; i++){
        daysArray[i] = new Date(daysArray[i]);
    }
    console.log(daysArray);
    const tableBodyElem = document.querySelector('#resultBody');
    const tableHeadElem = document.querySelector('#resultHead')
    const rowHeadElem = document.createElement('tr');
    const spaceElem = document.createElement('th');
    spaceElem.textContent = " ";
    rowHeadElem.appendChild(spaceElem);
    
    for(let i = 0; daysArray.length > i; i++){
        const dateThElem = document.createElement('th');
        dateThElem.textContent = daysArray[i];
        //date.getDay() + " " + date.getMonth() + " " + date.getDate() + " " + date.getYear();
        rowHeadElem.appendChild(dateThElem);
    }
    tableHeadElem.appendChild(rowHeadElem);
    
    
    for(let i = 0; hoursArray.length > i; i++){
        const timeEl = document.createElement('td');
        timeEl.textContent = hoursArray[i];
        const rowEl = document.createElement('tr');
        rowEl.appendChild(timeEl);
        for(let j = 0; daysArray.length > j; j++){
            const hourElem = document.createElement('td')
            const idSelect = hoursArray[i] + daysArray[j]
            let classBody = 'table-danger'
            if(time[idSelect] == 'Yes'){
                classBody = 'table-success';
            }
            if(time[idSelect] == 'Maybe'){
                classBody = 'table-warning';
            }
            hourElem.setAttribute("class", classBody)
            hourElem.innerHTML = `${hoursArray[i]}`
            rowEl.appendChild(hourElem);
        }
        tableBodyElem.appendChild(rowEl);
    }
}
async function getGroupNameCode(){
    let group = [];
        try {
          // Get the latest high scores from the service
          const response = await fetch('/api/group');
          group = await response.json();
      
          // Save the scores in case we go offline in the future
          localStorage.setItem('group', JSON.stringify(group));
        } catch {
          // If there was an error then just use the last saved scores
          const groupText = localStorage.getItem('group');
          if (groupText) {
            group = JSON.parse(groupText);
          }
        }
    
    displayGroup(group);
}
function displayGroup(group){
    groupNameElem.textContent = group.name;
    const groupCodeElem = document.querySelector('.group-code');
    groupCodeElem.textContent = group.code;
}


getGroupNameCode()
resultSetUp()