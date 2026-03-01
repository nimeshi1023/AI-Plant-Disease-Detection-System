/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors matching your CSS
        primary: '#2563eb',
        secondary: '#1e40af',
        accent: '#3b82f6',
        'text-dark': '#1f2937',
        'text-light': '#9ca3af',
        'bg-dark': '#0b1220',
        'card-dark': '#111827',
      },
      backgroundImage: {
        'gradient-purple': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.4)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.6)',
      },
    },
  },
  plugins: [],
}