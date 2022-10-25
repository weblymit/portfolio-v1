import React from "react";
import CardContact from "./cards/CardContact";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { TfiYoutube } from "react-icons/tfi";

export default function SectionContact() {
	return (
		<div className='grid grid-cols-3 gap-4 pt-6'>
			<CardContact
				title='Github'
				icon={<IoLogoGithub className='text-2xl' />}
			/>
			<CardContact
				title='Linkedin'
				icon={<IoLogoLinkedin className='text-2xl' />}
			/>
			<CardContact title='Youtube' icon={<TfiYoutube className='text-2xl' />} />
		</div>
	);
}
