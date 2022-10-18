import React from 'react'

import { MiniEditor } from '@code-hike/mini-editor'

import styles from './Lesson.module.scss'

import Preview from './Preview'

export default function Lesson({ steps, preset }) {
  const [index, setIndex] = React.useState(0)

  const prev = () => setIndex(Math.max(index - 1, 0))
  const next = () => setIndex(Math.min(index + 1, steps.length - 1))

  useKey(37, prev)
  useKey(39, next)

  const step = steps[index]
  return (
    <div className={styles.lesson}>
      <header className={styles.header}>
        <button onClick={prev} disabled={index === 0} type="button">
          Prev
        </button>
        <button
          onClick={next}
          disabled={index === steps.length - 1}
          type="button"
        >
          Next
        </button>
      </header>
      <main className={styles.main}>
        <MiniEditor
          codeProps={step.codeProps}
          frameProps={{
            style: { flex: 1, height: 'auto', margin: 8 },
          }}
          {...step.editorProps.contentProps}
        />
        <Preview
          preset={preset}
          preview={step.previewProps}
          codeFiles={step.editorProps.contentProps.files}
        />
      </main>
      <div className={styles.controls}>
        <div className={styles.text}>{step.content}</div>
      </div>
    </div>
  )
}

function useKey(keyCode, callback) {
  React.useEffect(() => {
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
