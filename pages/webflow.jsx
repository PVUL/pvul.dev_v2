import { useEffect, useRef } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import parse, { domToReact } from 'html-react-parser'
import get from 'lodash/get'

// goal: getting a webflow projec to render inside a nextjs app
// references:
// https://dev.to/kennedyrose/integrating-webflow-and-next-js-39kk
// https://codingshower.com/how-to-execute-rendered-script-tags-with-dangerouslysetinnerhtml-in-react/
// status:
// got it running based on first tutorial
// tried to get the webflow interactions (javascript) to load using parsing out the script tag in the body
// but had no success. leaving for another day. Also links don't work properly.

// Determines if URL is internal or external - utility function
function isUrlInternal(link) {
  if (
    !link ||
    link.indexOf(`https:`) === 0 ||
    link.indexOf(`#`) === 0 ||
    link.indexOf(`http`) === 0 ||
    link.indexOf(`://`) === 0
  ) {
    return false
  }
  return true
}

// Replaces DOM nodes with React components - utility function
function replace(node) {
  const attribs = node.attribs || {}

  // Replace links with Next links
  if (node.name === `a` && isUrlInternal(attribs.href)) {
    const { href, ...props } = attribs
    if (props.class) {
      props.className = props.class
      delete props.class
    }
    return (
      <Link href={href}>
        <a {...props}>
          {!!node.children &&
            !!node.children.length &&
            domToReact(node.children, parseOptions)}
        </a>
      </Link>
    )
  }

  // Make Google Fonts scripts work
  // if (node.name === `script`) {
  //   let content = get(node, `children.0.data`, ``)
  //   if (content && content.trim().indexOf(`WebFont.load(`) === 0) {
  //     content = `setTimeout(function(){${content}}, 1)`
  //     return (
  //       <script
  //         {...attribs}
  //         dangerouslySetInnerHTML={{ __html: content }}
  //       ></script>
  //     )
  //   }
  // }

  // add scripts from bodyContent to head
  console.log(node)

  if (node.type === 'script') {
    let externalScript = node.attribs.src ? true : false

    const script = document.createElement('script')
    if (externalScript) {
      script.src = node.attribs.src
    } else {
      script.innerHTML = node.children[0].data
    }

    document.head.append(script)
  }
}
const parseOptions = { replace }

const Webflow = (props) => {
  // const divRef = useRef()

  // useEffect(() => {
  //   const fragment = document
  //     .createRange()
  //     .createContextualFragment(props.bodyContent)
  //   divRef.current.append(fragment)
  // }, [])
  // console.log(props.bodyContent)

  // const WebflowContent = parse(props.bodyContent, {
  //   replace: (node) => {
  //     if (node.type === 'script') {
  //       let externalScript = node.attribs.src ? true : false

  //       const script = document.createElement('script')
  //       if (externalScript) {
  //         script.src = node.attribs.src
  //       } else {
  //         script.innerHTML = node.children[0].data
  //       }

  //       // document.head.append(script)
  //     }
  //   },
  // })

  return (
    <>
      <Head>{parse(props.headContent)}</Head>
      {/* <div ref={divRef} /> */}
      <div
        dangerouslySetInnerHTML={{ __html: props.bodyContent, parseOptions }}
      />
    </>
  )
}

export async function getStaticProps(ctx) {
  // Import modules in here that aren't needed in the component
  const cheerio = await import(`cheerio`)
  const axios = (await import(`axios`)).default

  // Use path to determine Webflow path
  let url = get(ctx, `params.path`, [])
  url = url.join(`/`)
  if (url.charAt(0) !== `/`) {
    url = `/${url}`
  }
  const fetchUrl = process.env.WEBFLOW_URL + url

  // Fetch HTML
  let res = await axios(fetchUrl).catch((err) => {
    console.error(err)
  })
  const html = res.data

  // Parse HTML with Cheerio
  const $ = cheerio.load(html)
  const bodyContent = $(`body`).html()
  const headContent = $(`head`).html()

  // Send HTML to component via props
  return {
    props: {
      bodyContent,
      headContent,
    },
  }
}

export default Webflow
