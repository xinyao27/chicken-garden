export const prettyNumber = (number: number) => {
  if (number >= 1000) {
    return `${(Math.round(number / 100) / 10).toFixed(1)}K`
  }
  return new Intl.NumberFormat('en-US').format(number)
}
