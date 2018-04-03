const getDeviceImage = (image, width, size) => {
  let endSize = width > 800 ? "large" : width < 440 ? "small" : "medium"
  let extMatch = image.match(/(.*)\.[^.]+$/)
  let leadingPath = extMatch ? extMatch[1] : false
  const extension = image.split(".").pop()

  switch (size) {
    case "small":
      endSize = "small"
      break
    case "medium":
      endSize = endSize === "small" ? "small" : "medium"
      break
    case "large":
      endSize = endSize === "small" ? "small" : endSize === "medium" ? "medium" : "large"
      break
    default:
      break
  }

  if (size) {
    console.log(size, endSize, image)
  }

  return `${leadingPath}_${endSize}.${extension}`
}

export default getDeviceImage
