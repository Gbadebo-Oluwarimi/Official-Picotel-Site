/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        nunito:['Nunito'],
        poppins:['Poppins'],
        comforta:['Comfortaa'],
        mulish:['Mulish']
      },
      colors:{
        logogreen:"#459B4D",
        white:"#F9FFFA",
        darkgreen: '#132F05',
        lightgreen:'#2E5737',
        lightergreen:'#8AEFA1',
        back:'#BFFFBC',
        light:'#8AEFA1',
        dark:'#1C1818',
        softwhite:"#FFFFFF",
        dgreen:"#0C2813",
        bright:"#E9FFEE",
        specialgray:"#011b33"
      },
      height:{
        hg:"20rem",
        imgh:"30rem"
      },
      lineHeight:{
        'lh':"4rem"
      },
      maxWidth:{
        logo:"50rem",
        smx:"60rem",
        mx:'64rem',
        mmx:'70rem'
      },
      padding:{
        max:'9rem'
      },
      width:{
        maxh:"28rem"
      },
      lineHeight:{
        space:"3.75rem",
        minispace:"2.4rem"
      }
    },
  },
  plugins: [],
}

