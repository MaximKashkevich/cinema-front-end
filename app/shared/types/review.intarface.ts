import { IMovie } from './movie.intarface'
import { IUser } from './user.intarface'

export interface IReviews {
	id: number
	user: IUser
	movie: IMovie
	description: string
}
