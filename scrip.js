```javascript
// Dark and light mode
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "☀️ Light Mode";
        localStorage.setItem("theme", "dark");
    } else {
        themeBtn.textContent = "🌙 Dark Mode";
        localStorage.setItem("theme", "light");
    }
});

// Remember the selected theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeBtn.textContent = "☀️ Light Mode";
}

// Contact form
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const mobile number = document.getElementbyId("mobile number).value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        document.getElementById("status").textContent =
            "Please fill in all fields.";
        return;
    }

    const subject = encodeURIComponent("Portfolio Contact from " + name);
    const body = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\n\nMessage:\n" + message
    );

    document.getElementById("status").textContent =
        "Opening your email application...";

    window.location.href =
        "mailto:vinoth.ramu6688@gmail.com?subject=" +
        subject + "&body=" + body;
});
