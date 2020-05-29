import { dehumanize } from './dehumanize'

const DELIMITER = '-'
const REGEX_SUFFIX_INDEX = /\b\d+$/

export interface IndexedNameOptions {
  existing: string[]
  name: string
}

export const generateIndexedName = ({ existing = [], name }: IndexedNameOptions) => {
  const safeName = dehumanize(name, DELIMITER)
  if (!existing.includes(safeName)) {
    return safeName
  }

  const indices: number[] = []
  existing.forEach(str => {
    const matches = str.match(REGEX_SUFFIX_INDEX)
    if (matches) {
      const number = parseInt(matches[0])
      if (!isNaN(number)) {
        indices.push(number)
      }
    }
  })
  const max = Math.max(...indices)
  return `${safeName}${DELIMITER}${max + 1}`
}
