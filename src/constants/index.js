const token = () => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; accessToken=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
};

const priceFormatter = (number) => {
  if (number >= 1000 && number < 1000000) {
    return `${(number / 1000).toFixed()}k`;
  } else if (number >= 1000000) {
    return `${(number / 1000000).toFixed()}m`;
  } else {
    return number.toString();
  }
};

export { token };

export default priceFormatter;
