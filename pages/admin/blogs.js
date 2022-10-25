import React, { useRef, useState } from "react";
import RichText from "../../components/RichText";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import { Button } from "@chakra-ui/react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import axios from "axios";

import Link from "next/link";
import { useDispatch } from "react-redux";
import { resetEditor } from "../../action/editorAction";
const Blog = () => {
  const dispatch = useDispatch();
  const formikRef = useRef(null);
  const queryClient = useQueryClient();
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

  const postMutation = useMutation(
    (formFields) =>
      axios.post(`${process.env.NEXT_PUBLIC_DOMAIN}/article`, formFields),
    {
      onError: (error) => {
        console.log(error.message);
      },
      onSuccess: (data, variables, context) => {
        formikRef.current?.resetForm();
        queryClient.invalidateQueries("getArticles");
        dispatch(resetEditor());
      },
    }
  );
  const submitForm = async (values) => {
    postMutation.mutate(values);
  };
  console.log(input);
  return (
    <>
      <div
        className="page-left p-5"
        // style={{ height: "90vh" }}
      >
        <Formik
          enableReinitialize
          innerRef={formikRef}
          initialValues={{
            topic: "",
            category: "",
          }}
          validationSchema={articleSchema}
          onSubmit={(values) => {
            values.article = input;
            submitForm(values);
          }}
        >
          {({ values, errors, touched }) => (
            <Form>
              <label className="mt-3">Topic Title</label>
              <Field type="text" id="topic" name="topic" />
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
                Create
              </Button>
            </Form>
          )}
        </Formik>
      </div>
      <div
        className="page-right p-5"
        // style={{ height: "90vh" }}
      >
        <h1 className="display-6" style={{ textDecoration: "underline" }}>
          Blogs so far
        </h1>
        {data?.data.map((blog) => (
          <Link href={`/blogs/${blog.slug}`} key={blog._id} className="pointer">
            <div>
              <h2 className="py-3" style={{ fontSize: "1.5rem" }}>
                {blog.topic}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Blog;
