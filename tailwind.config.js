module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: "320px",

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      "3xl": "1700px",
    },
    fontSize: {
      menu: "16px",
      photoGallery: "37px",
      homeSplashHeading: "40px",
      homeWorkWithUsIconHeading: "20px",
      homeSplashDetail: "19px",
      homeWorkWithUsHeading: "40px",
      homeWorkWithUsNumberHeading: "172px",
      homeWorkWithUsHeadingText: "45px",
      homeWorkTogetherDiagramHeadings: "25px",
      homeWorkTogetherDiagramText: "16px",
      smarBuildingParagraph: "16px",
      sustainabilityParagraph: "16px",
      aboutUSHeading: "30px",
      smallHeading: "22px",
      pargraph: "18px",
      tiny: ".75rem",
      sm: ".875rem",
      xsm: ".675rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.15rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    fontFamily: {
      brandonLight: ["Brandon Grotesque Light"],
      brandonRegular: ["Brandon Grotesque Regular"],
      brandonMedium: ["Brandon Grotesque Medium"],
      brandonBold: ["Brandon Grotesque Bold"],
      brandonBlack: ["Brandon Grotesque Black"],
    },
  
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      full: "100",
      "home-image-size": "75% 80%",
      "about-image-size": "70%",
      half: "50%",
      quarter: "25%",
      16: "4rem",
    },
    borderColor: {
      orange: "#EEAC57",
    },
    // textColor: {
    //   //primary: blue,
    //   //secondary: purple,
    //   white: "#FFFFFF",
    //   //black: "#000",
    //   orange: "#EEAC57",
    // },
    extend: {
      spacing: {
        "90px": "90px",
      },
      colors: {
        primary: "#144372",
        secondry: "#2A70C4",
        heading: "#002F5A",
        white: "#FFFFFF",
        orange: "#EEAC57",
        mediumBlue: "#A5C7EF",
        lightBlue: "#E8F3FF",
        "regal-blue": "#243c5a",
      },
      lineHeight: {
        "leading-3": ".75rem",
        "leading-4": "1rem",
        "leading-5": "1.25rem",
        "leading-6": "1.5rem",
        "leading-7": "1.75rem",
        "leading-8": "2rem",
        "leading-9": "2.25rem",
        "leading-10": "2.5rem",
        "leading-none": "1",
        "leading-tight": "1.25",
        "leading-snug": "1.375",
        "leading-normal": "1.5",
        "leading-relaxed": "1.625",
        "leading-loose": "2",
        homeWorkWithUsHeadingText: "55px",
        homeSplashHeading: "47px",
        aboutPhotoGallery: "42px",
        termandconditions : "22px"
      },
    },
  },
  variants: {
    display: ["responsive", "group-hover", "group-focus"],
    extend: {},
  },
  plugins: [],
};
