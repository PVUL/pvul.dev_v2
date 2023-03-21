/** This script does 3 things with a provided content file:
 * 1. Changes the name of the content file to reflect the current date.
 *    For example:
 *      If today's date is 3/20/23 and file name was `2023-03-01_...`
 *      it would change to `2023-03-20_...`
 *
 * 2. It updates the frontmatter `postDate` field to today's date.
 * 3. It updates the frontmatter `status` field from `scheduled post` to `posted`.
 *
 * When is it used?
 * It's used by the github workflow (see .github/workflows folder)
 * after it has been determined that a scheduled post PR
 * has met conditions to be merged in.
 *
 * What happens after it is used?
 * An auto-commit is made by the github workflow.
 *
 * Why do we need this?
 * This allows for scheduled posts using NetlifyCMS/DecapCMS, while preserving
 * content directory file structure and mdx frontmatter attributes to stay up-to-date.
 */
import { readFile, writeFile, rename } from 'fs/promises'
import matter from 'gray-matter'
import { stringify } from 'yaml'

const POSTED = 'posted'
const SCHEDULED_POST = 'scheduled post'

const now = new Date().toISOString()

let filepath = ''
let frontMatter = null
let content = null

const getMatterFile = async () => {
  if (!frontMatter && !content) {
    const matterFile = matter(await readFile(filepath))
    // const { data: frontMatter, content } = matter(await readFile(filepath))
    frontMatter = matterFile.data.frontMatter
    content = matterFile.content
  }

  return {
    frontMatter,
    content,
  }
}

const isScheduledPost = async () => {
  const { frontMatter } = await getMatterFile()

  return frontMatter.status === SCHEDULED_POST
}

const updateFrontMatter = async () => {
  // const { data: frontMatter, content } = matter(await readFile(filepath))
  const { frontMatter, content } = await getMatterFile()

  if (await isScheduledPost()) {
    let updatedFrontMatter = frontMatter
    updatedFrontMatter.status = POSTED
    updatedFrontMatter.postDate = now

    const newContent = `---\n${stringify(updatedFrontMatter)}---\n${content}`
    await writeFile(filepath, newContent)
  }
}

const updateFilename = async () => {
  if (await isScheduledPost()) {
    // change the filepath to include an updated date in the filename
    const nowFormatted = JSON.parse(JSON.stringify(now)).slice(0, 10) // ie. 2023-03-20

    let filepathParts = filepath.split('/')
    const oldFilename = filepathParts.pop()
    const newFilename = `${nowFormatted}_${oldFilename.split('_')[1]}`
    const newFilepath = `${filepathParts.join('/')}/${newFilename}`
    await rename(filepath, newFilepath)
  }
}

const main = () => {
  const filepathIndex = process.argv.indexOf('--filepath')
  filepath = process.argv[filepathIndex + 1]

  if (filepath) {
    updateFrontMatter()
    updateFilename()
  } else {
    console.log('No filepath provided.')
  }
}

main()
