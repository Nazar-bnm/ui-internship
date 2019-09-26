import httpService from './httpService';

describe('httpService', () => {
  let storeAPI;
  beforeEach(() => {
    storeAPI = new httpService();
  });

  test('storeAPI should be an instance of httpService', () =>
    expect(storeAPI instanceof httpService).toBe(true));

  test('storeAPI should have method post', () => {
    expect(storeAPI.post !== 'undefined').toBe(true);
  });
});
