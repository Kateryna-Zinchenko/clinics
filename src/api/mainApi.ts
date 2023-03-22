import HttpClient from './httpClient';

class MainApi extends HttpClient {
  private static instanceCached: MainApi;

  public constructor() {
    super(import.meta.env.VITE_BASE_URL);
  }

  static getInstance = () => {
    if (!MainApi.instanceCached) {
      MainApi.instanceCached = new MainApi();
    }
    return MainApi.instanceCached;
  };

  public getSuppliers = () => this.instance.get<any>('suppliers');

}

export default MainApi;
