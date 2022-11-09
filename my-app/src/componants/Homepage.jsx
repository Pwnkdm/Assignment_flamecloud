import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsPeopleFill } from "react-icons/bs";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Flex,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AddIcon } from "@chakra-ui/icons";

const Homepage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  const [profile, setProfile] = useState([]);

  const handleAccess = (e) => {
    setProfile([...profile, e.target.value]);
  };
  return (
    <>
      <Flex
        w={"90%"}
        margin="auto"
        border={"1px solid"}
        justifyContent={"space-between"}
      >
        <Box padding={"10px"}>
          <Text fontSize={"26px"} fontWeight={"bold"}>
            Action Plans
          </Text>
        </Box>
        <Flex justifyContent={"space-around"} w={"30%"} padding={"10px"}>
          <Button onClick={onOpen} colorScheme="blue" variant="outline">
            <Icon as={BsPeopleFill}></Icon> Manage Access
          </Button>
          {/* Accordian  */}
          <Modal
            w="700px"
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>SOP Access</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text fontWeight={"bold"} color="blue.400">
                  Sales
                </Text>
                <Box
                  boxSizing="border-box"
                  padding={"10px"}
                  border="1px solid grey"
                >
                  {" "}
                  <Text fontWeight={"light"} fontSize="12px">
                    Members
                  </Text>
                  <Flex gap={"10px"} justifyContent={"space-between"}>
                    <br />
                    <Box flexDirection={"column"} w="90%">
                      {" "}
                      {profile.map((el) => (
                        <Badge colorScheme="green">{el}</Badge>
                      ))}
                    </Box>
                    <Select
                      placeholder="Select Members"
                      width="20px"
                      border={"none"}
                      h="20px"
                      icon={<AddIcon />}
                      onChange={handleAccess}
                    >
                      <option value="Karan">
                        <Avatar
                          size="xs"
                          name="Dan Abrahmov"
                          src="https://bit.ly/dan-abramov"
                        />{" "}
                        Karan
                      </option>
                      <option value="Aryan">
                        <Avatar
                          size="xs"
                          name="Kola Tioluwani"
                          src="https://bit.ly/tioluwani-kolawole"
                        />
                        Aryan
                      </option>
                      <option value="Ankush">
                        <Avatar
                          size="xs"
                          name="Kent Dodds"
                          src="https://bit.ly/kent-c-dodds"
                        />
                        Ankush
                      </option>
                    </Select>
                  </Flex>
                </Box>
                <Text fontWeight={"bold"} color="blue.400">
                  Marketing
                </Text>
                <Box
                  boxSizing="border-box"
                  padding={"10px"}
                  border="1px solid grey"
                >
                  {" "}
                  <Text fontWeight={"light"} fontSize="12px">
                    Members
                  </Text>
                  <Flex gap={"10px"} justifyContent={"space-between"}>
                    <br />
                    <Box flexDirection={"column"} w="90%">
                      {" "}
                      {profile.map((el) => (
                        <Badge colorScheme="green">{el}</Badge>
                      ))}
                    </Box>
                    <Select
                      placeholder="Select Members"
                      width="20px"
                      border={"none"}
                      h="20px"
                      icon={<AddIcon />}
                      onChange={handleAccess}
                    >
                      <option value="Karan">
                        <Avatar
                          size="xs"
                          name="Dan Abrahmov"
                          src="https://bit.ly/dan-abramov"
                        />{" "}
                        Karan
                      </option>
                      <option value="Aryan">
                        <Avatar
                          size="xs"
                          name="Kola Tioluwani"
                          src="https://bit.ly/tioluwani-kolawole"
                        />
                        Aryan
                      </option>
                      <option value="Ankush">
                        <Avatar
                          size="xs"
                          name="Kent Dodds"
                          src="https://bit.ly/kent-c-dodds"
                        />
                        Ankush
                      </option>
                    </Select>
                  </Flex>
                </Box>
                <Text fontWeight={"bold"} color="blue.400">
                  Design
                </Text>
                <Box
                  boxSizing="border-box"
                  padding={"10px"}
                  border="1px solid grey"
                >
                  {" "}
                  <Text fontWeight={"light"} fontSize="12px">
                    Members
                  </Text>
                  <Flex gap={"10px"} justifyContent={"space-between"}>
                    <br />
                    <Box flexDirection={"column"} w="90%">
                      {" "}
                      {profile.map((el) => (
                        <Badge colorScheme="green">{el}</Badge>
                      ))}
                    </Box>
                    <Select
                      placeholder="Select Members"
                      width="20px"
                      border={"none"}
                      h="20px"
                      icon={<AddIcon />}
                      onChange={handleAccess}
                    >
                      <option value="Karan">
                        <Avatar
                          size="xs"
                          name="Dan Abrahmov"
                          src="https://bit.ly/dan-abramov"
                        />{" "}
                        Karan
                      </option>
                      <option value="Aryan">
                        <Avatar
                          size="xs"
                          name="Kola Tioluwani"
                          src="https://bit.ly/tioluwani-kolawole"
                        />
                        Aryan
                      </option>
                      <option value="Ankush">
                        <Avatar
                          size="xs"
                          name="Kent Dodds"
                          src="https://bit.ly/kent-c-dodds"
                        />
                        Ankush
                      </option>
                    </Select>
                  </Flex>
                </Box>
              </ModalBody>

              <ModalFooter>
                <Button
                  colorScheme="red"
                  variant={"outline"}
                  mr={3}
                  onClick={onClose}
                >
                  Cancle
                </Button>
                <Button onClick={onClose} colorScheme={"blue"}>
                  Update
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>

          <Button colorScheme="blue" variant="solid">
            <Icon as={AiOutlinePlus}> </Icon>
            <Link to={"newPlan"}>New Plan</Link>
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default Homepage;
