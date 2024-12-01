


function checkinput() {
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();
    var msgname = document.getElementById("mgsname");
    var Loginmsg = document.getElementById("Loginmsg");
    var emailmsg = document.getElementById("emailmsg");
    var passmsg = document.getElementById("passmsg");

    if (email === "" || password === "") {
        msgname.classList.remove("d-none");
        return;
    }

    var users = JSON.parse(localStorage.getItem("users")) || [];

    var user = users.find(function (u) {
        return u.email === email;
    });

    if (!user) {
        emailmsg.classList.remove("d-none");
        msgname.classList.add("d-none");
        Loginmsg.classList.add("d-none");
        passmsg.classList.add("d-none");
    } else {
        if (user.password === password) {
            Loginmsg.classList.remove("d-none");
            passmsg.classList.add("d-none");
            msgname.classList.add("d-none");
            emailmsg.classList.add("d-none");

           
            localStorage.setItem("loggedInUser", JSON.stringify(user));

          
            setTimeout(() => {
                window.location.href = "home.html";
            }, 1000); 
        } else {
            passmsg.classList.remove("d-none");
            msgname.classList.add("d-none");
            emailmsg.classList.add("d-none");
            Loginmsg.classList.add("d-none");
        }
    }
}
