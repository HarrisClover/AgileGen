
const userList = [
    { name: "John", location: "New York" },
    { name: "Jane", location: "Los Angeles" },
    { name: "Mike", location: "New York" },
    { name: "Sarah", location: "Chicago" },
    { name: "David", location: "New York" },
    { name: "Emily", location: "San Francisco" },
];

const searchButton = document.getElementById("search-button");
const nameInput = document.getElementById("name-input");
const locationInput = document.getElementById("location-input");
const userListContainer = document.getElementById("user-list");

searchButton.addEventListener("click", () => {
    const name = nameInput.value.trim();
    const location = locationInput.value.trim();

    const filteredUsers = userList.filter(user => {
        if (name && location) {
            return user.name.toLowerCase() === name.toLowerCase() && user.location.toLowerCase() === location.toLowerCase();
        } else if (name) {
            return user.name.toLowerCase() === name.toLowerCase();
        } else if (location) {
            return user.location.toLowerCase() === location.toLowerCase();
        }
    });

    displayUserList(filteredUsers);
});

function displayUserList(users) {
    userListContainer.innerHTML = "";

    if (users.length === 0) {
        userListContainer.innerHTML = "No users found.";
        return;
    }

    users.forEach(user => {
        const userCard = document.createElement("div");
        userCard.classList.add("user-card");
        userCard.innerHTML = `
            <h3>${user.name}</h3>
            <p>${user.location}</p>
        `;
        userListContainer.appendChild(userCard);
    });
}
