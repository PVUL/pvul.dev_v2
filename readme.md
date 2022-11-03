# Blog

This is a blog, but it is also an experimental teaching platform. The stack:

- NextJS (React UI framework)
- Netlify CMS (for git-based admin editing, at `/admin`)
- MDX filetypes as content stored locally in `_content` directory
  - next-mdx-remote for rendering mdx
- Codehike (early versions used for customizations)
  - great coding tutorial components, which work well with next-mdx-remote

This is a good set up for a small team- multiple content editors, custom components created by devs, SSG (ISR possible with config setup), can be all hosted on Netlify. Need to set up own github oauth server if you want to choose your own host (fly.io, vercel, etc), due to how netlify CMS handles authentication with github.

If you plan to have more than 1gb worth of content, try using headless CMS instead of containing the content in the repo. Sanity.io works pretty well with mdx files, can be set up with SSG+ISR with editor previews, and offer a generous free plan.
