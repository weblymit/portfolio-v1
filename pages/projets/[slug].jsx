import { createClient } from "contentful";
import React from "react";
import Layout from "../../components/layout/Layout";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

// 1- Connect to Contentful
/////////////////////////////
const client = createClient({
	space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
	accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

//2-  Generates all slugs of my projet in contentful
/////////////////////////////////////////////////////
export async function getStaticPaths() {
	// A- recupere la data une fois que la promise succes
	const res = await client.getEntries({ content_type: "projets" });

	// B- Get all slugs
	const slugs = res.items.map((slug) => {
		return {
			params: { slug: slug.fields.slug },
		};
	});
	// C- renvoie tous les slugs dans paths
	return {
		paths: slugs,
		fallback: false, // can also be true or 'blocking'
	};
}

// 3- Recupere data du show en fonction du slug
///////////////////////////
export async function getStaticProps({ params }) {
	// A- recupere la data une fois que la promise succes
	const res = await client.getEntries({
		content_type: "projets",
		"fields.slug": params.slug,
	});
	// B je stock la data dans variable projet
	const projet = res.items;

	return {
		// Passed to the page component as props
		props: {
			projet: projet[0],
		},
	};
}

export default function Show({ projet }) {
	console.log("projet:", projet.fields);
	const {
		title,
		description,
		roles,
		skills,
		urlDuProjet,
		images,
		featuredImage,
	} = projet.fields;
	return (
		<Layout
			title={title}
			metaContent={`Le projet ${title} est un projet fait avec larave et react`}
			image={`http:${featuredImage.fields.file.url}`}
		>
			<div className='container pt-8'>
				<div className='grid grid-cols-2 items-centersk gap-6'>
					<div className='pr-10'>
						<p className='text-4xl font-black text-centerd pb-10'>{title}</p>
						<div>{documentToReactComponents(description)}</div>
						{/* Roles */}
						<div className='pt-5'>
							<p className='text-indigo-500  underline underline-offset-4'>
								Rôle:
							</p>
							<ul className='italic'>
								{roles.map((role) => (
									<li key={role}>{role}</li>
								))}
							</ul>
						</div>
						{/* stacks */}
						<div className='pt-5'>
							<p className='text-indigo-500  underline underline-offset-4'>
								Stack:
							</p>
							<ul className='italic'>
								{skills.map((skill) => (
									<li key={skill}>{skill}</li>
								))}
							</ul>
						</div>
						<div className='p2 mt-6'>
							<a
								href={`/www.${urlDuProjet}`}
								target='_blank'
								className=' bg-indigo-500 rounded-lg p-2 text-white'
								rel='noopener noreferrer'
							>
								Voir le projet
							</a>
						</div>
					</div>
					<div className='grid grid-cols-2 gap-3'>
						{images.map((image, index) => (
							<img
								key={index}
								src={image.fields.file.url}
								alt={`Mit K portfolio ${title}`}
							/>
						))}
					</div>
				</div>
			</div>
		</Layout>
	);
}
