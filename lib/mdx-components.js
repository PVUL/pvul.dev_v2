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

const dependencies = {
  'react-svg-curve': '0.2.0',
}

const preset = {
  template: 'react',
  customSetup: { dependencies },
}

// CodeHike ScrollyCoding component
function CodeScroll(props) {
  const { noPreview } = props
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
      config={{ noPreview }}
    />
  )
}

function CodeSlide(props) {
  const { children, noPreview } = props
  const slides = getSlidesFromChildren({ children })

  if (!preset) {
    return <div>Error: Missing preset</div>
  }

  return <Lesson slides={slides} preset={preset} config={{ noPreview }} />
}

export const components = {
  CodeSlide,
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

/**
 * # TEMP DOCUMENTATION
 *
 * 1. CodeScroll component in mdx
 *
 * - with Preview:
 *   <CodeScroll>
 *
 * - without Preview:
 *   <CodeScroll noPreview>
 *
 * - In use:
 *
 *   <CodeScroll>
 *
 *   <StepHead>
 *
 *   ```jsx
 *   export default function App() {
 *     return (
 *       <>
 *         <p>learn more about web3</p>
 *         <h1 style={{ color: 'salmon' }}>
 *           Hello React h3y
 *         </h1>
 *         <br />
 *         this is be a test yo... blah. added this
 *       </>
 *     )
 *   }
 *   ```
 *   </StepHead>
 *
 *   <StepHead>
 *   ...more stuff
 *   </StepHead>
 *
 *   </CodeScroll>
 *
 * --- END OF EXAMPLE ---
 *
 *
 * 2. CodeSlide component in mdx
 *
 * - with Preview:
 *   <CodeSlide>
 *
 * - without Preview:
 *   <CodeSlide noPreview>
 *
 * - in use:
 *
 *   <CodeSlide>
 *
 *   <Slide>
 *
 *   ```jsx
 *   export default function App() {
 *     return (
 *       <>
 *         <p>learn more about web3</p>
 *         <h1 style={{ color: 'salmon' }}>
 *           Hello React h3y
 *         </h1>
 *         <br />
 *         this is be a test yo... blah. added this
 *       </>
 *     )
 *   }
 *   ```
 *   </Slide>
 *
 *   <Slide>
 *   ...more stuff
 *   </Slide>
 *
 *   </CodeSlide>
 *
 * --- END OF EXAMPLE ---
 *
 * NOTES:
 *
 * - Need a blank line after <Slide> and ```
 * - Cannot put text in between Slide tags
 * - Text can be inserted in between slide tags, doing so would
 *   place text below the lesson (like caption) - I want to add
 *   text above the lesson, working on it - FIXED, can add text
 *   after the opening tag or before the closing tag.
 *
 */
