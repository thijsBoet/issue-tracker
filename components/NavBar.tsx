import Link from 'next/link'
import { FaBug } from 'react-icons/fa';
import navLinks from '@/constants/navLinks';

const NavBar = () => {
  return (
		<nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
			<Link href='/'>
				<FaBug />
			</Link>
			<ul className='flex space-x-6'>
				{navLinks.map(link => (
					<li>
						<Link
							className='text-zinc-500 hover:text-zinc-800 transition-colors'
							href={link.href}>
							{link.label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
  );
}

export default NavBar