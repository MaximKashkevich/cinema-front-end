import { createContext, FC, PropsWithChildren, useState } from 'react'
import { IContext, TUserState } from './auth.interface'
export const AuthContext = createContext<IContext>({} as IContext)

export const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const [user, setUser] = useState<TUserState>(null)

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	)
}
