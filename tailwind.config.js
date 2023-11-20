/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors
        'Blue': 'hsl(246,80%,60%)',
        'LightRedWork': 'hsl(15,100%,70%)',
        'SoftBlue': 'hsl(195,74%,62%)',
        'LightRedStudy': 'hsl(348,100%,68%)',
        'LimeGreen': 'hsl(145,58%,55%)',
        'Violet': 'hsl(264,64%,52%)',
        'SoftOrange': 'hsl(43,84%,65%)',
        // Neutral colors
        'veryDarkBlue': 'hsl(226,43%,10%)',
        'darkBlue': 'hsl(235,46%,20%)',
        'desaturatedBlue': 'hsl(235,45%,61%)',
        'paleBlue': 'hsl(236,100%,87%)',
        'grayishLight': 'hsl(0, 0%, 93%)',
      },
      fontFamily: {
        'Rubik': ["'Rubik', serif"]
      },
      backgroundImage: {
        'profile': 'url(./src/images/image-jeremy.png)',
        'icon-ellipsis': 'url(./src/images/icon-ellipsis.svg)',
        'icon-exercise': 'url(./src/images/icon-exercise.svg)',
        'icon-play': 'url(./src/images/icon-play.svg)',
        'icon-self-care': 'url(./src/images/icon-self-care.svg)',
        'icon-social': 'url(./src/images/icon-social.svg)',
        'icon-study': 'url(./src/images/icon-study.svg)',
        'icon-work': 'url(./src/images/icon-work.svg)',
      },
      fontSize: {
        '18px': '1.125rem'
      },
      height: {
        '50vh': '50vh'
      }
    },
  },
  plugins: [],
}

