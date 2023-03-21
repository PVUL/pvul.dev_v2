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

const updateScheduledPost = async (filepath) => {
  const { data: frontMatter, content } = matter(await readFile(filepath))

  if (frontMatter.status === SCHEDULED_POST) {
    // update frontmatter fields
    let updatedFrontMatter = frontMatter
    const now = new Date().toISOString()
    updatedFrontMatter.status = POSTED
    updatedFrontMatter.postDate = now
    const newContent = `---\n${stringify(updatedFrontMatter)}---\n${content}`
    await writeFile(filepath, newContent)

    // change the filename to include an updated date
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
  const filepath = process.argv[filepathIndex + 1]

  if (filepath) {
    updateScheduledPost(filepath)
    console.log('✨  Updated scheduled post.')
  } else {
    console.log('No filepath provided.')
  }
}

main()
