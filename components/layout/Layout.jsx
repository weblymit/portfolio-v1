import React from "react";
import Footer from "../footer/Footer";
import Hero from "../Hero";
import Navbar from "../navigation/Navbar";

export default function Layout({ children }) {
	return (
		<div className='flex flex-col min-h-screen bg-yellow-400s'>
			{/* <Navbar /> */}
			<Hero />
			<main className='flex-grow py-10'>{children}</main>
			<Footer />
		</div>
	);
}
