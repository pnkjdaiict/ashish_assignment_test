import axios from "axios";

export default class apiDataController {
  GetApi = async (url: any) => {
    try {
      const { data } = await axios.get(url);
      return data;
    } catch (e) {
      throw e;
    }
  };
}
