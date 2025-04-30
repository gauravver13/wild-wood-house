// import { access } from "fs";
// import type { Config } from "tailwindcss";

// export default {
//     darkMode: ["class"],
//     content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//   	extend: {
//   		colors: {
// 			primary: {
// 				500: "#F2F2F2",
// 			},
// 			secondary: {
// 				500: '#333333',
// 			},
// 			accent: {
// 				500: '#d1d1d1',
// 			},
// 			background: {
// 				500: '#333333',
// 			}

// 			// #333333', 'background': '
// // #F2F2F2', 'primary': '
// // #333333', 'secondary': '
// // #d1d1d1', 'accent': '
// // #E0C29A', }, 


// 		// sizes:
// 		// small: ,
// 		// medium: ,
// 		// large: 

// 		}
//   	}
//   },
//   plugins: [require("tailwindcss-animate")],
// } satisfies Config;


/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
	  './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
	  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
	  './src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
	  container: {
		center: true,
		padding: "2rem",
		screens: {
		  "2xl": "1400px",
		},
	  },
	  extend: {
		colors: {
		  primary: "#333333",
		  secondary: "#F2F2F2",
		  accent: "#d1d1d1",
		  
		  border: "hsl(var(--border))",
		  input: "hsl(var(--input))",
		  ring: "hsl(var(--ring))",
		  background: "hsl(var(--background))",
		  foreground: "hsl(var(--foreground))",
		  destructive: {
			DEFAULT: "hsl(var(--destructive))",
			foreground: "hsl(var(--destructive-foreground))",
		  },
		  muted: {
			DEFAULT: "hsl(var(--muted))",
			foreground: "hsl(var(--muted-foreground))",
		  },
		},
		animation: {
			scroll: 'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
		},
		
		borderRadius: {
		  lg: `var(--radius)`,
		  md: `calc(var(--radius) - 2px)`,
		  sm: "calc(var(--radius) - 4px)",
		},
	  },
	},
	plugins: [require("tailwindcss-animate")],
  }