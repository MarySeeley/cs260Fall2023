function login(){
    const nameElem = document.querySelector("#name");
    localStorage.setItem("userName", nameElem.value);
    window.location.href = "groups.html"
}