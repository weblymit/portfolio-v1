/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			container: {
				center: true,
				padding: {
					DEFAULT: "1rem",
					xs: "1rem",
					sm: "2rem",
					lg: "4rem",
					xl: "5rem",
					"2xl": "6rem",
				},
			},
			borderRadius: {
				xl: "30px",
				xxl: "50px",
			},
			spacing: {
				30: "30px",
				50: "50px",
				60: "60px",
				70: "70px",
				80: "80px",
				90: "90px",
				100: "100px",
				110: "110px",
				120: "120px",
				130: "130px",
			},
		},
	},
	plugins: [],
};
