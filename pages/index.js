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
} from "@chakra-ui/react";

import { TriangleDownIcon, SearchIcon } from "@chakra-ui/icons";

export default function Home() {
  return (
    <>
      <Flex backgroundColor={"rgb(17, 100, 157)"} color={"white"} padding={"2"}>
        <Stack p="2" direction={"row"}>
          <Heading size="md">Swift-MS logo</Heading>

          <Button colorScheme="white" variant="link" size="sm">
            Clients
          </Button>
          <Button colorScheme="white" variant="link" size="sm" ml={"4"}>
            Schedules
          </Button>
        </Stack>

        <Spacer />

        <InputGroup
          maxWidth={"30%"}
          mr={"4"}
          p={"0"}
          backgroundColor={"white"}
          borderRadius={"4"}
        >
          <InputLeftAddon
            m={"0"}
            p={"2"}
            backgroundColor="white"
            outlineColor="white"
            children={<SearchIcon color={"lightgrey"} />}
          />
          <Input
            border={"none"}
            color="black"
            _focus={{ boxShadow: "none" }}
            type="text"
            placeholder="Find a patient ....."
          />
        </InputGroup>

        <Box>
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton
                  backgroundColor={"rgba(0,0,0,0)"}
                  color={"white"}
                  _hover={{ bg: "rgba(0,0,0,0)" }}
                  _focus={{ boxShadow: "none" }}
                  _expanded={{ bg: "rgba(0,0,0,0)" }}
                  mr="4"
                  isActive={isOpen}
                  as={Button}
                  rightIcon={<TriangleDownIcon />}
                >
                  <Stack align="center" direction="row">
                    {" "}
                    <Avatar size={"sm"} /> <p>Username</p>{" "}
                  </Stack>
                </MenuButton>
                <MenuList p={"0"} m={"0"} color={"black"}>
                  <h1>hello</h1>

                  <MenuItem color={"red"}>
                    <strong>Sign-out </strong>
                  </MenuItem>
                </MenuList>
              </>
            )}
          </Menu>

          <Button color="black" backgroundColor={"white"} mr="4">
            ABC-Clinic
          </Button>
        </Box>
      </Flex>

      <Flex bg="rgb(247, 248, 248)" h="100vh" direction="column">
        <Flex direction="row" flexWrap="wrap">
          <Stack
            h="25vh"
            bg="white"
            direction="row"
            width="70%"
            m={"9"}
            p={"2"}
            border={"1px"}
            borderColor={"rgb(160, 174, 192)"}
            borderRadius={"5px"}
          >
            <Stack m="2" p="4" direction={"column"}>
              <Heading color="#11649D" size="lg">
                {" "}
                Welcome Username,
              </Heading>
              <p>To begin you can search for, or register a patient </p>
              <InputGroup
                minWidth={"30vw"}
                mr={"4"}
                backgroundColor="#edf2f7"
                borderRadius={"4"}
                color="white"
              >
                <InputLeftAddon
                  outlineColor="none"
                  children={<SearchIcon color={"lightgrey"} />}
                />
                <Input
                  backgroundColor="#edf2f7"
                  border={"none"}
                  color="black"
                  _focus={{ boxShadow: "none" }}
                  type="text"
                  placeholder="Search Patient"
                />
              </InputGroup>
            </Stack>

            <Divider
              orientation="vertical"
              borderLeftWidth="3px"
              height="80%"
              p={"2"}
            />

            <Stack
              mr={"9"}
              width="100%"
              p="4"
              borderLeft="1rem"
              borderLeftColor="red"
            >
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
                <p>
                  <small>19 </small> Patients Registered
                </p>
              </Stack>
              <Button
                backgroundColor="#11649D"
                color="white"
                maxWidth="50%"
                p={"2"}
              >
                Register Patient
              </Button>
            </Stack>
          </Stack>

          <Flex backgroundColor="white" m={"9"}>
            <Table variant="unstyled" width="60vw" size="sm">
              <TableCaption placement="top" align="center">
                {" "}
                <Heading size="md" textAlign="left">
                  {" "}
                  Upcoming Appointments{" "}
                  <Button
                    backgroundColor="#11649D"
                    color="white"
                    maxWidth="50%"
                    px={"4"}
                    ml={"21rem"}
                  >
                    {" "}
                    View All
                  </Button>
                </Heading>
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
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
