const getDeviceImage = (image, width) => {
  let size = width > 800 ? "large" : width < 440 ? "small" : "medium"
  let extMatch = image.match(/(.*)\.[^.]+$/)
  let leadingPath = extMatch ? extMatch[1] : false
  const extension = image.split(".").pop()

  console.log(`${leadingPath}_${size}.${extension}`, width)

  return `${leadingPath}_${size}.${extension}`
}

export default getDeviceImage
