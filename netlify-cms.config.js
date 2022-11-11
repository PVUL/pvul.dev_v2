export default {
  cms_manual_init: true,
  backend: {
    name: 'github',
    repo: 'pvul/blog',
    branch: 'main',
    squash_merges: true,
    base_url: 'https://netlify-cms-oauth.pvul.vercel.app/', // see https://github.com/ublabs/netlify-cms-oauth
  },
  local_backend: true,
  publish_mode: 'editorial_workflow',
  site_url: 'https://pvul-blog.netlify.app',
  display_url: 'pvul-blog.netlify.app',
  media_library: {
    name: 'uploadcare',
    config: {
      publicKey: process.env.NEXT_PUBLIC_UPLOADCARE_PUBLIC_KEY,
    },
    settings: {
      autoFilename: true,
    },
  },
  collections: [
    {
      name: 'posts',
      label: 'Posts',
      label_singular: 'Post',
      folder: '_content/posts',
      create: true,
      delete: false,
      preview_path: 'posts/{{slug}}',
      fields: [
        {
          name: 'title',
          label: 'Title',
          widget: 'string',
        },
        {
          name: 'publishedAt',
          label: 'Published At',
          widget: 'datetime',
          format: 'LLLL',
          date_format: 'dddd, MMMM D, YYYY',
          time_format: 'h:mm a',
        },
        {
          name: 'coverImage',
          label: 'Cover Image',
          widget: 'image',
          required: false,
        },
        {
          name: 'author',
          label: 'Author',
          widget: 'relation',
          collection: 'authors',
          search_fields: ['title', 'slug'],
          value_field: '{{slug}}',
          display_fields: ['title', 'slug'],
        },
        {
          name: 'category',
          label: 'Category',
          widget: 'relation',
          collection: 'categories',
          search_fields: ['title', 'slug'],
          value_field: '{{slug}}',
          display_fields: ['title', 'slug'],
        },
        {
          name: 'tags',
          label: 'Tags',
          widget: 'relation',
          collection: 'tags',
          search_fields: ['title', 'slug'],
          value_field: '{{slug}}',
          display_fields: ['title', 'slug'],
          required: false,
          multiple: true,
        },
        {
          name: 'excerpt',
          label: 'Excerpt',
          widget: 'text',
        },
        {
          name: 'body',
          label: 'Body',
          widget: 'markdown',
          sanitize_preview: true,
        },
      ],
    },
    {
      name: 'authors',
      label: 'Authors',
      label_singular: 'Author',
      folder: '_content/authors',
      create: true,
      delete: false,
      preview_path: 'authors/{{slug}}',
      fields: [
        {
          name: 'title',
          label: 'Name',
          widget: 'string',
        },
        {
          name: 'twitter',
          label: 'Twitter Handle',
          required: false,
        },
        {
          name: 'image',
          label: 'Image',
          widget: 'image',
        },
        {
          name: 'shortBio',
          label: 'Short Bio',
          widget: 'text',
          required: false,
        },
        {
          name: 'body',
          label: 'Body',
          widget: 'markdown',
          sanitize_preview: true,
        },
      ],
    },
    {
      name: 'categories',
      label: 'Categories',
      label_singular: 'Category',
      folder: '_content/categories',
      create: true,
      delete: false,
      preview_path: '{{slug}}',
      fields: [
        {
          name: 'title',
          label: 'Title',
          widget: 'string',
        },
        {
          name: 'body',
          label: 'Body',
          widget: 'markdown',
          sanitize_preview: true,
        },
      ],
    },
    {
      name: 'tags',
      label: 'Tags',
      label_singular: 'Tag',
      folder: '_content/tags',
      create: true,
      delete: false,
      preview_path: 'tags/{{slug}}',
      fields: [
        {
          name: 'title',
          label: 'Title',
          widget: 'string',
        },
        {
          name: 'body',
          label: 'Body',
          widget: 'markdown',
          sanitize_preview: true,
        },
      ],
    },
  ],
}
