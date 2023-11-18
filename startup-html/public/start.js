async function create(){
    const groupCode = Math.floor(Math.random() *10000);//make no repeats
    const groupName = document.querySelector("#groupName").value;
    const notes = document.querySelector("#notes").value;
    const startDay = document.querySelector("#startDay").valueAsDate;
    const endDay = document.querySelector("#endDay").valueAsDate;
    const startTime = document.querySelector("#startTime").value;
    const endTime = document.querySelector("#endTime").value;
    const new_group = {'code': groupCode, 'name': groupName, 'notes': notes, 'startDay': startDay, 'endDay': endDay, 'startTime': startTime, 'endTime': endTime};

    try {
        const response = await fetch('/api/group', {
          method: 'POST',
          headers: {'content-type': 'application/json'},
          body: JSON.stringify(new_group),
        });
  
        // Store what the service gave us as the high scores
        const group = await response.json();
        localStorage.setItem('group', JSON.stringify(group));
      } catch {
        // If there was an error then just track scores locally
        localStorage.setItem('group', JSON.stringify(new_group));
    }
    window.location.href = "times.html";
}