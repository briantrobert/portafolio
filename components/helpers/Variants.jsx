
// Variants for Container of words.
export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.04 * i },
    }),
  };

  // Variants for each word.
export const childText = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
  hidden: {
    opacity: 0,
    x: 20,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

export const heroSectWords = {
  hidden: {
    opacity: 0,
    x: "-20vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { 
      delay: 0.3,
      duration: 1}
  },
};

//other container words with exit declaration
  export const staggerContainer2 = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.04 * i },
    }),
    exit:{
      opacity:0
    }
  };

  //other child component
  export const childText2 = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

 

  export const portafolioCardsPhoto = {
    hidden: {
      opacity: 0,
      x: "10vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { 
        delay: 0.3,
        type: "spring",
        stiffness: 200 }
    },
  };