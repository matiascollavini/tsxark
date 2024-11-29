const Price = ({ amount, currency } : { amount: number, currency: 'ARS' | 'USD' }) => {
  if (!amount) {
    return <span>-</span>
  }

  if (!currency) {
    currency = 'ARS'
  }

  const formattedPrice = new Intl.NumberFormat('es-AR', { style: 'currency', currency, maximumFractionDigits: 0 }).format(amount)

  return <span>{formattedPrice}</span>
}

export default Price
