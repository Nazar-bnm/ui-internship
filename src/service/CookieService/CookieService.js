export const getExpirationDate = (days) => {
  const timeStamp = days*24*60*60*1000;
  const date = new Date();

  date.setTime(date.getTime() + (timeStamp));
  return date.toGMTString();
};

export default class CookieService {
  // If you set the number of days to 0 the cookie is trashed when the user closes the browser.
  // If you set the days to a negative number the cookie is trashed immediately.
  static setCookie(name, value, daysToLive, path, domain) {
    let cookie = `${name}=${value}`;
    let expires = '';

    if (daysToLive) {
      expires = `; expires=${getExpirationDate(daysToLive)}`;
      cookie += expires;
    };

    if (path) {
      cookie += `; path=${path}`;
    }

    if (domain) {
      cookie += `; domain=${domain}`;
    }

    document.cookie = cookie;
  };

  // Before using this function check if value exist
  // (if the cookie does not exist the variable becomes null,
  // which might upset the rest of your function)
  // let x = getCookie('bbbdggs');
  // if (x) { do something with x }
  static getCookie(name) {
    const cookieName = name + '=';
    const cookieNameLength = cookieName.length;
    const cookiesArray = document.cookie.split(';');

    for (let i=0; i < cookiesArray.length; i++) {
      const cookieToCheck = cookiesArray[i];
      const cookieLength = cookieToCheck.length;

      while (cookieToCheck.charAt(0)==' ') {
        cookieToCheck = cookieToCheck.slice(1, cookieLength);
      }

      if (cookieToCheck.indexOf(cookieName) == 0) {
        return cookieToCheck.slice(cookieNameLength, cookieLength);
      }
    }

    return null;
  };

  static deleteCookie(name) {
    CookieService.setCookie(name, '', -1);
  }
}
