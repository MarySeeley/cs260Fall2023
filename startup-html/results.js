function resultSetUp(){
    let hourDay = []
    const hourDayText = localStorage.getItem('hourDay');
    if(hourDayText){
        hourDay = JSON.parse(hourDayText)
    }
    let time = []
    const timeText = localStorage.getItem('time');
    if(timeText){
        time = JSON.parse(timeText);
        console.log(time)
    }
    
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
function getGroupNameCode(){
    const groupNameElem = document.querySelector('.group-name');
    const groupText = localStorage.getItem('group');
    const group = JSON.parse(groupText);
    groupNameElem.textContent = group.name;
    const groupCodeElem = document.querySelector('.group-code');
    groupCodeElem.textContent = group.code;
}


getGroupNameCode()
resultSetUp()