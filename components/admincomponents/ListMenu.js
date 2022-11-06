import { Center, useToast } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useDispatch } from "react-redux";
import { loadingEnd } from "../../action/globalAction";
import ProductList from "../ProductList";
const ListMenu = () => {
  const { data, isLoading, isError, error } = useQuery("getMenu", () =>
    axios.get(`${process.env.NEXT_PUBLIC_DOMAIN}/menu`)
  );
  const queryClient = useQueryClient();
  const toast = useToast();
  const dispatch = useDispatch();
  const deleteMutation = useMutation(
    async (query) => {
      const { data, error } = await axios.delete(
        `${process.env.NEXT_PUBLIC_DOMAIN}/menu?name=${query}`
      );
      console.log(error);
      return data;
    },
    {
      onError: (error) => {
        console.log(error);
        toast({
          title: error?.response?.data?.error,
          status: "error",
          isClosable: true,
          duration: 5000,
          position: "top-right",
        });
      },
      onSuccess: (data) => {
        queryClient.invalidateQueries("getMenu");
        toast({
          title: "Sucessfully Deleted",
          status: "success",
          isClosable: true,
          duration: 5000,
          position: "top-right",
        });
      },
      onSettled: (data) => {
        dispatch(loadingEnd());
      },
    }
  );

  if (data?.data && data?.data.length) {
    return (
      <div className="my-5 py-5 d-flex flex-wrap">
        {data.data.map((product) => (
          <div key={product.name}>
            <ProductList product={product} deleteMutation={deleteMutation} />
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div className="display-3 py-5 mt-5">
        <Center>No Data Found</Center>
      </div>
    );
  }
};

export default ListMenu;
