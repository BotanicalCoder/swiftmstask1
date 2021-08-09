import React, { useState } from "react";

import {
  Flex,
  Stack,
  HStack,
  VStack,
  Box,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import {
  ChevronDownIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@chakra-ui/icons";

const Queue = () => {
  const [value, setValue] = useState("Consultation Queue");
  let { isOpen, onToggle } = useDisclosure();
  return (
    <Flex
      bg="white"
      minWidth={!isOpen ? "28%" : "4%"}
      borderLeftWidth="1px"
      borderLeftColor="gray.200"
      minH="100vh"
    >
      <Stack position="fixed" p="2">
        <Box pt="14">
          {!isOpen ? (
            <Menu px="0">
              <HStack spacing="5rem">
                <MenuButton
                  as={Button}
                  leftIcon={<ChevronDownIcon />}
                  backgroundColor="white"
                  _hover={{ backgroundColor: "gray.300" }}
                  _focus={{ outline: "none" }}
                >
                  {value}
                </MenuButton>

                <IconButton
                  backgroundColor="white"
                  _hover={{ backgroundColor: "gray.300" }}
                  onClick={onToggle}
                >
                  <ChevronRightIcon />
                </IconButton>
              </HStack>
              <MenuList>
                <MenuItem
                  onClick={() => {
                    setValue("Consultation Queue");
                  }}
                >
                  Consultation Queue
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setValue("Bills Queue");
                  }}
                >
                  Bills Queue
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setValue("Procedure Queue");
                  }}
                >
                  Procedure Queue
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setValue("Dispensary Queue");
                  }}
                >
                  Dispensary Queue
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setValue("Laboratory Queue");
                  }}
                >
                  Laboratory Queue
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setValue("Imaging Queue");
                  }}
                >
                  Imaging Queue
                </MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <Box>
              <IconButton
                backgroundColor="white"
                _hover={{ backgroundColor: "gray.300" }}
                onClick={onToggle}
              >
                <ChevronLeftIcon />
              </IconButton>
            </Box>
          )}
        </Box>
        <HStack backgroundColor="gray.50" px="0" width="100vw">
          <Text py="3" px="4" fontSize="sm" color="gray.400">
            {!isOpen ? " August 9, 2021" : "  "}
          </Text>
        </HStack>
        <HStack>
          <Text
            textAlign="center"
            fontWeight="medium"
            fontSize="sm"
            py="4"
            px="20"
          >
            No task on this queue yet
          </Text>
        </HStack>
      </Stack>
    </Flex>
  );
};

export default Queue;
