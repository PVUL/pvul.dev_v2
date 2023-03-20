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

// this is the arg that should be provided to us
const filepath = `_content/posts/_/2023-03-12_test-two.mdx`
const POSTED = 'posted'
const SCHEDULED_POST = 'scheduled post'

const updateFrontMatter = async (filepath) => {
  // make sure it's an mdx file
  const { data: frontMatter, content } = matter(await readFile(filepath))

  console.log(frontMatter)

  if (frontMatter.status === SCHEDULED_POST) {
    console.log('starting to make changes...')
    let updatedFrontMatter = frontMatter
    const now = new Date().toISOString()

    updatedFrontMatter.status = POSTED
    updatedFrontMatter.postDate = now
    const newContent = `---\n${stringify(updatedFrontMatter)}---\n${content}`

    // change the filePath to include an updated date in the file name
    const nowFormatted = JSON.parse(JSON.stringify(now)).slice(0, 10) // 2023-03-20

    let filepathParts = filepath.split('/')
    const oldFilename = filepathParts.pop()
    const newFilename = `${nowFormatted}_${oldFilename.split('_')[1]}`
    const newFilepath = `${filepathParts.join('/')}/${newFilename}`

    await writeFile(filepath, newContent)
    await rename(filepath, newFilepath)
  }

  if (frontMatter.status === POSTED) {
    console.log('Already posted.')
  }
}

function main = () => {

  const customIndex = process.argv.indexOf('filepath')
  let filepath;

  if (customIndex > -1) {
    filepath = process.argv[customIndex + 1]
  }

  if (filepath) {
    updateFrontMatter(filepath)
  } else {
    console.log('No filepath provided.')
  }
}
