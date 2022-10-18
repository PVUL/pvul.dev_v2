import React from 'react'

import {
  Hike,
  Focus,
  CodeSlot,
  PreviewSlot,
  StepHead,
  withFocusHandler,
} from '@code-hike/scrollycoding'
import { MDXRemote } from 'next-mdx-remote'

import Lesson from './Lesson'

import CodeBlock from '../components/code-block'
import CustomLink from '../components/custom-link'
import getSlidesFromChildren from './code-slides'

const codeScrollClasses = {
  'ch-hike-step-content-unfocused': 'opacity-25 transition-opacity',
  'ch-hike-step-content': 'border-none',
  'ch-frame-button': 'bg-gray-300 border-gray-600',
}

const preset = {
  template: 'react',
  customSetup: {
    dependencies: {
      'react-svg-curve': '0.2.0',
    },
  },
}

function CodeScroll(props) {
  const editorProps = {
    codeProps: { minColumns: 40 },
    ...props.editorProps,
  }

  return (
    <Hike
      classes={codeScrollClasses}
      preset={preset}
      {...props}
      editorProps={editorProps}
    />
  )
}

// function Wrapper({ children }) {
//   const steps = useStepsFromChildren({ children })
//   const { preset } = React.useContext(LessonContext)

//   if (!preset) {
//     return <div>Error: Missing preset</div>
//   }
//   return <Lesson steps={steps} preset={preset} />
// }

function CodeSlides(props) {
  const { children } = props
  const slides = getSlidesFromChildren({ children })

  if (!preset) {
    return <div>Error: Missing preset</div>
  }

  return <Lesson steps={slides} preset={preset} />
}

export const components = {
  CodeSlides,
  Slide: () => null,
  pre: CodeBlock,
  a: withFocusHandler(CustomLink),
  CodeScroll,
  Focus,
  StepHead,
  CodeSlot,
  PreviewSlot,
}

export function LessonMDX({ source }) {
  return <MDXRemote {...source} components={components} />
}

/*
import CodeBlock from '../components/code-block'
import CustomLink from '../components/custom-link'
import {
  Hike,
  Focus,
  CodeSlot,
  PreviewSlot,
  StepHead,
  withFocusHandler,
} from '@code-hike/scrollycoding'

const classes = {
  'ch-hike-step-content-unfocused': 'opacity-25 transition-opacity',
  'ch-hike-step-content': 'border-none',
  'ch-frame-button': 'bg-gray-300 border-gray-600',
}

const preset = {
  template: 'react',
  customSetup: {
    dependencies: {
      'react-svg-curve': '0.2.0',
    },
  },
}

function CodeScroll(props) {
  const editorProps = {
    codeProps: { minColumns: 40 },
    ...props.editorProps,
  }

  return (
    <Hike
      classes={classes}
      preset={preset}
      {...props}
      editorProps={editorProps}
    />
  )
}

export const components = {
  pre: CodeBlock,
  a: withFocusHandler(CustomLink),
  CodeScroll,
  Focus,
  StepHead,
  CodeSlot,
  PreviewSlot,
}
*/
