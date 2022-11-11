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

---

## TODO

- [ ] Attempt to add ISR through customizing a netlify.toml file
  - this would ignore a build process from kicking off when only an mdx file is committed
  - then write a script to call a custom api, which would trigger a build on a single file
    - pass in the slug of the file that has been created/changed
    - NOTE: netlify's site clearly states ISR does not work, so I don't have expectations that this will work, but I have a hunch that it could.
      - worst case- we could bring this to vercel, and get it working there
      - but we'd have to set up a github oauth server, which we could do using vercel actions
