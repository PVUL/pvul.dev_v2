import {
  CodeSlot,
  Focus,
  Hike,
  PreviewSlot,
  StepHead,
  withFocusHandler,
} from '@code-hike/scrollycoding'
import { MDXRemote } from 'next-mdx-remote'

import CodeBlock from '../components/code-block'
import CustomLink from '../components/custom-link'
import getSlidesFromChildren from './code-slides'
import Lesson from './Lesson'
import { H1, H2, H3, H4, H5, H6 } from '../components/mdx/Heading'

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

const CodeScroll = (props) => {
  const { preview, editorProps } = props

  return (
    <Hike
      classes={codeScrollClasses}
      preset={preset}
      {...props}
      editorProps={{ codeProps: { minColumns: 40 }, ...editorProps }}
      config={{ noPreview: !preview }}
    />
  )
}

const Slides = (props) => {
  const { children, preview } = props
  const slides = getSlidesFromChildren({ children })

  if (!preset) {
    return <div>Error: Missing preset</div>
  }

  return (
    <Lesson
      slides={slides}
      preset={preset}
      config={{ showPreview: !!preview }}
    />
  )
}

export const components = {
  Slides,
  pre: CodeBlock,
  a: withFocusHandler(CustomLink),
  CodeScroll,
  Focus,
  StepHead,
  CodeSlot,
  PreviewSlot,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
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
 *   <CodeScroll preview>
 *
 * - without Preview:
 *   <CodeScroll>
 *
 * - In use:
 *
 *   <CodeScroll preview>
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
 * 2. Slides component in mdx
 *
 * - with Preview:
 *   <Slides preview>
 *
 * - without Preview:
 *   <Slides>
 *
 * - in use:
 *
 *   <Slides>
 *
 *   ```jsx App.js preview focus=5:7
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
 *
 *   ---
 *
 *   ...the last slide
 *
 *   </Slides>
 *
 * --- END OF EXAMPLE ---
 *
 * NOTES:
 *
 * - Need a blank line after <Slide> and ```
 * - If adding `preview` to codeBlock, need to specify file name first,
 *   ie. 'App.js' (defaultFileName)
 * - It adding 2 codeblocks to a slide, it will create a new tab,
 *   but it will focus on the 2nd tab, and won't let you switch tabs, bug?
 *
 *
 */
