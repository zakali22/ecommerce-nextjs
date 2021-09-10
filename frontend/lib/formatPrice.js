export default function formatPrice(amount) {
  const options = {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 2,
  };

  if (amount % 100 === 0) options.minimumFractionDigits = 0; // Remove .00

  const formatter = Intl.NumberFormat('en-GB', options);
  return formatter.format(amount / 100); // From 1000 to 100
}
