import { useOutside } from '@/hooks/useOutside'
import { FC, useState } from 'react'

export const Logo: FC = () => {
	const { ref, isShow, setIsShow } = useOutside(false)

	const [type, setType] = useState<'login' | 'register'>('login')
	return <div className='text-3xl font-bold text-black'>Cinema</div>
}
