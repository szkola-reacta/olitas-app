const { REACT_APP_DB_ID, REACT_APP_API_KEY } = process.env;

// /menu?view=default
// STEP 1: config REST API
const BASE_URL = `https://api.airtable.com/v0/${REACT_APP_DB_ID}`;

const apiConfig = {
  'menuList': `${BASE_URL}/menu?view=default`,
  'menuDetail': `${BASE_URL}/menu`,
};

const requestConfig = {
  headers: {
    Authorization: `Bearer ${REACT_APP_API_KEY}`,
  }
};

// =====================================================

export const fetchMenu = async () => {
  try {
    // STEP 2: make  request
    const response = await fetch(apiConfig.menuList, requestConfig);

    // STEP 3: get data
    const repsonseData = await response.json();

    // STEP 4: make new structure
    const data = [];
    repsonseData.records.forEach((elem) => {
      data.push({
        id: elem.id,
        name: elem.fields.name,
        notes: elem.fields.notes,
        price: elem.fields.price,
        status: elem.fields.status,
        created_at: elem.fields.created_at,
        updated_at: elem.fields.updated_at,
      });
    });

    return data;

  } catch (e) {
    console.error(e);
  }
}