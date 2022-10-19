import React from 'react'

import { mdxToStep } from '@code-hike/mini-editor'

const SLIDE = 'Slide'

export default function getSlidesFromChildren({
  children,
  editorProps = {},
  previewProps = { zoom: 1.4 },
  preset = {},
  defaultFileName = 'App.js',
}) {
  // Assumes a code slide like:
  /*
    <Slide
      codeProps={{minColumns: 20}}
      previewProps={{zoom: 1}}
      editorFrameProps={{width: 200}}
    />
  */

  const kids = React.Children.toArray(children)
  let prevEditorStep
  const slides = []

  for (let i = 0; i < kids.length; ) {
    let headKid
    const preContent = []
    const postContent = []

    if (kids[i]?.props?.mdxType === SLIDE) {
      let slideKids = kids[i]?.props?.children

      if (!Array.isArray(slideKids)) {
        slideKids = [slideKids]
      }

      for (let j = 0; j < slideKids.length; j++) {
        if (slideKids[j]?.props?.mdxType === 'pre') {
          headKid = React.createElement(React.Fragment, {
            children: [slideKids[j]],
          })
        } else if (headKid) {
          postContent.push(slideKids[j])
        } else {
          preContent.push(slideKids[j])
        }
      }
    }

    i++
    if (!headKid) break

    const editorStep = mdxToStep(headKid, prevEditorStep, {
      defaultFileName,
    })
    prevEditorStep = editorStep

    const headProps = headKid?.props
    const stepPreviewProps = headProps?.previewProps
    const stepCodeProps = headProps?.codeProps
    const stepFrameProps = headProps?.editorFrameProps

    slides.push({
      preContent: React.createElement(React.Fragment, {
        children: preContent,
      }),
      postContent: React.createElement(React.Fragment, {
        children: postContent,
      }),
      editorProps: {
        contentProps: editorStep,
        codeProps: {
          ...editorProps?.codeProps,
          ...stepCodeProps,
        },
        frameProps: {
          ...editorProps?.frameProps,
          ...stepFrameProps,
        },
      },
      previewPreset: preset,
      previewProps: {
        ...previewProps,
        ...stepPreviewProps,
      },
    })
  }

  return slides
}

// to make next-mdx-remote@4.1.0 work
// export function Slide({ children }) {
//   return <>{children}</>
// }

// Slide.defaultProps = {
//   mdxType: SLIDE,
// }
