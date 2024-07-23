import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchHaber } from "../connection/http";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Footer from "../components/Footer";

function NewsDetailPage() {
  const params = useParams();

  const { data, isError, error, isLoading } = useQuery({
    queryKey: ["news-id", { id: params.id }],
    queryFn: ({ signal, queryKey }) => fetchHaber({ signal, ...queryKey[1] }),
  });

  let contact;

  if (isLoading) {
    contact = <Loading />;
  }

  if (isError) {
    contact = (
      <Error
        title="An error occurred"
        message={error.info?.message || "Please try again later"}
      />
    );
  }

  if (data) {
    contact = (
      <>
        <div className="flex flex-col items-center text-center lg:text-left lg:items-start px-7 py-5 space-y-12">
          <img
            className="w-full xl:w-[70%] object-cover rounded"
            src={`http://localhost:3000/${data.image}`}
            alt=""
          />
          <p className="flex flex-col space-y-2">
            <p className="text-sm font-semibold ">{data.date}</p>
            <h1 className="text-3xl lg:text-4xl font-bold ">{data.title}</h1>
          </p>
          <p>
            {data.description} Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quisquam incidunt illum, accusamus quod iusto sit
            voluptatem dolor voluptas dolores, facilis, suscipit quis beatae
            enim dignissimos fuga! Sed unde modi laudantium doloremque id labore
            rerum nam? Modi, sit ex! Provident sunt dicta dolorum consequatur!
            Suscipit dolorem dicta natus excepturi sint voluptatem.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
            consectetur iure blanditiis error, aut reiciendis laborum voluptatem
            quaerat dolore deserunt cum sunt facilis voluptas sed
            exercitationem! Aliquam vel minima eveniet cupiditate nihil odit
            explicabo dolore ut deserunt veniam sapiente esse ex corrupti
            voluptatem doloribus repellat non nisi, recusandae rerum magnam
            corporis, magni obcaecati facilis. Animi impedit debitis soluta
            architecto explicabo.
          </p>
        </div>
      </>
    );
    return (
      <>
        <section>
          <div className="container flex  mx-auto lg:px-32 px-6 py-8 ">
            {contact}
          </div>
        </section>
        <Footer />
      </>
    );
  }
}
export default NewsDetailPage;
