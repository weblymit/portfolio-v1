import Head from "next/head";
import React from "react";
import Footer from "../footer/Footer";
import Hero from "../Hero";

export default function Layout({
	children,
	title,
	metaContent,
	image = "img/tchoupi.jpeg",
}) {
	return (
		<>
			<Head>
				<title>{title} | Mito Portfolio Formateur React & Laravel</title>
				<meta name='description' content={metaContent} />
				<meta property='og:title' content={title} />
				<meta property='og:description' content={metaContent} />
				<meta property='og:image' content={image} />
			</Head>
			<div className='flex flex-col min-h-screen bg-yellow-400s'>
				{/* <Navbar /> */}
				<Hero />
				<main className='flex-grow py-10'>{children}</main>
				<Footer />
			</div>
		</>
	);
}
