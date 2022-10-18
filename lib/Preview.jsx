import { MiniBrowser } from '@code-hike/mini-browser'
import { SandpackPreview, SandpackProvider } from '@codesandbox/sandpack-react'

import s from './Preview.module.scss'

export default function Preview({ style, preview, preset, codeFiles }) {
  const files = getFiles(codeFiles)

  const { customSetup: setup, ...props } = preset
  const customSetup = { ...setup, files: { ...setup?.files, ...files } }

  return props.template === 'html' ? (
    <HtmlPreview style={style} files={files} {...preview} />
  ) : (
    <div className={s.preview} style={style}>
      <SandpackProvider {...props} customSetup={customSetup}>
        <InnerPreview style={{ height: '100%' }} {...preview} />
      </SandpackProvider>
    </div>
  )
}

function HtmlPreview({ style, files, ...props }) {
  return (
    <MiniBrowser style={style} {...props}>
      <iframe title="_" srcDoc={files['/index.html'].code} />
    </MiniBrowser>
  )
}

function InnerPreview() {
  return (
    <div className={s.content}>
      <SandpackPreview
        showNavigator={false}
        showRefreshButton={false}
        showOpenInCodeSandbox={false}
      />
    </div>
  )
}

function getFiles(codeFiles) {
  const files = {}
  codeFiles.forEach((file) => {
    files[`/${file.name}`] = {
      code: file.code,
    }
  })
  return files
}
