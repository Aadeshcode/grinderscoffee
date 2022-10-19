import React from "react";
import {
  Box,
  Center,
  Text,
  Stack,
  List,
  ListItem,
  ListIcon,
  Button,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { CheckIcon } from "@chakra-ui/icons";
const ProductList = ({ product, deleteMutation }) => {
  const router = useRouter();
  const deleteCard = (e) => {
    e.stopPropagation();
    deleteMutation.mutate(product.name);
  };
  return (
    <>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          key="listmenu"
          className="my-5 mx-3"
          style={{
            border: "1px solid #ffddc0",
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >
          <Box
            maxW={"230px"}
            w={"full"}
            boxShadow={"1xl"}
            rounded={"md"}
            overflow={"hidden"}
            onClick={() =>
              router.push(`/admin/createmenu?edit=true&name=${product.name}`)
            }
          >
            <Stack textAlign={"center"} p={6} align={"center"}>
              <Text
                fontSize={"lg"}
                fontWeight={500}
                p={2}
                px={3}
                color={"green.500"}
                rounded={"full"}
              >
                {product.name}
              </Text>
              <Stack direction={"row"} align={"center"} justify={"center"}>
                <Text fontSize={"3xl"}>Rs.</Text>
                <Text fontSize={"6xl"} fontWeight={800}>
                  {product.price}
                </Text>
              </Stack>
            </Stack>

            <Box px={6} py={3} style={{ backgroundColor: "#f7fafc" }}>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={CheckIcon} color="green.400" />
                  {product.category}
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="green.400" />
                  {product.description}
                </ListItem>
              </List>

              <Button
                mt={10}
                w={"full"}
                bg={"red"}
                color={"white"}
                rounded={"xl"}
                boxShadow={"0 5px 20px 0px rgb(72 187 120 / 43%)"}
                _hover={{
                  bg: "green.500",
                }}
                _focus={{
                  bg: "green.500",
                }}
                onClick={(e) => deleteCard(e)}
              >
                Delete
              </Button>
            </Box>
          </Box>
        </motion.div>
      )}
    </>
  );
};

export default ProductList;
