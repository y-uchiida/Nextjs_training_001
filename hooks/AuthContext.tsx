import { User } from "@/types/User";
import { createContext, useState, useContext, Dispatch, SetStateAction } from "react";

type AuthContextProps = {
	user: User | undefined,
	setUser: Dispatch<SetStateAction<User | undefined>>
}

// 動作テスト用の仮ユーザー情報
const initialUser: User = {
	id: '1',
	name: 'user001',
	profile: 'user profile',
	profileImageUrl: '/user_icon.png'
}

const AuthContext = createContext<AuthContextProps>({
	user: initialUser,
	setUser: () => { }
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState<User | undefined>(initialUser);

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	);
}

export const useAuth = () => useContext(AuthContext);
