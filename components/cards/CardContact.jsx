import React from "react";

export default function CardContact({ title, icon }) {
	return (
		<div className='bg-white p-5 max-w-sm shadow-sm border-2 border-indigo-200 rounded-lg hover:shadow-xl  hover:bg-indigo-300 hover:text-white hover:font-black hover:rotate-6 hover:transition duration-500 ease-in-out flex items-center space-x-2'>
			{icon}
			<p>{title}</p>
		</div>
	);
}
