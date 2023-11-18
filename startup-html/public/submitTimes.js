async function submitTimes(){
    let time = []
    const timeText = localStorage.getItem('time');
    if(timeText){
        time = JSON.parse(timeText);
    }
    for (const key in time){
        const timeAnswer = document.getElementById(key).value;
        time[key] = timeAnswer;
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
    window.location.href = "submission.html"

}