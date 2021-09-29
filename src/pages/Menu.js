import { useState, useEffect } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import { fetchMenu } from '../services/menu';

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
          <Link to={`/menu/${elem.id}`}>
            <Text>{elem.name}, ${elem.price}</Text>
          </Link>
        </Box>
      ))}
    </Box>
  );
}

export default Menu;
