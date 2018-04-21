const numToStr = (totalSeconds) => {
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60
  const paddedSeconds = seconds < 10
    ? '0' + seconds
    : seconds
  return minutes + ':' + paddedSeconds
}

const strToNum = (string) => {
  const [minutes, seconds] = string.split(':').map(p => p.trim())
  return 60 * (+minutes) + (+seconds)
}

export {
  numToStr,
  strToNum
}
