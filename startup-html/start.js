function create(){
    const groupCode = Math.floor(Math.random() *10000);//make no repeats
    const groupName = document.querySelector("#groupName").value;
    const notes = document.querySelector("#notes").value;
    const startDay = document.querySelector("#startDay").valueAsDate;
    const endDay = document.querySelector("#endDay").valueAsDate;
    const startTime = document.querySelector("#startTime").value;
    const endTime = document.querySelector("#endTime").value;
    const new_Group = {'code': groupCode, 'name': groupName, 'notes': notes, 'startDay': startDay, 'endDay': endDay, 'startTime': startTime, 'endTime': endTime};

    localStorage.setItem('group', JSON.stringify(new_Group));
    window.location.href = "times.html";
}