/**
 * Merge objects where preference is given to values for a key in subsequent objects
 * @param items a list of objects
 * @param qualifyValue if this evaluates false for a value, ignore the value
 */
export const defaultsFavoringLast = (items: object[], qualifyValue = (v: any) => !!v) => {
  const entries = ([] as [string, any][]).concat(...items.map(Object.entries))
  return entries.reduce(
    (previous, [key, value]) => {
      previous[key] = qualifyValue(value) ? value : previous[key]
      return previous
    },
    {} as any,
  )
}
