export const getPrice = (price: number, discount: number) => {
  const parsedPrice = discount ? ((price || 0) * (1 - discount / 100)) : (price || 0)
  return parsedPrice
}
