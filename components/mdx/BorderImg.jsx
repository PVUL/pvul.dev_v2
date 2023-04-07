/**
 * In an mdx file, this is used for images that have white edges
 * Use:
 *
 * <BorderImg src="https..." alt="the alt text..." />
 *
 * Note: some pre-set image styles are being set by
 *       components/sections/Post/Post.module.scss
 */
export const BorderImg = (props) => (
  <p>
    <img src={props.src} alt={props.alt} className="border-8" />
  </p>
)
