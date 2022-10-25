import React from "react";

export default function Hero() {
	const style = "text-indigo-500 text-2xl";
	return (
		<div className='container'>
			<div className='text-center pt-14 text-5xl rotate-3 pb-10 '>
				<p>Hello</p>
				<p className='font-black text-5xl py-2'>
					Je suis{" "}
					<span className='bg-indigo-500 text-gray-100 px-6 syne '>Mit</span>
				</p>
				<p>Dev Full Stack & Formateur</p>
				<div className='mt-4 pt-4 border-t-4 border-indigo-500 w-28 mx-auto' />
				<div>
					<p className='font-light text-gray-800 text-lg'>
						<span className={style}>R</span>eact -{" "}
						<span className={style}>L</span>
						aravel - <span className={style}>T</span>ailwindcss ♥️
					</p>
				</div>
			</div>
		</div>
	);
}
