import { transition } from "@chakra-ui/react";
import { transform } from "framer-motion";

const slideDown = {
  initial: {
    opacity: 0,
    y: -100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
			stiffness: 50
    },
  },
};

const stagger = (duration) => {
  return {
    animate: {
      transition: {
        staggerChildren: duration,
      },
    },
  };
};

const slideRight = {
    initial: {
      opacity: 0,
      x: -100,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
     	  type: "spring",
				stiffness: 50
      }
    }
};

const slideLeft = {
	initial: {
		opacity: 0,
		x: 100,
	},
	animate: {
		opacity: 1,
		x: 0,
		transition: {
			type: "spring",
			stiffness: 50
		}
	},
}

const fadeIn = {
	initial: {
		opacity: 0
	},
	animate: {
		opacity: 1,
		transition: {
			duration: 0.5,
			type: "easeInOut"
		}
	}
}

export {slideDown, stagger, slideRight, slideLeft}