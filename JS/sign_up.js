

function checkinput() {
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();
    var msgname = document.getElementById("mgsname");

 
    msgname.classList.add("d-none");
    msgname.textContent = "";


    if (name === "" || email === "" || password === "") {
        msgname.textContent = "All inputs are required";
        msgname.classList.remove("d-none");
        msgname.classList.add("text-danger");
        return;
    }

    if (!validateEmail(email)) {
        msgname.textContent = "Invalid email format";
        msgname.classList.remove("d-none");
        msgname.classList.add("text-danger");
        return;
    }

  
    var users = JSON.parse(localStorage.getItem("users")) || [];

  
    var userExists = users.some(function(user) {
        return user.email === email;
    });

    if (userExists) {
        msgname.textContent = "This email is already registered. Please log in.";
        msgname.classList.remove("d-none");
        msgname.classList.add("text-danger");
    } else {
      
        users.push({ name: name, email: email, password: password });
        localStorage.setItem("users", JSON.stringify(users));
        msgname.textContent = "Account successfully created. Now you can login";
        msgname.classList.remove("d-none");
        msgname.classList.remove("text-danger");
        msgname.classList.add("text-success");
      
       
    }
}


function validateEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
