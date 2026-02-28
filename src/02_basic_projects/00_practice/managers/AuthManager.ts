
import bcrypt from "bcrypt"
import {User} from "../models/User";
import {Session} from "../models/Session";

export class AuthManager{
    private users:User[] = [];
    private sessions:Session[] = [];

    private readonly saltRounds = 10;

    private generateToken():string{
        const randomPart = Math.random().toString(36).substring(2);
        const timePart = Date.now().toString();

        return `token_${randomPart}_${timePart}`;
    }

    async register(email:string, password:string): Promise<Omit<User,"passwordHash">>{
        const user = this.users.find(user=>user.email===email);
        if(user){
            throw new Error("User already exists!");
        }

        const passwordHash = await bcrypt.hash(password, this.saltRounds);

        const newUser:User = {
            id: Date.now(),
            email,
            passwordHash
        };

        this.users.push(newUser);
        const { passwordHash: _, ...safeUser} = newUser;
        return safeUser;
    }

    async login(email:string, password: string):Promise<string>{
        const user = this.users.find(user=>user.email === email);
        if(!user) throw new Error("user not registered!");

        const isValid = await bcrypt.compare(password, user.passwordHash);
        if(!isValid) throw new Error("Invalid Credentials!");
        
        const token = this.generateToken();

        const newSession:Session = {
            token,
            userId: user.id,
            createdAt: new Date(),
        };

        this.sessions.push(newSession);
        return token;
    }

    //logout user by removing session
    logout(token:string):boolean{
        const index = this.sessions.findIndex(sesh=>sesh.token === token);
        if(index === -1) return false;
        this.sessions.splice(index,1);
        return true;
    }

    //get user from session token
    getUserFromToken(token:string):Omit<User,"passwordHash">|null{
        const session = this.sessions.find(s=>s.token===token);
        if(!session) return null;
        const user = this.users.find(u=>u.id === session.userId);
        if(!user) return null;

        const {passwordHash: _, ...safeUser} = user;
        return safeUser;
    }

    getAllUsers():Omit<User,"passwordHash">[]{
        return this.users.map(({passwordHash, ...safeUser})=>safeUser);
    }

    getAllSessions():Session[]{
        return this.sessions;
    }
}