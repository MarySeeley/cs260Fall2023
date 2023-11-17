function getGroupNameCode(){
    const groupNameElem = document.querySelector('.group-name');
    const groupText = localStorage.getItem('group');
    const group = JSON.parse(groupText);
    groupNameElem.textContent = group.name;
    const groupCodeElem = document.querySelector('.group-code');
    groupCodeElem.textContent = group.code;
}
getGroupNameCode()