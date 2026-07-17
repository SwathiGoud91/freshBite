// ======================================
// auth.js
// FreshBite Authentication
// ======================================

// ---------- REGISTER ----------

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", registerUser);

}

function registerUser(e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim().toLowerCase();

    const phone = document.getElementById("phone").value.trim();

    const password = document.getElementById("password").value;

    const confirmPassword = document.getElementById("confirmPassword").value;

    if (!name || !email || !phone || !password || !confirmPassword) {

        alert("Please fill all fields.");

        return;

    }

    if (password !== confirmPassword) {

        alert("Passwords do not match.");

        return;

    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const exists = users.find(user => user.email === email);

    if (exists) {

        alert("Email already registered.");

        return;

    }

    const newUser = {

        id: Date.now(),

        name,

        email,

        phone,

        password

    };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration Successful!");

    window.location.href = "login.html";

}

// ---------- LOGIN ----------

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", loginUser);

}

function loginUser(e) {

    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim().toLowerCase();

    const password = document.getElementById("loginPassword").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(

        u =>

        u.email === email &&

        u.password === password

    );

    if (!user) {

        alert("Invalid Email or Password");

        return;

    }

    localStorage.setItem(

        "currentUser",

        JSON.stringify(user)

    );

    alert("Login Successful!");

    window.location.href = "account.html";

}

// ---------- LOGOUT ----------

function logout() {

    localStorage.removeItem("currentUser");

    alert("Logged Out Successfully");

    window.location.href = "index.html";

}

// ---------- PROFILE ----------

function loadProfile() {

    const user = JSON.parse(

        localStorage.getItem("currentUser")

    );

    if (!user) return;

    const profileName = document.getElementById("profileName");

    const profileEmail = document.getElementById("profileEmail");

    const profilePhone = document.getElementById("profilePhone");

    if (profileName)

        profileName.innerText = user.name;

    if (profileEmail)

        profileEmail.innerText = user.email;

    if (profilePhone)

        profilePhone.innerText = user.phone;

}

loadProfile();