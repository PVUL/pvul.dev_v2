export default {
  cms_manual_init: true,
  backend: {
    name: 'github',
    repo: 'pvul/pvul.dev_v2',
    branch: 'main',
    squash_merges: true,
    base_url: 'https://paulyun.co',
    auth_endpoint: 'api/auth',
  },
  local_backend: true,
  publish_mode: 'editorial_workflow',
  site_url:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://paulyun.co',
  // display_url: '',
  media_library: {
    name: 'uploadcare',
    config: {
      publicKey: process.env.NEXT_PUBLIC_UPLOADCARE_PUBLIC_KEY,
    },
    settings: {
      autoFilename: false,
    },
  },
  collections: [
    {
      name: 'posts',
      label: 'Posts',
      label_singular: 'Post',
      folder: '_content/posts',
      path: '{{category}}/{{year}}-{{month}}-{{day}}_{{slug}}',
      extension: 'mdx',
      format: 'frontmatter',
      sortable_fields: ['title', 'postDate'],
      view_groups: [
        {
          label: 'Category /',
          field: 'category',
        },
      ],
      create: true,
      delete: false,
      preview_path: 'posts/',
      fields: [
        {
          name: 'title',
          label: 'Title',
          widget: 'string',
        },
        {
          name: 'status',
          label: 'status',
          widget: 'select',
          options: ['scheduled post', 'posted', 'draft', 'archived'],
          default: 'scheduled post',
        },
        {
          name: 'postDate',
          label: 'Post Date',
          widget: 'datetime',
          // format: '', // default to ISO8601 format `YYYY-MM-DDTHH:mm:ssZ`
        },
        {
          name: 'category',
          label: 'Category',
          widget: 'relation',
          collection: 'categories',
          search_fields: ['title', 'slug'],
          value_field: '{{slug}}',
          display_fields: ['title', 'slug'],
          default: '_',
        },
        {
          name: 'excerpt',
          label: 'Excerpt',
          widget: 'text',
          required: true,
        },
        {
          name: 'author',
          label: 'Author',
          widget: 'relation',
          collection: 'authors',
          search_fields: ['title', 'slug'],
          value_field: '{{slug}}',
          display_fields: ['title', 'slug'],
          default: 'paul-yun',
        },
        {
          name: 'image',
          label: 'Image',
          widget: 'object',
          summary: '{{fields.name}}',
          fields: [
            {
              name: 'url',
              label: 'Url',
              widget: 'image',
              required: true,
            },
            {
              name: 'alt',
              label: 'Alt',
              widget: 'string',
              required: true,
            },
          ],
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
          name: 'keywords',
          label: 'SEO Keywords',
          widget: 'string',
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
