export function calcDuration(start: string, end: string) {
  const startDate = new Date(start)
  const endDate = end === "Present" ? new Date() : new Date(end)

  const months =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth())

  const years = Math.floor(months / 12)
  const remainingMonths = months % 12

  if (years > 0 && remainingMonths > 0)
    return `${years} yr ${remainingMonths} mo`

  if (years > 0)
    return `${years} yr`

  return `${remainingMonths} mo`
}