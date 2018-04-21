export default (data, shouldSubtract = false) => {
  const groups = data
    .split('')
    .filter(char => '(' !== char)
    .join('')
    .split(')')
    .map(group => group.trim())
    .filter(group => '' !== group)
  const splitGroups = groups
    .map(group => group.split(', '))
  const intCastGroups = splitGroups.map(splits => splits.map((time) => {
    const [minutes, seconds] = time.split(':')
    return 60 * (+minutes) + (+seconds)
  }))
  const subtractedGroups = intCastGroups.map(splits => splits.map((time, i, splits) => {
    if (0 === i) {
      return time
    }
    return time - splits[i - 1]
  }))
  return shouldSubtract ? subtractedGroups : intCastGroups
}
