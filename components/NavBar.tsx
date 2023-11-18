'use client';

import Link from 'next/link';
import navLinks from '@/constants/navLinks';
import classNames from 'classnames';

import { FaBug } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

const NavBar = () => {
	const pathname = usePathname();

	return (
		<nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
			<Link href='/'>
				<FaBug />
			</Link>
			<ul className='flex space-x-6'>
				{navLinks.map(link => (
					<li key={link.id}>
						<Link
							// `${
							// 	link.href === pathname
							// 		? 'text-black'
							// 		: 'text-zinc-500'
							// } hover:text-zinc-800 transition-colors`
							className={classNames({
								'text-zinc-900': link.href === pathname,
								'text-zinc-500': link.href !== pathname,
								'hover:text-zinc-800 transition-colors' : true
							})}
							href={link.href}>
							{link.label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default NavBar;
