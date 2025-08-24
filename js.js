// Dummy users storage (for demo purposes)
let users = [
  { email: "gkamo3528@gmail.com", password: "password123" } // Your test account
];

// Register form
const registerForm = document.getElementById("register-form");
if (registerForm) {
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("reg-email").value;
    const password = document.getElementById("reg-password").value;

    if (!email || !password) return alert("Please fill all fields.");

    if (users.find(u => u.email === email)) {
      alert("User already exists.");
      return;
    }

    users.push({ email, password });
    alert("Registration successful! You can now login.");
    registerForm.reset();
  });
}

// Login form
const loginForm = document.getElementById("login-form");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      alert("Login successful!");
      // Redirect to homepage
      window.location.href = "index.html";
    } else {
      alert("Invalid email or password.");
    }
  });
}