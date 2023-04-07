import React, { createElement, Fragment } from 'react'
import { mdxToStep } from '@code-hike/mini-editor'

const HORIZONTAL_RULE = 'hr'
const CODE_BLOCK = 'pre'

export default function getSlidesFromChildren({
  children,
  editorProps = {},
  previewProps = { zoom: 1.4 },
  preset = {},
  defaultFileName = 'App.js',
}) {
  const kids = React.Children.toArray(children)
  let prevEditorStep
  const slides = []

  for (let i = 0; i < kids.length; ) {
    let codeBlock
    const preContent = []
    const postContent = []

    while (i < kids.length && kids[i]?.props?.mdxType !== HORIZONTAL_RULE) {
      if (kids[i]?.props?.mdxType === CODE_BLOCK) {
        codeBlock = createElement(Fragment, {
          children: [kids[i]],
        })
      } else if (codeBlock) {
        postContent.push(kids[i])
      } else {
        preContent.push(kids[i])
      }

      i += 1
    }
    i += 1

    let newSlide = {
      preContent: createElement(Fragment, {
        children: preContent,
      }),
      postContent: createElement(Fragment, {
        children: postContent,
      }),
      content: createElement(Fragment, {
        children: [...preContent, ...postContent],
      }),
      hasCodeBlock: codeBlock !== undefined,
    }

    if (codeBlock) {
      const codeBlockProps = codeBlock?.props
      const stepPreviewProps = codeBlockProps?.previewProps
      const stepCodeProps = codeBlockProps?.codeProps
      const stepFrameProps = codeBlockProps?.editorFrameProps
      const { preview } = codeBlockProps?.children[0].props.children.props

      const editorStep = mdxToStep(codeBlock, prevEditorStep, {
        defaultFileName,
      })
      prevEditorStep = editorStep

      newSlide = {
        ...newSlide,
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
        showPreview: !!preview,
      }
    }

    slides.push(newSlide)
  }

  return slides
}
