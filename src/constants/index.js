const token = () => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; accessToken=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
};

const HandleSetCookie = (name, value, options = {}) => {
  let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

  for (const option in options) {
    cookieString += `; ${option}=${options[option]}`;
  }

  document.cookie = cookieString;
};

const deleteCookie = (cookieName) => {
  document.cookie =
    cookieName + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
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

export { HandleSetCookie, deleteCookie, token };

export default priceFormatter;
