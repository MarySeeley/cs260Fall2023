/*
function getUser(){
    console.log("getUser")
    return localStorage.getItem('userName') ?? 'Mystery player';
}
async function submitTimes(){
    const user = getUser();
    console.log(user)
    console.log("user")
    let time = [];
    try {
        // Get the latest high scores from the service
        const response = await fetch(`/api/time/${user}`);
        time = await response.json();
        console.log("time in try")
        console.log(time)
        // Save the scores in case we go offline in the future
        localStorage.setItem('time', JSON.stringify(time));
        console.log("end of try")
    } catch {
        // If there was an error then just use the last saved scores
        const timeText = localStorage.getItem('time');
        if (timeText) {
        time = JSON.parse(timeText);
        }
        console.log("end of catch")
    }
    
    finalSubmit(time)
    
}
*/
async function submitTimes(){
    let group = []
    const groupText = localStorage.getItem('group');
    if (groupText) {
        group = JSON.parse(groupText);
    }
    console.log("before for loop")
    
    let time = group.time
    console.log(time)
    for (const key in time){
        if (time[key] == 'no'){
            const timeAnswer = document.getElementById(key).value;
            time[key] = timeAnswer;
        }
        
    }
    console.log("after for loop");
    console.log(time);
    group['time'] = time;
    localStorage.setItem('code', group.code);
    
    try {
        const response = await fetch('/api/group', {
          method: 'POST',
      
          headers: {'content-type': 'application/json'},
          body: JSON.stringify(group),
        });
  
        // Store what the service gave us as the high scores
        const times = await response.json();
        localStorage.setItem('group', JSON.stringify(group));
      } catch {
        // If there was an error then just track scores locally
        localStorage.setItem('group', JSON.stringify(group))
    }
    /*
    try {
        const response = await fetch('/api/group', {
          method: 'POST',
          headers: {'content-type': 'application/json'},
          body: JSON.stringify(group),
        });
  
        // Store what the service gave us as the high scores
        const group = await response.json();
        localStorage.setItem('group', JSON.stringify(group));
        console.log("end of try for saving group")
      } catch {
        // If there was an error then just track scores locally
        localStorage.setItem('group', JSON.stringify(group));
        console.log("end of catch")
    }
    */
    window.location.href = "results.html"

}