import { IReviews } from './review.intarface'

export interface IMovie {
	name: string
	rating: number
	poster: string
	views: number
	reviews?: IReviews[]
}
