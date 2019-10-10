import CookieService, { getExpirationDate } from './CookieService';

describe('CookieService', () => {
  const cookieName = 'myCookie';
  const cookieValue = 'myValue';
  const daysToLive = 1;
  const path = '/home';
  const domain = 'something.com';
  const expires = `; expires=${getExpirationDate(daysToLive)}; path=${path}; domain=${domain}`;
  let myCookie = `${cookieName}=${cookieValue}`;
  myCookie += expires;

  afterEach(() => {
    document.cookie = '';
  });

  it('setCookie works', () => {
    CookieService.setCookie(cookieName, cookieValue, daysToLive, path, domain);
    expect(document.cookie).toBe(myCookie);
  });
});
