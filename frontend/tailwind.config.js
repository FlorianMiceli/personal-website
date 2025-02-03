const { green, grass, mauve } = require('@radix-ui/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
      './src/**/*.{vue,js,ts,jsx,tsx}',
      './components/**/*.{vue,js,ts,jsx,tsx}',
    ],
  theme: {
  	extend: {
  		colors: {
                ...mauve,
                ...green,
                ...grass,
                white: '#ffffff',
  			background: 'hsl(var(--background) / <alpha-value>)',
  			foreground: 'hsl(var(--foreground) / <alpha-value>)',
  			card: {
  				DEFAULT: 'hsl(var(--card) / <alpha-value>)',
  				foreground: 'hsl(var(--card-foreground) / <alpha-value>)'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover) / <alpha-value>)',
  				foreground: 'hsl(var(--popover-foreground) / <alpha-value>)'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
  				foreground: 'hsl(var(--primary-foreground) / <alpha-value>)'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
  				foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
  				foreground: 'hsl(var(--muted-foreground) / <alpha-value>)'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
  				foreground: 'hsl(var(--accent-foreground) / <alpha-value>)'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
  				foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)'
  			},
  			border: 'hsl(var(--border) / <alpha-value>)',
  			input: 'hsl(var(--input) / <alpha-value>)',
  			ring: 'hsl(var(--ring) / <alpha-value>)',
  			chart: {
  				'1': 'hsl(var(--chart-1) / <alpha-value>)',
  				'2': 'hsl(var(--chart-2) / <alpha-value>)',
  				'3': 'hsl(var(--chart-3) / <alpha-value>)',
  				'4': 'hsl(var(--chart-4) / <alpha-value>)',
  				'5': 'hsl(var(--chart-5) / <alpha-value>)'
  			}
  		},
  		keyframes: {
  			slideDown: {
  				from: {
  					height: 0
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			slideUp: {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: 0
  				}
  			},
  			fadeIn: {
  				'0%': { opacity: '0' },
  				'100%': { opacity: '0.7' },
  			},
            risingstar: {
                from: {
                    transform: 'translateY(0px)'
                },
                to: {
                    transform: 'translateY(-3840px)'
                }
            }
  		},
  		animation: {
  			slideDown: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
  			slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
            risingstar: 'risingstar 1000s linear infinite'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		fontSize: {
  			'5xl': '3rem',
  		},
  		fontWeight: {
  			bold: '700',
  		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
}