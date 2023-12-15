function getUser(){
    return localStorage.getItem('userName') ?? 'Mystery player';
}
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
    
    display(group);
}
function display(group){
    groupNameElem.textContent = group.name;
    const groupCodeElem = document.querySelector('.group-code');
    groupCodeElem.textContent = group.code;
}
getGroupNameCode()