import { HStack, Link } from '@chakra-ui/react';
import { Link as RRDLink } from "react-router-dom";

function Menu() {
  return (
    <HStack>
      <Link as={RRDLink} to="/">Home</Link>
      <Link as={RRDLink} to="/menu">Menu</Link>
      <Link as={RRDLink} to="/orders">Orders</Link>
    </HStack>
  );
}

export default Menu;
