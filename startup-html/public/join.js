async function joinGroup(){
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
    
    joinGrouped(group);
}

function joinGrouped(group){
    const groupCode = document.querySelector("#groupCode").value;
    let group = []
    const groupText = localStorage.getItem('group');
    if(groupText){
        group = JSON.parse(groupText);
    }
    const code = group.code
    if(code == groupCode){
        window.location.href = "times.html";
    }
    else{
        const wrongCode = document.querySelector("#wrongCode");
        wrongCode.innerHTML = "Not a valid code"
    }
}