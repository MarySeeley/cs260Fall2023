let socket;
const CreatedEvent = 'createdGroup';
const JoinedEvent = 'joinedGroup';
function getUser(){
    return localStorage.getItem('userName') ?? 'Mystery player';
}
async function resultSetUp(){
    
    const user = getUser();
    const code = localStorage.getItem('code')
    console.log(code)
    let group = [];
    try {
        // Get the latest high scores from the service
        const response = await fetch(`/api/group/${code}`);
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
    
    displayResults(group)
    
}
function displayResults(groupArray){
    configureWebSocket();
    const code = localStorage.getItem('code')
    for( let i = 0; i < groupArray.length; i++){
        if (groupArray[i].code == code){
            group = groupArray[i];
            break
        }
    }
    displayGroup(group)
    const newUser = localStorage.getItem('newUser')
    
    const time = group.time;
    const hourDay = group.hourDay;
    const hoursArray = hourDay.hours;
    let daysArray = hourDay.days;
    
    for(let i = 0; daysArray.length > i; i++){
        daysArray[i] = new Date(daysArray[i]);
    }
    
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
    broadcastEvent(newUser, JoinedEvent, {}, (error) => {
        if (error) {
            // Handle the error
            console.error(error);
        } else {
            // Continue with any other logic after sending the message
        }
    });
}
/*
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
*/
function displayGroup(group){
    const groupNameElem = document.querySelector('.group-name');
    groupNameElem.textContent = group.name;
    const groupCodeElem = document.querySelector('.group-code');
    groupCodeElem.textContent = group.code;
}
function configureWebSocket(){
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
    socket.onopen = (event) => {
        displayMsg('system', 'group', 'connected');
    };
    socket.onclose = (event) => {
        displayMsg('system', 'group', 'disconnected');
    };
    socket.onmessage = async (event) => {
        console.log('Received a message:', event.data);
        const msg = JSON.parse(await event.data.text());
        if (msg.type === CreatedEvent) {
            console.log("created event")
            displayMsg('User', msg.from, `created group`);
        } else if (msg.type === JoinedEvent) {
            console.log("joined event")
            displayMsg('User', msg.from, `joined group`);
        }
    };
}

  function displayMsg(cls, from, msg) {
    const chatText = document.querySelector('#messages');
    chatText.innerHTML =
      `<div class="event"><span class="${cls}-event">${from}</span> ${msg}</div>` + chatText.innerHTML;
  }

  function broadcastEvent(from, type, value, callback) {
    const event = {
      from: from,
      type: type,
      value: value,
    };
    // Check if the WebSocket is in the OPEN state before sending
    if (socket.readyState === socket.OPEN) {
        socket.send(JSON.stringify(event));
        console.log("sent")
    } else if (socket.readyState === socket.CONNECTING) {
        // If the WebSocket is still connecting, wait and try again
        console.log("connecting")
        setTimeout(() => {
            broadcastEvent(from, type, value, callback);
        }, 100);
    } else {
        console.error('WebSocket is not open. Unable to send data.');
        // Optionally, handle the error or call a callback
        if (typeof callback === 'function') {
            callback(new Error('WebSocket is not open.'));
        }
    }
  }



resultSetUp()

