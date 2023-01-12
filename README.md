# pvul.dev (v2)

This my personal page for pvul.dev. It has a built-in blog and a git-based CMS accessible at `/admin` endpoint (netlify-cms).

Built off of the [blog](https://github.com/pvul/blog) boilerplate.

---


- NextJS (React UI framework)
- Netlify CMS (for git-based admin editing, at `/admin`)
- `.md`/`.mdx` filetypes as content stored locally in `_content` directory
  - next-mdx-remote for rendering mdx
- Codehike (early versions used for customizations)
  - great coding tutorial components, which work well with next-mdx-remote
- Uploadcare for media storage
- Vercel serverless function used for github oauth - this allows the app to be served on Vercel rather than Netlify (due to netlify cms), technically it could be served anywhere, [see more](https://www.netlifycms.org/docs/external-oauth-clients/).

This is a good set up for a small team- multiple content editors, custom components created by devs, and lightning quick performance as it is a Static Site Generator.

If you plan to have more than 1gb worth of content, try using headless CMS instead of containing the content in the repo. Sanity.io works pretty well with mdx files, can be set up with SSG+ISR with editor previews, and offer a generous free plan.

---

References:

- [mdx previews in netlify cms](https://zslabs.com/articles/mdx-previews-in-netlify-cms)
- [storybook netlify cms](https://storybook.js.org/blog/storybook-netlify-cms/)
- [use netlify cms to manage mdx's for nextjs site on vercel](https://anaecha.com/blog/use-netlify-cms-mdx-nextjs-vercel)
