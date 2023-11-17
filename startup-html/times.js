function selectTimes(){
    let group = []
    const groupText = localStorage.getItem('group');
    if(groupText){
        group = JSON.parse(groupText);
    }
    const tableHeadElem = document.querySelector('#headSelect');
    const tableBodyElem = document.querySelector('#bodySelect');
    if(groupText){
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
        let time = Object()
        const hourDay = {'hours': hoursArray, 'days': daysArray};
        localStorage.setItem('hourDay', JSON.stringify(hourDay));
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
        localStorage.setItem('time', JSON.stringify(time))
        
    }
    else{
        tableHeadElem.innerHTML = '<tr><th>Pick dates<th></tr>';
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
selectTimes()