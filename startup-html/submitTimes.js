function submitTimes(){
    let time = []
    const timeText = localStorage.getItem('time');
    if(timeText){
        time = JSON.parse(timeText);
    }
    for (const key in time){
        const timeAnswer = document.getElementById(key).value;
        time[key] = timeAnswer;
    }
    console.log(time)
    localStorage.setItem('time', JSON.stringify(time))
    window.location.href = "submission.html"

}