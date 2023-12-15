function getUser(){
  return localStorage.getItem('userName') ?? 'Mystery player';
}
async function joinGroup(){
  console.log("join function")
  // const user = getUser();
  // const code = localStorage.getItem('code')
  // console.log(code)
  let code = 100;
  let group = [];
  try {
      console.log("try")
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
  
  joinedGroup(group)
}
function joinedGroup(groupArray){
  const user = getUser();
  const groupCode = document.querySelector("#groupCode").value;
  /*
  let group = []
  const groupText = localStorage.getItem('group');
  if(groupText){
      group = JSON.parse(groupText);
  }
  const code = group.code
  */
  console.log("groupCode")
  console.log(groupCode)
  let group = false; 
  // const groupArray = getGroup(groupCode);
  console.log("groupArray")
  console.log(groupArray)
  for( let i = 0; i < groupArray.length; i++){
    console.log("groupArray[i]")
    console.log(groupArray[i])
    if (groupArray[i].code == groupCode){
        group = groupArray[i];
        break
    }
  }
  console.log("group")
  console.log(group)
  if(group){
      console.log("if")
      console.log(group.code)
      localStorage.setItem('code', group.code);
      localStorage.setItem('newUser', user)
      window.location.href = "results.html";
  }
  else{
      const wrongCode = document.querySelector("#wrongCode");
      wrongCode.innerHTML = "Not a valid code"
  }
}

// async function joinGroup(code){
//   let group = [];
//       try {
//         // Get the latest high scores from the service
//         const response = await fetch(`/api/group/${code}`);
//         group = await response.json();
    
//         // Save the scores in case we go offline in the future
//         localStorage.setItem('group', JSON.stringify(group));
//       } catch {
//         // If there was an error then just use the last saved scores
//         const groupText = localStorage.getItem('group');
//         if (groupText) {
//           group = JSON.parse(groupText);
//         }
//       }
  
//   return group
// }