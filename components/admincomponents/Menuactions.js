import { Avatar, Badge, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import { IoCreateOutline } from "react-icons/io5";
import { BsCardList } from "react-icons/bs";
import { motion } from "framer-motion";
const MenuActions = () => {
  return (
    <motion.div className="container-fluid py-5 my-5">
      <div className="row flex-center" style={{ height: "100%" }}>
        <div className="py-5">
          <motion.div
            style={{
              border: "1px solid #E2E8F0",
              borderRadius: "12px",
              width: "80%",
              fontFamily: "regular !important",
            }}
            className="p-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            key="home-about234"
          >
            <Flex>
              <IoCreateOutline style={{ fontSize: "2rem" }} />
              <Box ml="3">
                <Link href="/admin/listmenu">
                  <a>
                    <Text fontWeight="bold">
                      List Menu Items
                      <Badge ml="1" colorScheme="green">
                        New
                      </Badge>
                    </Text>
                    <Text fontSize="sm">
                      View, Update and Delete Menu Items
                    </Text>
                  </a>
                </Link>
              </Box>
            </Flex>
          </motion.div>
          <motion.div
            style={{
              border: "1px solid #E2E8F0",
              borderRadius: "12px",
              width: "80%",
              fontFamily: "regular !important",
            }}
            className="p-2 my-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            key="home-about234548"
          >
            <Flex>
              <BsCardList style={{ fontSize: "2rem" }} />
              <Box ml="3">
                <Link href="/admin/createmenu">
                  <a>
                    <Text fontWeight="bold">
                      Create Menu Items
                      <Badge ml="1" colorScheme="green">
                        New
                      </Badge>
                    </Text>
                    <Text fontSize="sm">
                      View, Update and Delete Menu Items
                    </Text>
                  </a>
                </Link>
              </Box>
            </Flex>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default MenuActions;
