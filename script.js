const toggleSwitch = document.querySelector('input[name="theme"]');

toggleSwitch.addEventListener("change",function(){
    if(this.checked){
        console.log("checked");
        document.documentElement.setAttribute("data-theme","dark");
        localStorage.setItem("theme","dark");
    }
    else{
        document.documentElement.setAttribute("data-theme","light");
        localStorage.setItem("theme", "light");
    }
});
const currentTheme = localStorage.getItem("theme");
if(currentTheme){
    document.documentElement.setAttribute("data-theme",currentTheme);
}
if(currentTheme === "dark"){
    toggleSwitch.checked = true;
}

