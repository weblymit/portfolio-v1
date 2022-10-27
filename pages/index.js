import { createClient } from "contentful";
import Layout from "../components/layout/Layout";
import SectionContact from "../components/SectionContact";
import SectionProjet from "../components/SectionProjet";
import SectionStack from "../components/SectionStack";
import Title from "../components/Title";

export default function Home({ projets }) {
	return (
		<Layout
			title='Accueil'
			metaContent='Bienvenue dans mon portfolio. Je suis Mit K. dévellopeur & formateur web. Formateur React et formateur Laravel'
		>
			<div className='container'>
				<SectionStack />
				<div className='py-32'>
					<Title title='Réalisations' subtitle='Voyez par vous-même' />
					<SectionProjet projets={projets} />
				</div>
			</div>
			<div className='py-32 bg-gray-200'>
				<div className='container'>
					<Title title='Me retrouver' subtitle='Vous savez où me trouver' />
					<SectionContact />
				</div>
			</div>
		</Layout>
	);
}

export async function getStaticProps() {
	// 1- Connect to Contentful
	const client = createClient({
		space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
		accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
	});
	// 2- recupere la data une fois que la promise succes
	const res = await client.getEntries({
		content_type: "projets",
		limit: 8,
		order: "sys.createdAt",
	});
	// 3- On envoie la data dans le props de la page
	return {
		props: {
			projets: res.items,
		}, // will be passed to the page component as props
	};
}
