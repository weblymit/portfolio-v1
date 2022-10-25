import React from "react";

export default function SectionStack() {
	const stacks = [
		"HTML",
		"CSS",
		"Javascript",
		"Laravel",
		"React",
		"Nextjs",
		"Tailwindcss",
		"Bootstrap",
		"GraphQL",
		"Firebase",
		"MySQL",
		"PHP",
	];
	return (
		<div className='mx-10w tetx-center border-l-4 pl-4 border-indigo-300 shadow py-4 syne animate__animated animate__lightSpeedInLeft'>
			<p className='font-black uppercase text-indigo-500 underline underline-offset-4'>
				Stacks
			</p>
			{stacks.map((name, index) => (
				<span key={index} className='text-2xl '>
					{name}
					<span className='text-indigo-500 px-1'>-</span>
				</span>
			))}
		</div>
	);
}
