const formatter = Intl.NumberFormat('en-US', {
  currency: 'USD',
  maximumFractionDigits: 2,
  style: 'currency',
});

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  dateStyle: 'long',
});

function titleFormatter(title, limit) {
  let titleWords = title.split(' ');
  if (titleWords.length > limit) {
    const formattedTitle = titleWords.slice(0, limit).join(' ') + '...';
    return formattedTitle;
  }
  return title;
}

export { formatter, dateFormatter, titleFormatter };
