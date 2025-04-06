import { IUser } from '@/shared/types/user.intarface'
import { Dispatch, SetStateAction } from 'react'

export type TUserState = IUser | null

export interface IContext {
	user: TUserState
	setUser: Dispatch<SetStateAction<TUserState>>
}
