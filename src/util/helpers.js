const formatter = Intl.NumberFormat('en-US', {
  currency: 'USD',
  maximumFractionDigits: 2,
  style: 'currency',
  useGrouping: true,
});

export { formatter };
