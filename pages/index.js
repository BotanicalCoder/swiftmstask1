import {
  Flex,
  Box,
  Heading,
  Button,
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
  calc,
} from "@chakra-ui/react";

import { SearchIcon } from "@chakra-ui/icons";

import NavBar from "../components/Navbar";
import Queue from "../components/Queue";

export default function Home() {
  return (
    <Box>
      <NavBar />

      <Flex bg="rgb(247, 248, 248)" className="alpha" height="100vh">
        <Flex
          direction="row"
          flexWrap="wrap"
          justifyContent="flex-start"
          p="10"
          pt="20"
        >
          <Stack
            bg="white"
            direction="row"
            pl="5"
            pr="10"
            py="6"
            borderWidth="1px"
            borderColor="gray.300"
            borderRadius="5px"
            flex="20%"
          >
            <Stack m="0" px="8" pt="4" direction="column">
              <Heading color="blue.500" size="lg">
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
                <InputLeftAddon outlineColor="none" p="3">
                  <SearchIcon color="lightgrey" />
                </InputLeftAddon>
                <Input
                  backgroundColor="#edf2f7"
                  border="none"
                  color="black"
                  _focus={{ boxShadow: "none" }}
                  type="text"
                  placeholder="Search Patient"
                  p="0"
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
                  <Text fontWeight="light" fontSize="sm">
                    19
                  </Text>
                  &nbsp;
                  <Text fontWeight="bold" color="blue.500" fontSize="sm">
                    Patients Registered
                  </Text>
                </Box>
              </Stack>
              <Button
                backgroundColor="blue.500"
                color="white"
                p="3"
                size="sm"
                maxW="12rem"
                _hover={{ backgroundColor: "blue.700" }}
              >
                Register Patient
              </Button>
            </Stack>
          </Stack>

          <Flex
            flex="100%"
            display="flex"
            justifyContent="space-between"
            mt="4"
            flexWrap="wrap"
          >
            <Box
              flex="70%"
              backgroundColor="white"
              borderWidth="1px"
              borderColor="gray.300"
              borderRadius="5px"
            >
              <Table variant="unstyled" size="sm">
                <TableCaption placement="top" align="center">
                  <Box display="flex" justifyContent="space-between">
                    <Heading size="md" textAlign="left">
                      Upcoming Appointments
                    </Heading>

                    <Button
                      backgroundColor="blue.500"
                      color="white"
                      px="4"
                      _hover={{ backgroundColor: "blue.700" }}
                    >
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
              flex="20%"
              borderRadius="5"
            >
              <Heading align="left" color="white" fontSize="30" pb="20">
                Manage the order in which patients see the doctor.
              </Heading>

              <Button my="0" mx="auto" d="block">
                Manage Queue
              </Button>
            </Box>
          </Flex>
        </Flex>

        <Queue />
      </Flex>
    </Box>
  );
}
