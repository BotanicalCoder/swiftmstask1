import React, { useState } from "react";

import {
  Flex,
  Box,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";

const Queue = () => {
  const [value, setValue] = useState("Consultation Queue");

  return (
    <Flex
      bg="white"
      minWidth="25%"
      borderLeftWidth="1px"
      borderLeftColor="gray.200"
    >
      <Box pt="20">
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            backgroundColor="white"
            _hover={{ backgroundColor: "gray.300" }}
            _focus={{ outline: "none" }}
          >
            {value}
          </MenuButton>
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
      </Box>
    </Flex>
  );
};

export default Queue;
