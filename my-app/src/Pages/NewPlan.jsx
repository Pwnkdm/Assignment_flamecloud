import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPlan } from "../Redux/action";

const NewPlan = () => {
  const [Name, setName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAdd = () => {
    dispatch(addPlan(Name));
    navigate("home");
  };
  return (
    <Box
      w={"500px"}
      margin="auto"
      padding={"10px"}
      boxShadow=" rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
    >
      <Text textAlign={"left"} fontSize="16" fontWeight={"bold"}>
        Plan Name
      </Text>
      <Text textAlign={"left"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor.
        Sit amet, consectetur adipiscing consectetur adipiscing elit.
      </Text>
      <br />
      <Box
        textAlign={"left"}
        border={"1px solid grey"}
        w="90%"
        padding={"2px"}
        margin={"auto"}
      >
        <Text fontWeight={"bold"} fontSize="10px">
          NAME
        </Text>
        <Input
          placeholder="Type here..."
          onChange={(e) => setName(e.target.value)}
          variant="unstyled"
          size="sm"
        />
      </Box>

      {/* Buttons  */}
      <Flex
        textAlign={"left"}
        w="90%"
        padding={"2px"}
        justifyContent="flex-end"
        margin={"30px auto"}
        gap="10px"
      >
        <Button
          w={"150px"}
          variant="outline"
          colorScheme={"red"}
          onClick={() => navigate("Homepage")}
        >
          Cancel
        </Button>
        <Button onClick={handleAdd} w={"150px"} colorScheme={"blue"}>
          Create
        </Button>
      </Flex>
    </Box>
  );
};

export default NewPlan;
