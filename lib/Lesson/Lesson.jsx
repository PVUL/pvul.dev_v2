import React, { useState, useEffect } from 'react'
import { MiniEditor } from '@code-hike/mini-editor'

import styles from './Lesson.module.scss'
import Preview from '../Preview/Preview'

function useKey(keyCode, callback) {
  useEffect(() => {
    const handler = (e) => {
      if (e.keyCode === keyCode) {
        callback()
      }
    }
    window.addEventListener('keydown', handler)
    return () => {
      window.removeEventListener('keydown', handler)
    }
  })
}

export default function Lesson({ slides, preset, config }) {
  const [index, setIndex] = useState(0)
  const slide = slides[index]

  const showPreview = config.showPreview || slide.showPreview

  const prev = () => setIndex(Math.max(index - 1, 0))
  const next = () => setIndex(Math.min(index + 1, slides.length - 1))

  useKey(37, prev)
  useKey(39, next)

  return (
    <div className={styles.lesson}>
      <header className={styles.header}>
        <button onClick={prev} disabled={index === 0} type="button">
          Prev
        </button>
        <button
          onClick={next}
          disabled={index === slides.length - 1}
          type="button"
        >
          Next
        </button>
      </header>
      {slide.hasCodeBlock ? (
        <>
          <div className={styles.controls}>
            <div className={styles.text}>{slide.preContent}</div>
          </div>
          <main className={styles.main}>
            <MiniEditor
              codeProps={slide.codeProps}
              frameProps={{
                style: { flex: 1, height: 'auto', margin: 8 },
              }}
              {...slide.editorProps.contentProps}
            />
            {showPreview && (
              <Preview
                preset={preset}
                preview={slide.previewProps}
                codeFiles={slide.editorProps.contentProps.files}
              />
            )}
          </main>
          <div className={styles.controls}>
            <div className={styles.text}>{slide.postContent}</div>
          </div>
        </>
      ) : (
        <div className={styles.text}>{slide.content}</div>
      )}
    </div>
  )
}
