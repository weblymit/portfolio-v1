import Link from "next/link";
import React from "react";
import Card from "./cards/Card";

export default function SectionProjet({ projets }) {
	return (
		<div className='pt-8'>
			<div className='space-y-8 md:space-y-0 md:grid grid-cols-4 gap-6'>
				{projets.map((projet) => (
					<Link href={`projets/${projet.fields.slug}`} key={projet.sys.id}>
						<a>
							<Card projet={projet} />
						</a>
					</Link>
				))}
			</div>
		</div>
	);
}
