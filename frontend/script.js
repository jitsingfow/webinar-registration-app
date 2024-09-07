const form = document.getElementById("registrationForm");
const fetchUsersBtn = document.getElementById("fetchUsersBtn");
const userList = document.getElementById("userList");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  // POST request to register a new user
  try {
    const response = await fetch("http://localhost:3000/api/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    });

    const data = await response.json();
    if (response.ok) {
      alert("User registered successfully");
      form.reset();
    } else {
      alert(data.error || "Something went wrong");
    }
  } catch (error) {
    console.error("Error:", error);
  }
});

fetchUsersBtn.addEventListener("click", async () => {
  // GET request to fetch all registrations
  try {
    const response = await fetch("http://localhost:3000/api/registration");
    const users = await response.json();

    // Clear the list before displaying new data
    userList.innerHTML = "";

    // Display the users in the list
    users.forEach((user) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${user.name} (${user.email})`;
      userList.appendChild(listItem);
    });
  } catch (error) {
    console.error("Error:", error);
  }
});
