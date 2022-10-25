import Link from "next/link";

export default function Navbar() {
	return (
		<div className='flex justify-between px-20'>
			<Link href='/'>
				<a>Logo</a>
			</Link>
			<div className=''>
				<Link href='/'>Home</Link>
				<Link href='about'>About</Link>
			</div>
		</div>
	);
}
