import React from "react";

export default function Title({ title, subtitle }) {
	return (
		<div className='rotate-2 pb-8'>
			<p className='text-4xl font-black text-center pb-10 '>
				<span className='bg-indigo-500 py-4 px-8 text-gray-200'>{title}</span>
			</p>
			<p className='text-center text-2xl'>{subtitle}</p>
		</div>
	);
}
