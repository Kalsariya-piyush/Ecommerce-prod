export const getCookie = () => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; jwt=`);
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

export default priceFormatter;
