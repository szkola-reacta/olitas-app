import { useState, useEffect } from 'react';
import { Box, Text, Button } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

import { fetchMenuDetails } from '../services/menu';
import { makeOrder } from '../services/orders';

function MenuDetails() {
  const [menuData, setMenuData] = useState({});
  const { menuId } = useParams();

  const fetchData = async () => {
    const dbData = await fetchMenuDetails(menuId);
    setMenuData(dbData);
  }

  useEffect(() => {
    // fetch(url)
    // .then(response => response.json())
    // .then(dbData => setData(dbData))
    fetchData();
  }, []);

  const handleClick = () => {
    makeOrder(menuId, {
      name: menuData.name,
    })
  }

  return (
    <Box>
      <Text as="h1" fontSize="4xl">Menu</Text>
      {menuData && (<Box>
        <Text>{menuData.name}</Text>
        <Text>{menuData.notes}</Text>
        <Text>${menuData.price}</Text>
        <Text>{menuData.status}</Text>
        <Button onClick={handleClick}>Make order</Button>
      </Box>)}
    </Box>
  );
}

export default MenuDetails;
