/**
 * For getting scaled images from uploadcare.com given a url, width, and height
 *
 * @read https://uploadcare.com/docs/transformations/image/resize-crop/#operation-scale-crop
 *
 * @param url image source url
 * @param dimensions string in the format `widthxheight`, ie. `500x250`
 * @return string url of scaled cropped image
 */
export const getUploadCareUrl = (url: string, dimensions: string) => {
  // url should be provided in the format.
  // ie. https://ucarecdn.com/863b8d1b-cf3b-4e6b-87c7-ba57a3cd6c23/pexelssteinegilliland14699589.jpg
  // we need to remove the filename to apply image transformations via url string
  const urlParts = url.split('/')
  urlParts[urlParts.length - 1] = ''
  const normalizedUrl = urlParts.join('/')

  return `${normalizedUrl}-/scale_crop/${dimensions}/smart/`
}

/**
 * Get formatted date.
 *
 * @param datetime ISO8601 string, looks like `2023-03-16T21:24:02.020Z`
 * @param style optional, if you pass 'photoStyle' will output a different format
 */
export const getFormattedDate = (datetime: string, style?: string) => {
  const date = new Date(datetime)
  let formattedDate = ''

  if (style === 'photoStyle') {
    const splitDate = date
      .toLocaleDateString('en-US', {
        year: '2-digit',
        month: 'numeric',
        day: 'numeric',
      })
      .split('/')
    // `m d 'yy` - vintage photograph style
    formattedDate = `${splitDate[0]} ${splitDate[1]} '${splitDate[2]}`
  } else {
    // `Thursday, March 16, 2023`
    formattedDate = date.toLocaleDateString('en-us', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return formattedDate
}
