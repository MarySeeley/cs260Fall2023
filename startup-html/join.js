function joinGroup(){
    const groupCode = document.querySelector("#groupCode").value;
    let group = []
    const groupText = localStorage.getItem('group');
    if(groupText){
        group = JSON.parse(groupText);
    }
    const code = group.code
    console.log(code)
    console.log(groupCode)
    if(code == groupCode){
        window.location.href = "times.html";
    }
    else{
        const wrongCode = document.querySelector("#wrongCode");
        wrongCode.innerHTML = "Not a valid code"
    }
}