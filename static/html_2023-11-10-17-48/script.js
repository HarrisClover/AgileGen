
const searchForm = document.getElementById('searchForm');
const nameInput = document.getElementById('nameInput');
const locationInput = document.getElementById('locationInput');
const usersList = document.getElementById('usersList');

searchForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const name = nameInput.value.trim();
  const location = locationInput.value.trim();

  searchUsers(name, location);
});

function searchUsers(name, location) {
  // Simulated API call or data retrieval
  const users = [
    { name: 'John', location: 'New York' },
    { name: 'Jane', location: 'Los Angeles' },
    { name: 'John', location: 'Chicago' },
    { name: 'Alex', location: 'New York' },
    { name: 'Emily', location: 'New York' },
  ];

  const filteredUsers = users.filter(function (user) {
    if (name && location) {
      return user.name.toLowerCase() === name.toLowerCase() && user.location.toLowerCase() === location.toLowerCase();
    } else if (name) {
      return user.name.toLowerCase() === name.toLowerCase();
    } else if (location) {
      return user.location.toLowerCase() === location.toLowerCase();
    }
  });

  displayUsers(filteredUsers);
}

function displayUsers(users) {
  usersList.innerHTML = '';

  if (users.length === 0) {
    const noResults = document.createElement('li');
    noResults.textContent = 'No users found.';
    usersList.appendChild(noResults);
  } else {
    users.forEach(function (user) {
      const listItem = document.createElement('li');
      listItem.textContent = `Name: ${user.name}, Location: ${user.location}`;
      usersList.appendChild(listItem);
    });
  }
}
