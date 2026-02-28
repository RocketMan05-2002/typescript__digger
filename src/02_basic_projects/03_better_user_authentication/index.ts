import { AuthManager } from "./managers/AuthManager";

async function main() {

    const auth = new AuthManager();

    console.log("=== Production Auth System (bcrypt + sessions) ===");


    try {

        // Register users
        console.log("\nRegistering users...");

        const user1 = await auth.register("abhinay@gmail.com", "password123");
        const user2 = await auth.register("john@gmail.com", "john123");

        console.log("Registered users:");
        console.log(user1);
        console.log(user2);


        // Login
        console.log("\nLogging in Abhinay...");

        const token = await auth.login("abhinay@gmail.com", "password123");

        console.log("Session token:");
        console.log(token);


        // Get user from token
        console.log("\nGetting user from token...");

        const currentUser = auth.getUserFromToken(token);

        console.log("Authenticated user:");
        console.log(currentUser);


        // Show sessions (debug)
        console.log("\nActive sessions:");
        console.log(auth.getAllSessions());


        // Logout
        console.log("\nLogging out...");

        const logoutSuccess = auth.logout(token);

        console.log("Logout success:", logoutSuccess);


        // Try accessing user after logout
        console.log("\nTrying to access user after logout...");

        const userAfterLogout = auth.getUserFromToken(token);

        console.log("Result:", userAfterLogout);


    } catch (error) {

        console.error("Error:", (error as Error).message);

    }

}

main();