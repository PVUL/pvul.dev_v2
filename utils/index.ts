/**
 * For getting scaled images from uploadcare.com given a url, width, and height
 *
 * @read https://uploadcare.com/docs/transformations/image/resize-crop/#operation-scale-crop
 *
 * @param url image source url
 * @param dimensions string in the format `widthxheight`, ie. `500x250`
 * @return string url of scaled cropped image
 */
export const getUploadCareUrl = (url: string, dimensions: string) =>
  `${url}-/scale_crop/${dimensions}/smart/`
