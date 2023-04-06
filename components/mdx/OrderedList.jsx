import React from 'react'

// Note: this would make a good blog post.
// https://stackoverflow.com/questions/23699128/how-can-i-reset-a-css-counter-to-the-start-attribute-of-the-given-list
// this is necessary so that on ordered lists, a code fence does not
// reset the count
// example:
// 1. one
// 2. two
// ```
// some code
// ```
// 3. three  <-- default behavior: reset to 1, this component persists the count to 3

export const OrderedList = (props) => (
  <ol {...props} style={{ '--start': props.start }}>
    {props.children}
  </ol>
)
