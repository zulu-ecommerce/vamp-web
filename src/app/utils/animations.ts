import { Variants } from 'framer-motion'

export const imageAnimation: Variants = {
  initial: {
    opacity: 0,
    x: 600,
    transition: { duration: 0.75 },
  },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75 },
  },
}

export const headingAnimation: Variants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
}

export const paragraphAnimation: Variants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.1 },
  },
}

export const boxTextAnimation: Variants = {
  initial: {
    opacity: 0,
    y: 50,
    transition: { duration: 0.5 },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.8 },
  },
}
export const boxTextHeadingAnimation: Variants = {
  initial: {
    opacity: 0,
    y: 50,
    transition: { duration: 0.5 },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.5 },
  },
}

export const buttonAnimation: Variants = {
  initial: {
    opacity: 0,
    y: 50,
    transition: { duration: 0.5 },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 1 },
  },
}
