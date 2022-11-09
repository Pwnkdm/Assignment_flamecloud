import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Icon,
  Text,
} from "@chakra-ui/react";
import React from "react";
import {
  MinusIcon,
  AddIcon,
  DragHandleIcon,
  DeleteIcon,
} from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { del } from "../Redux/action";

const Accordian = () => {
  const state = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  if (state.length === 0) return;
  console.log(state.point, "from accordian");

  const handledel = (x) => {
    dispatch(del(x));
  };
  return (
    <>
      <Box w={"70%"} margin="20px auto">
        <Accordion allowMultiple>
          {state &&
            state.plans &&
            state.plans.map((Plan, index) => (
              <AccordionItem key={index}>
                <h2>
                  <AccordionButton>
                    <DragHandleIcon />

                    <Box ml="10px" flex="1" textAlign="left">
                      {Plan}
                    </Box>
                    <DeleteIcon onClick={() => handledel(Plan)} />
                    <AccordionIcon ml={"20px"} />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  {/* nested Accordian  */}
                  {state.point &&
                    state.point.map((el, i) => (
                      <AccordionItem>
                        {({ isExpanded }) => (
                          <>
                            <h2>
                              <AccordionButton>
                                <Box flex="1" textAlign="left">
                                  <Text key={i}>{el}</Text>
                                </Box>
                                <DeleteIcon onClick={() => handledel(Plan)} />
                                {isExpanded ? (
                                  <MinusIcon fontSize="12px" />
                                ) : (
                                  <AddIcon fontSize="12px" />
                                )}
                              </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}></AccordionPanel>
                          </>
                        )}
                      </AccordionItem>
                    ))}{" "}
                  {/* buttons  */}
                  <Flex mt={"20px"} justifyContent={"flex-start"}>
                    <Button
                      onClick={() => navigate("point")}
                      colorScheme="blue"
                      variant="ghost"
                    >
                      <Icon as={AiOutlinePlus}> </Icon>
                      Add Pointer
                    </Button>

                    <Button colorScheme="blue" variant="ghost">
                      <Icon as={AiOutlinePlus}> </Icon>
                      On Hover
                    </Button>
                  </Flex>
                </AccordionPanel>
              </AccordionItem>
            ))}
        </Accordion>
      </Box>
    </>
  );
};

export default Accordian;
