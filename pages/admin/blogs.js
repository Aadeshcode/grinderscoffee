import React, { useEffect, useRef, useState } from "react";
import RichText from "../../components/RichText";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import { Button, useToast } from "@chakra-ui/react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { resetEditor } from "../../action/editorAction";
import { loadingEnd, loadingStart } from "../../action/globalAction";
const Blog = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const formikRef = useRef(null);
  const queryClient = useQueryClient();
  const router = useRouter();
  const slug = router.query.slug;
  const isEdit = Boolean(router.query.isEdit);
  const [input, setInput] = useState([
    {
      type: "paragraph",
      children: [
        {
          text: "",
        },
      ],
    },
  ]);
  const articleSchema = Yup.object().shape({
    topic: Yup.string()
      .min(0, "Too Short!")
      .max(100, "Too Long!")
      .required("Required"),
    category: Yup.string(),
  });
  const { data, isLoading, isError, error } = useQuery(`getArticles`, () =>
    axios.get(`${process.env.NEXT_PUBLIC_DOMAIN}/article`)
  );
  const { data: articleData } = useQuery(
    `${slug}`,
    () => axios.get(`${process.env.NEXT_PUBLIC_DOMAIN}/article/${slug}`),

    {
      onSuccess: (data) => {
        if (data?.data?.article) setInput(data?.data?.article);
      },
      onError: () => {},
      enabled: slug ? true : false,
      onSettled: () => {
        dispatch(loadingEnd());
      },
    }
  );

  const postMutation = useMutation(
    (formFields) =>
      axios.post(`${process.env.NEXT_PUBLIC_DOMAIN}/article`, formFields),
    {
      onError: (error) => {
        console.log(error?.response?.data?.error);
        toast({
          title: error?.response?.data?.error,
          status: "error",
          isClosable: true,
          duration: 5000,
          position: "top-right",
        });
      },
      onSuccess: (data, variables, context) => {
        toast({
          title: `Article Successfully Created`,
          status: "success",
          isClosable: true,
          duration: 5000,
          position: "top-right",
        });

        formikRef.current?.resetForm();
        queryClient.invalidateQueries("getArticles");
        dispatch(resetEditor());
      },
      onSettled: () => {
        dispatch(loadingEnd());
      },
    }
  );
  const editMutation = useMutation(
    (formFields) =>
      axios.patch(
        `${process.env.NEXT_PUBLIC_DOMAIN}/article/${slug}`,
        formFields
      ),
    {
      onError: (error) => {
        toast({
          title: error?.response?.data?.error,
          status: "error",
          isClosable: true,
          duration: 5000,
          position: "top-right",
        });
      },
      onSuccess: (data, variables, context) => {
        toast({
          title: `Article Successfully Edited`,
          status: "success",
          isClosable: true,
          duration: 5000,
          position: "top-right",
        });
        dispatch(loadingEnd());
        formikRef.current?.resetForm();
        router.push("/admin/blogs");
        queryClient.invalidateQueries(`getArticles`);
        dispatch(resetEditor());
      },
      onSettled: () => {
        dispatch(loadingEnd());
      },
    }
  );
  const deleteMutation = useMutation(
    (query) =>
      axios.delete(`${process.env.NEXT_PUBLIC_DOMAIN}/article/${query}`),
    {
      onError: (error) => {
        toast({
          title: error?.response?.data?.error,
          status: "error",
          isClosable: true,
          duration: 5000,
          position: "top-right",
        });
      },
      onSuccess: (data, variables, context) => {
        toast({
          title: `Article Successfully Deleted`,
          status: "success",
          isClosable: true,
          duration: 5000,
          position: "top-right",
        });
        formikRef.current?.resetForm();
        queryClient.invalidateQueries("getArticles");
        dispatch(resetEditor());
      },
      onSettled: () => {
        dispatch(loadingEnd());
      },
    }
  );
  const submitForm = (values) => {
    dispatch(loadingStart());
    if (isEdit) {
      editMutation.mutate(values);
      return;
    }
    postMutation.mutate(values);
  };
  const deleteHandler = (query) => {
    deleteMutation.mutate(query);
    dispatch(loadingStart());
  };
  const editHandler = (query) => {
    dispatch(loadingStart());
    router.push(`/admin/blogs?isEdit=true&slug=${query}`);
  };

  return (
    <>
      <div className="page-left p-5">
        <h1 className="display-6 font-caps">
          {isEdit ? "Edit Article" : "Create Article"}
        </h1>
        <Formik
          enableReinitialize
          innerRef={formikRef}
          initialValues={
            isEdit
              ? {
                  topic: articleData?.data?.topic,
                  category: articleData?.data?.category,
                }
              : {
                  topic: "",
                  category: "",
                }
          }
          validationSchema={articleSchema}
          onSubmit={(values) => {
            values.article = input;
            submitForm(values);
          }}
        >
          {({ values, errors, touched }) => (
            <Form>
              <label className="mt-3 font-caps">Topic Title</label>
              <Field
                type="text"
                id="topic"
                name="topic"
                placeHolder="Enter Blog Title"
              />
              {errors.topic && touched.topic ? (
                <small className="text-danger ml-2">{errors.topic}</small>
              ) : null}
              <RichText
                value={input}
                setValue={setInput}
                showImage={true}
                placeHolder="Enter Content Here"
              />
              <Button
                colorScheme="teal"
                variant="solid"
                type="submit"
                className="btn btn-primary mt-3 p-3"
              >
                {isEdit ? "Edit Article" : "Create Article"}
              </Button>
            </Form>
          )}
        </Formik>
      </div>
      <div
        className="page-right p-5"
        // style={{ height: "90vh" }}
      >
        <h1
          className="display-6 font-caps"
          style={{ textDecoration: "underline" }}
        >
          Blogs so far
        </h1>
        {data?.data.map((blog) => (
          <div key={blog._id}>
            <Link href={`/blogs/${blog.slug}`} className="pointer">
              <div>
                <h2 className="py-3" style={{ fontSize: "1.5rem" }}>
                  {blog.topic}
                </h2>
              </div>
            </Link>
            <button
              className="btn btn-outline-warning mx-2"
              onClick={() => editHandler(blog.slug)}
            >
              Edit
            </button>
            <button
              className="btn btn-outline-danger"
              onClick={() => deleteHandler(blog.slug)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Blog;
