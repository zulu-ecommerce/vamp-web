import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { v4 as uuidv4 } from 'uuid'

// Define the type for the children prop
interface WrapperProps {
  children: ReactNode
}

// Word wrapper
const Wrapper: React.FC<WrapperProps> = (props) => {
  // We'll do this to prevent wrapping of words using CSS
  return <span className="word-wrapper">{props.children}</span>
}

// Map API "type" vaules to JSX tag names
const tagMap = {
  paragraph: 'p',
  heading1: 'h1',
  heading2: 'h2',
}

interface AnimatedCharactersProps {
  quote: {
    type: 'heading1' | 'heading2' | 'paragraph'
    text: string
  }
}

// AnimatedCharacters
// Handles the deconstruction of each word and character to setup for the
// individual character animations
export const AnimatedText: React.FC<AnimatedCharactersProps> = (props) => {
  // Framer Motion variant object, for controlling animation
  const item = {
    hidden: {
      y: '200%',
      color: '#000',
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
    },
    visible: {
      y: -3,
      color: '#ccc9c9',
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
    },
  }
  const TagName = tagMap[props.quote.type]
  const Tag: React.ElementType = TagName as keyof JSX.IntrinsicElements

  return (
    <>
      <Tag key={uuidv4()}>
        {props.quote.text.split(' ').map((word, index) => {
          return (
            <Wrapper key={index.toString()}>
              <span
                style={{
                  overflow: 'hidden',
                  display: 'inline-block',
                }}
                key={index.toString()}
              >
                <motion.span
                  style={{ display: 'inline-block' }}
                  variants={item}
                >
                  {`${word}\u00A0`}
                </motion.span>{' '}
              </span>
            </Wrapper>
          )
        })}
      </Tag>
    </>
  )
}
