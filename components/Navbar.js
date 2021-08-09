import {
  Flex,
  Spacer,
  Box,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Stack,
  HStack,
  Avatar,
  InputGroup,
  InputLeftAddon,
  Input,
  Text,
  Image,
  Divider,
  Icon,
} from "@chakra-ui/react";

import { BiLogOut } from "react-icons/bi";

import { TriangleDownIcon, SearchIcon } from "@chakra-ui/icons";

const NavBar = () => {
  return (
    <Flex
      backgroundColor="rgb(17, 100, 157)"
      color="white"
      padding="1"
      position="fixed"
      top="0"
      left="0"
      minWidth="100%"
      zIndex="10"
    >
      <HStack p="0" spacing="1.5rem">
        <Image
          float="left"
          src="https://www.test-emr.medispark.health/images/emr-icon-white.png"
          alt="Swift MediSpark"
        />

        <Button colorScheme="white" variant="link" size="sm">
          Clients
        </Button>
        <Button colorScheme="white" variant="link" size="sm">
          Schedules
        </Button>
      </HStack>

      <Spacer />

      <InputGroup
        flex="10%"
        backgroundColor={"white"}
        borderRadius={"4"}
        p="0.005"
      >
        <InputLeftAddon
          m="0"
          py="0"
          px="3"
          backgroundColor="white"
          outlineColor="white"
        >
          <SearchIcon color="lightgrey" />
        </InputLeftAddon>

        <Input
          border="none"
          color="black"
          py="0"
          pl="0"
          fontSize="sm"
          _focus={{ boxShadow: "none" }}
          type="text"
          placeholder="Find a patient ....."
        />
      </InputGroup>

      <Box
        display="flex"
        flex="5%"
        justifyItems="space-around"
        justifyContent="space-around"
      >
        <Menu display="flex">
          {({ isOpen }) => (
            <>
              <MenuButton
                backgroundColor={"rgba(0,0,0,0)"}
                color={"white"}
                _hover={{ bg: "rgba(0,0,0,0)" }}
                _focus={{ boxShadow: "none" }}
                _expanded={{ bg: "rgba(0,0,0,0)" }}
                isActive={isOpen}
                as={Button}
                rightIcon={<TriangleDownIcon boxSize="4" pt="1" />}
              >
                <Stack align="center" direction="row">
                  &nbsp;
                  <Avatar name="Gbenga Oyeniyi" size="sm" />
                  <Text fontSize="sm" fontWeight="bold">
                    Gbenga
                  </Text>
                </Stack>
              </MenuButton>
              <MenuList py="2" m="0" color="black" width="50%">
                <MenuItem>
                  <Avatar name="Gbenga Oyeniyi" size="md" m="0" p="0" />
                  <Box
                    display="flex"
                    direction="column"
                    flexWrap="wrap"
                    justifyContent="flex-start"
                  >
                    <Text
                      fontSize="md"
                      pl="2"
                      d="block"
                      flex="60%"
                      fontWeight="bold"
                    >
                      GBENGA O.
                    </Text>
                    <Button
                      color="blue.300"
                      variant="link"
                      size="sm"
                      pl="2"
                      d="block"
                    >
                      Account Setting
                    </Button>
                  </Box>
                </MenuItem>
                <Divider />
                <MenuItem
                  _hover={{ outline: "none", backgroundColor: "red.50" }}
                >
                  <Text
                    color="red.600"
                    padding="0.5"
                    fontSize="sm"
                    fontWeight="bold"
                  >
                    <Icon as={BiLogOut} fontSize="md" /> Sign out
                  </Text>
                </MenuItem>
              </MenuList>
            </>
          )}
        </Menu>

        <Button
          color="teal.900"
          fontSize="sm"
          backgroundColor="white"
          _hover={{ backgroundColor: "white" }}
          leftIcon={
            <Image
              src="https://res.cloudinary.com/medispark/image/upload/v1625652371/1625652370_organization_logo.jpg"
              alt="Hospital logo"
              boxSize="10"
            />
          }
        >
          ABC-CLINIC
        </Button>
      </Box>
    </Flex>
  );
};

export default NavBar;
