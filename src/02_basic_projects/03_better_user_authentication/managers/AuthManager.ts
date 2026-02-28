import bcrypt from "bcrypt";
import { User } from "../models/User";
import { Session } from "../models/Session";

export class AuthManager {

    private users: User[] = [];
    private sessions: Session[] = [];

    private readonly saltRounds = 10;


    // Generate secure session token
    private generateToken(): string {

        const randomPart = Math.random().toString(36).substring(2);

        const timePart = Date.now().toString();

        return `token_${randomPart}_${timePart}`;
    }


    // Register new user
    async register(email: string, password: string): Promise<Omit<User, "passwordHash">> {

        const existingUser = this.users.find(user => user.email === email);

        if (existingUser) {
            throw new Error("User already exists");
        }

        const passwordHash = await bcrypt.hash(password, this.saltRounds);

        const newUser: User = {
            id: Date.now(),
            email,
            passwordHash
        };

        this.users.push(newUser);

        // never return passwordHash
        const { passwordHash: _, ...safeUser } = newUser;

        return safeUser;
    }


    // Login user and create session
    async login(email: string, password: string): Promise<string> {

        const user = this.users.find(user => user.email === email);

        if (!user) {
            throw new Error("User not found");
        }

        const isValid = await bcrypt.compare(password, user.passwordHash);

        if (!isValid) {
            throw new Error("Invalid credentials");
        }

        const token = this.generateToken();

        const session: Session = {
            token,
            userId: user.id,
            createdAt: new Date()
        };

        this.sessions.push(session);

        return token;
    }


    // Logout user by removing session
    logout(token: string): boolean {

        const index = this.sessions.findIndex(session => session.token === token);

        if (index === -1) {
            return false;
        }

        this.sessions.splice(index, 1);

        return true;
    }


    // Get user from session token
    getUserFromToken(token: string): Omit<User, "passwordHash"> | null {

        const session = this.sessions.find(s => s.token === token);

        if (!session) {
            return null;
        }

        const user = this.users.find(u => u.id === session.userId);

        if (!user) {
            return null;
        }

        const { passwordHash: _, ...safeUser } = user;

        return safeUser;
    }


    // Debug methods (optional)
    getAllUsers(): Omit<User, "passwordHash">[] {

        return this.users.map(({ passwordHash, ...safeUser }) => safeUser);
    }


    getAllSessions(): Session[] {

        return this.sessions;
    }

}