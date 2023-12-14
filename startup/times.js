
function getUser(){
    console.log("getUser")
    return localStorage.getItem('userName') ?? 'Mystery player';
}
/*
async function selectTimes(){
    const user = getUser();
    console.log(user)
    let group = [];
    try {
        // Get the latest high scores from the service
        const response = await fetch(`/api/group/${user}`);
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
    
    showTimes(group)
    getGroupNameCode(group)
    
}
*/
async function selectTimes(){
    let group = []
    const groupText = localStorage.getItem('group');
    if (groupText) {
        group = JSON.parse(groupText);
    }
    const user = getUser();
    const tableHeadElem = document.querySelector('#headSelect');
    const tableBodyElem = document.querySelector('#bodySelect');
    console.log("before if")
    console.log(group)
    if(group){
        console.log("after if")
        console.log(group)
        const startDay = new Date(group.startDay);
        const endDay = new Date(group.endDay);
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
            //date.getDay() + " " + date.getMonth() + " " + date.getDate() + " " + date.getYear();
            rowHeadElem.appendChild(dateThElem);
        }
        tableHeadElem.appendChild(rowHeadElem);
        const startTime = group.startTime;
        const endTime = group.endTime;
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
        const hourDay = {'hours': hoursArray, 'days': daysArray};
        
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
        group['time'] = time;
        group['hourDay'] = hourDay;
        localStorage.setItem('group', JSON.stringify(group));
        localStorage.setItem('newUser', user);
        /*
        try {
            const response = await fetch('/api/hourDay', {
              method: 'POST',
              headers: {'content-type': 'application/json'},
              body: JSON.stringify(hourDay),
            });
      
            // Store what the service gave us as the high scores
            const hourDays = await response.json();
            localStorage.setItem('hourDay', JSON.stringify(hourDays));
          } catch {
            // If there was an error then just track scores locally
            localStorage.setItem('hourDay', JSON.stringify(hourDay));
        }
        try {
            const response = await fetch('/api/time', {
              method: 'POST',
              headers: {'content-type': 'application/json'},
              body: JSON.stringify(time),
            });
      
            // Store what the service gave us as the high scores
            const times = await response.json();
            localStorage.setItem('time', JSON.stringify(times));
          } catch {
            // If there was an error then just track scores locally
            localStorage.setItem('time', JSON.stringify(time))
        }
        */
    }
    else{
        tableHeadElem.innerHTML = '<tr><th>Pick dates<th></tr>';
    }
}

function getGroupNameCode(){
    let group = []
    const groupText = localStorage.getItem('group');
    if (groupText) {
        group = JSON.parse(groupText);
    }
    const groupNameElem = document.querySelector('.group-name');
    groupNameElem.textContent = group.name;
    const groupCodeElem = document.querySelector('.group-code');
    groupCodeElem.textContent = group.code;
}


selectTimes()
getGroupNameCode()