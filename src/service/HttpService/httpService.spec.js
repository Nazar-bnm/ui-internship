import HttpService from './httpService';

describe('httpService', () => {
  let storeAPI;
  beforeEach(() => {
    storeAPI = new HttpService();
  });

  test('storeAPI should be an instance of httpService', () =>
    expect(storeAPI instanceof HttpService).toBe(true));

  test('storeAPI should have method post', () => {
    expect(storeAPI.post !== 'undefined').toBe(true);
  });
});
