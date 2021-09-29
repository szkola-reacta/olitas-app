
import axiosInstance, { apiConfig } from './config';

export const fetchMenu = async () => {
  try {
    // STEP 2: make  request
    const { data: dbData } = await axiosInstance.get(apiConfig.menuList);

    // // STEP 3: get data
    // const repsonseData = await response.json();

    // STEP 4: make new structure
    const records = [];
    dbData.records.forEach((elem) => {
      records.push({
        id: elem.id,
        name: elem.fields.name,
        notes: elem.fields.notes,
        price: elem.fields.price,
        status: elem.fields.status,
        created_at: elem.fields.created_at,
        updated_at: elem.fields.updated_at,
      });
    });

    return records;

  } catch (e) {
    console.error(e);
  }
}

export const fetchMenuDetails = async (menuId) => {
  try {
    const { data: dbData } = await axiosInstance
    .get(`${apiConfig.menuDetail}/${menuId}`);

  const { name, notes, price, status, photos } = dbData.fields;

  return {
    name,
    notes,
    price,
    status,
    photos,
  };
  } catch (e) {
    console.error(e);
  }
}