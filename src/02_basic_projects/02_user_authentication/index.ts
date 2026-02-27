

import { AuthManager } from "./managers/AuthManager";

const auth = new AuthManager();

console.log("user uthentication simulator!");

const user1 = auth.register("abhinay@gmail.com", "password123");
const user2 = auth.register("pragati@gmail.com", "password123");

console.log(auth.getAllUsers());

console.log(auth.login("abhinay@gmail.com", "password123"));
console.log(auth.getCurrentUser());
console.log(auth.logout());


/*  OUTPUT AT THE TERMINAL -
rocketman@Abhinays-MacBook-Air 02_user_authentication % ts-node index.ts
user uthentication simulator!
[
  {
    id: 1772195473875,
    email: 'abhinay@gmail.com',
    password: 'password123',
    isLoggedIn: false
  },
  {
    id: 1772195473875,
    email: 'pragati@gmail.com',
    password: 'password123',
    isLoggedIn: false
  }
]
abhinay@gmail.com logged in successfully
{
  id: 1772195473875,
  email: 'abhinay@gmail.com',
  password: 'password123',
  isLoggedIn: true
}
logged out successfully!
rocketman@Abhinays-MacBook-Air 02_user_authentication % 
*/