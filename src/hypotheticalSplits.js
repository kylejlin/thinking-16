import { strToNum } from './timeUtils'

const hypotheticalSplits = []

const ranges = [
  '1:07', '1:17',
  '1:17', '1:22',
  '1:20', '1:26',
  '1:17', '1:24'
].map(strToNum)

const lapMetadata = []

for (let i = 0; i < 4; i++) {
  const i1 = i * 2
  const i2 = i1 + 1
  const spread = ranges[i2] - ranges[i1]
  lapMetadata.push({
    spread,
    min: ranges[i1]
  })
}

for (let a = 0; a < lapMetadata[0].spread; a++) {
  for (let b = 0; b < lapMetadata[1].spread; b++) {
    for (let c = 0; c < lapMetadata[2].spread; c++) {
      for (let d = 0; d < lapMetadata[3].spread; d++) {
        hypotheticalSplits.push([
          lapMetadata[0].min + a,
          lapMetadata[1].min + b,
          lapMetadata[2].min + c,
          lapMetadata[3].min + d
        ])
      }
    }
  }
}

const sum = (array) => {
  return array.reduce((sum, addend) => sum + addend, 0)
}

hypotheticalSplits.sort((a, b) => {
  return sum(a) - sum(b)
})

export default hypotheticalSplits
