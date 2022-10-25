import React from "react";

export default function Card({ projet }) {
	console.log("projet:", projet);
	const { title, description, skills, featuredImage } = projet.fields;
	return (
		<div className='md:max-w-sm shadow'>
			<img src={featuredImage.fields.file.url} alt='' />
			<div className='p-4'>
				<p className='text-2xl font-black'>{title}</p>
				<div className='py-2'>
					{skills.map((skill, index) => (
						<span
							key={index}
							className='bg-indigo-300 px-2 py-1 text-xs rounded-lg text-white mr-2'
						>
							{skill}
						</span>
					))}
				</div>
				{/* <p>{description}</p> */}
			</div>
		</div>
	);
}
