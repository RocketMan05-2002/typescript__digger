import { User } from "../models/User"

export class AuthManager {
    private users: User[] = [];
    private curentUser: User | null = null;

    register(email: string, password: string): User{
        const existingUser = this.users.find(user=>user.email === email);

        if(existingUser) return existingUser;

        const newUser: User = {
            id: Date.now(),
            email: email,
            password: password,
            isLoggedIn: false
        };

        this.users.push(newUser);
        return newUser;
    }

    login(email: string, password: string): string{
        const user = this.users.find(user => user.email === email);

        if(!user) return "User not found!";
        if(user.password !== password) return "Invalid Credentials!";

        user.isLoggedIn = true;
        this.curentUser = user;

        return `${user.email} logged in successfully`;
    }

    logout():string{
        if(!this.curentUser){
            return "no one is logged in broski!";
        }
        this.curentUser.isLoggedIn = false;
        this.curentUser = null;
        return "logged out successfully!";
    }

    getCurrentUser(): User|null{
        return this.curentUser;
    }

    getAllUsers():User[]{
        return this.users;
    }
}