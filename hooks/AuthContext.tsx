import { User } from "@/types/User";
import { createContext, useState, useContext, Dispatch, SetStateAction } from "react";

type AuthContextProps = {
	user: User | undefined,
	setUser: Dispatch<SetStateAction<User | undefined>>
}

const AuthContext = createContext<AuthContextProps>({
	user: undefined,
	setUser: () => { }
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState<User | undefined>(undefined);

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	);
}

export const useAuth = () => useContext(AuthContext);
