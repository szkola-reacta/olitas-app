import axiosInstance, { apiConfig } from './config';

export const makeOrder = async (menuId, data) => {
  try {
    const orderData = {
      records: [{
        fields: data
      }]
    }
    axiosInstance.post(apiConfig.ordersList, orderData);
  } catch (e) {
    console.error(e);
  }
  // axiosInstance.post() -> Promise
}