window.onload = function () {
    var logoutBtn = document.getElementById("logoutBtn");
    var welcomeMessage = document.getElementById("welcomeMessage");

    
    var loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (loggedInUser) {
    
        welcomeMessage.textContent = `Welcome ${loggedInUser.name}`;
    } else {
   
        window.location.href = "index.html";
    }

    
    logoutBtn.onclick = function () {
        localStorage.removeItem("loggedInUser");
        window.location.href = "index.html";
    };
};
