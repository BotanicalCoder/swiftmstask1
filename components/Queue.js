import React, { useState } from "react";

import {
  Flex,
  Stack,
  HStack,
  Box,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Text,
} from "@chakra-ui/react";

import {
  ChevronDownIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@chakra-ui/icons";

const Queue = ({isOpen, onToggle}) => {
  const [value, setValue] = useState("Consultation Queue");
  return (
    <Flex
      bg="white"
      width={!isOpen ? "370px" : "40px"}
      style={{
        "transition-property": "width",
        "transition-duration": "0.3s",
        "transition-timing-function": "linear",
        "transition-delay": "0.1s",
      }}
      _focus={{ width: "360px" }}
      borderLeftWidth="1px"
      borderLeftColor="gray.200"
      minH="100vh"
      position="fixed"
      right={0}
      zIndex={2}
    >
      <Stack>
        <Box pt={14}>
          {!isOpen ? (
            <HStack
              justifyContent="space-between"
              p={2}
              width={!isOpen ? "370px" : "40px"}
            >
              <Menu px={0}>
                <MenuButton
                  as={Button}
                  leftIcon={<ChevronDownIcon />}
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

              <IconButton
                backgroundColor="white"
                _hover={{ backgroundColor: "gray.300" }}
                onClick={onToggle}
              >
                <ChevronRightIcon />
              </IconButton>
            </HStack>
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

        <HStack backgroundColor="gray.50" px={0} width="100vw">
          <Text py={3} px={4} fontSize="sm" color="gray.400">
            {!isOpen ? " August 9, 2021" : "  "}
          </Text>
        </HStack>
        <Box width="370px">
          <Text
            textAlign="center"
            fontWeight="medium"
            fontSize="sm"
            py={4}
            px={0}
          >
            No task on this queue yet
          </Text>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Queue;
