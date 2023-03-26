import MDX from 'mdx-scoped-runtime'
import { components } from '../lib/mdx-components'

export const MdxPreview = ({ entry }) => {
  return (
    <MDX
      components={
        {
          // DOM element + React component overrides
          // h1: (props) => <h1 style={{ color: 'tomato' }} {...props} />,
        }
      }
      scope={
        //   {
        //   Slides: (props) => <div {...props}>hello world</div>,
        //   CodeScroll: (props) => <div {...props}>hello code scroll</div>,
        // }
        components
      }
    >
      {entry.getIn(['data', 'body'])}
    </MDX>
  )
}
