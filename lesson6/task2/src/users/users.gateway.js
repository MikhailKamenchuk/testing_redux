const baseUrl = 'https://api.github.com/users/';

export const getUserData = userName =>
  fetch(`${baseUrl}${userName}`)
    .then(res => res.json())