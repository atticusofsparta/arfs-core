import { AxiosHTTPService } from '../src/index.js';

describe('AxiosHTTPService Integration Test', () => {
  let service: AxiosHTTPService;

  beforeEach(() => {
    service = new AxiosHTTPService({
      url: 'https://httpstat.us',
    });
  });

  it('should make a successful GET request', async () => {
    const endpoint = '/200';
    const result = await service.get({ endpoint });
    expect(result).toBeDefined();
  });

  it('should make a successful POST request', async () => {
    const endpoint = '/200';
    const data = Buffer.from('test data');
    const result = await service.post({ endpoint, data });
    expect(result).toBeDefined();
  });

  it('should throw an error for failed GET request', async () => {
    const endpoint = '/404';
    await expect(service.get({ endpoint })).rejects.toThrow();
  });

  it('should throw an error for failed POST request', async () => {
    const endpoint = '/404';
    const data = Buffer.from('test data');
    await expect(service.post({ endpoint, data })).rejects.toThrow();
  });
});
