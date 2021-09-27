import { useState, useEffect } from 'react';
import { Box, Text } from '@chakra-ui/react';

import { fetchMenu } from '../services/fetchMenu';

function Menu() {
  const [menuData, setMenuData] = useState([]);

  const fetchData = async () => {
    const dbData = await fetchMenu();
    setMenuData(dbData);
  }

  useEffect(() => {
    // fetch(url)
    // .then(response => response.json())
    // .then(dbData => setData(dbData))
    fetchData();
  }, []);

  return (
    <Box>
      <Text as="h1" fontSize="4xl">Menu</Text>
      {menuData && menuData.map((elem) => (
        <Box key={elem.id}>
          <Text>{elem.name}, ${elem.price}</Text>
        </Box>
      ))}
    </Box>
  );
}

export default Menu;
