// javascript here

// popup form
document.addEventListener("DOMContentLoaded", function () {
    openPopup();
});

function openPopup() {
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function submitName() {
    const name = document.getElementById("nameInput").value.trim();
    if (name !== "") {
    document.getElementById("welcome-text").textContent = `Hi ${name}, Welcome To website`;
    closePopup();
    }
}

// message form
document.getElementById("message-form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get input values
    const name = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const message = document.getElementById("message-text").value;
    const currentTime = new Date().toString();

    // Create new output box
    const outputBox = document.createElement("div");
    outputBox.classList.add("output-box");

    outputBox.innerHTML = `
        <p><b>Current time :</b> ${currentTime}</p>
        <p><b>Nama :</b> ${name}</p>
        <p><b>Tanggal Lahir :</b> ${dob}</p>
        <p><b>Jenis Kelamin :</b> ${gender}</p>
        <p><b>Pesan :</b> ${message}</p>
    `;

    // Append to the output container
    document.getElementById("output").appendChild(outputBox);

    // Optional: Clear the form
    e.target.reset();
});