const token = () => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; accessToken=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
};

const HandleSetCookie = (name, value, options = {}) => {
  let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

  // Set the expiration time to 24 hours
  const expirationDate = new Date();
  expirationDate.setTime(expirationDate.getTime() + 24 * 60 * 60 * 1000); // 24 hours in milliseconds

  options.expires = expirationDate.toUTCString();

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

const getCharacterValidationError = (str) => {
  return `Your password must have at least 1 ${str} character`;
};

export { HandleSetCookie, deleteCookie, getCharacterValidationError, token };

export default priceFormatter;
