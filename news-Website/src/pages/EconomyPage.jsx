import React from "react";
import NewsSection from "../util/NewsSection";
import { useQuery } from "@tanstack/react-query";
import { fetchNews } from "../connection/http";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Footer from "../components/Footer";
import SpecialPageLink from "../util/SpecialPageLink";

function EconomyPage() {
  const { data, isError, error, isLoading } = useQuery({
    queryKey: ["news-Economy", { searchTerm: "Economy" }],
    queryFn: ({ signal, queryKey }) => fetchNews({ signal, ...queryKey[1] }),
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
        <div className="grid grid-cols-1 gap-2  xl:grid-cols-3 md:max-xl:grid-cols-2">
          {data.map((news) => (
            <NewsSection
              key={news.id}
              title={news.title}
              details={news.details}
              id={news.id}
              date={news.date}
              image={`https://project-qfmp.onrender.com/${news.image}`}
            />
          ))}
        </div>
      </>
    );
  }
  return (
    <>
      <div className="container px-6 mx-auto lg:px-32 mb-44">
        <div className="flex flex-col items-center">
          <SpecialPageLink title="Economy" />
          {contact}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default EconomyPage;
