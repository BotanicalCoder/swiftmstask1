import React, { useState } from "react";

import {
  Flex,
  Spacer,
  Box,
  Heading,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Stack,
  Avatar,
  AvatarGroup,
  InputGroup,
  InputLeftAddon,
  Input,
  Divider,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Text,
  Image,
} from "@chakra-ui/react";

import {
  TriangleDownIcon,
  SearchIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";

export default function Home() {
  const [value, setValue] = useState("Consultation Queue");
  return (
    <>
      <Flex
        backgroundColor="rgb(17, 100, 157)"
        color="white"
        padding="2"
        position="fixed"
        top="0"
        left="0"
        minWidth="100%"
      >
        <Stack
          p="2"
          direction="row"
          display="flex"
          flex="2%"
          justifyContent="flex-start"
        >
          <Image
            float="left"
            src="https://www.test-emr.medispark.health/images/emr-icon-white.png"
            alt="Swift MediSpark"
            pr="9"
          />

          <Button colorScheme="white" variant="link" size="sm">
            Clients
          </Button>
          <Button colorScheme="white" variant="link" size="sm">
            Schedules
          </Button>
        </Stack>

        <Spacer />

        <InputGroup flex="10%" backgroundColor={"white"} borderRadius={"4"}>
          <InputLeftAddon
            m="0"
            px="3"
            backgroundColor="white"
            outlineColor="white"
          >
            <SearchIcon color="lightgrey" />
          </InputLeftAddon>

          <Input
            border="none"
            color="black"
            pl="0"
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
                    <Text fontSize="md">Gbenga</Text>
                  </Stack>
                </MenuButton>
                <MenuList p="0" m="0" color="black" >
                  <MenuItem >
                    <Avatar name="Gbenga Oyeniyi" size="md" />
                    <Box display="flex" direction="row" flexWrap="wrap">
                      <Text fontSize="md" flex="100%">
                        Gbenga O.
                      </Text>
                      <Button color="blue.300" variant="link" size="sm">
                        Account Setting
                      </Button>
                    </Box>
                  </MenuItem>

                  <MenuItem>
                    <Text color="red.600">Sign-out </Text>
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

      <Flex display="flex" bg="rgb(247, 248, 248)" h="100vh" flexWrap="nowrap">
        <Flex
          direction="row"
          flexWrap="wrap"
          justifyContent="flex-start"
          alignContent="baseline"
          p="10"
          pt="20"
        >
          <Stack
            flex="100%"
            bg="white"
            direction="row"
            pl="5"
            pr="20"
            py="6"
            borderWidth="1px"
            borderColor="gray.300"
            borderRadius="5px"
            flex="10"
          >
            <Stack m="0" px="8" pt="4" direction="column">
              <Heading color="blue.400" size="lg">
                Welcome Gbenga,
              </Heading>
              <p>To begin you can search for, or register a patient </p>
              <InputGroup
                minWidth="30vw"
                mr="4"
                backgroundColor="#edf2f7"
                borderRadius="4"
                color="white"
              >
                <InputLeftAddon outlineColor="none">
                  <SearchIcon color="lightgrey" />
                </InputLeftAddon>
                <Input
                  backgroundColor="#edf2f7"
                  border="none"
                  color="black"
                  _focus={{ boxShadow: "none" }}
                  type="text"
                  placeholder="Search Patient"
                />
              </InputGroup>
            </Stack>

            <Divider
              orientation="vertical"
              borderLeftWidth="2px"
              borderLeftColor="gray.500"
            />

            <Stack p="4">
              <Heading size="sm"> Register Patient</Heading>

              <Stack direction="row" align="center">
                <AvatarGroup size="md" max={3}>
                  <Avatar
                    name="Ryan Florence"
                    src="https://bit.ly/ryan-florence"
                  />
                  <Avatar
                    name="Segun Adebayo"
                    src="https://bit.ly/sage-adebayo"
                  />
                  <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
                </AvatarGroup>

                <Box display="flex">
                  <Text fontWeight="light">19 </Text> &nbsp;
                  <Text fontWeight="semibold" color="blue.500">
                    Patients Registered
                  </Text>
                </Box>
              </Stack>
              <Button backgroundColor="blue.500" color="white" p="3" size="sm">
                Register Patient
              </Button>
            </Stack>
          </Stack>

          <Flex
            flex="100%"
            display="flex"
            justifyContent="space-around"
            mt="4"
            flexWrap="wrap"
          >
            <Box flex="50%" backgroundColor="white">
              <Table variant="unstyled" size="sm">
                <TableCaption placement="top" align="center">
                  <Box display="flex" justifyContent="space-between">
                    <Heading size="md" textAlign="left">
                      Upcoming Appointments
                    </Heading>

                    <Button backgroundColor="blue.500" color="white" px="4">
                      View All
                    </Button>
                  </Box>
                </TableCaption>
                <Thead bg={"#e7e7f8"}>
                  <Tr>
                    <Th>TIME</Th>
                    <Th>DATE</Th>
                    <Th> PATIENT</Th>
                    <Th>PERSONNEL</Th>
                    <Th>SERVICE</Th>
                    <Th>PHONE NO</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>03:05 pm</Td>
                    <Td>Today </Td>
                    <Td>Evans Okocha</Td>
                    <Td>Uju Johnson</Td>
                    <Td>General Practice</Td>
                    <Td>0811234567</Td>
                  </Tr>
                </Tbody>
              </Table>
            </Box>

            <Box
              backgroundColor="none"
              bgImage="https://www.test-emr.medispark.health/images/dashboard-queue-bg.svg"
              bgRepeat="no-repeat"
              bgSize="cover"
              p="4"
              mx="3"
              flex="10%"
              borderRadius="5"
            >
              <Heading align="left" color="white" fontSize="30" pb="20">
                Manage the order in which patients see the doctor.
              </Heading>

              <Button alignSelf="baseline"> Manage Queue</Button>
            </Box>
          </Flex>
        </Flex>

        <Flex
          h="100vh"
          bg="white"
          flex="60%"
          borderLeftWidth="1px"
          borderLeftColor="gray.200"
          p="2"
        >
          <Box pt="20">
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                backgroundColor="white"
                _hover={{ backgroundColor: "gray.300" }}
                _focus={{ boxShadow: "none", outline: "none" }}
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
      </Flex>
    </>
  );
}
