import React from "react";
import NewsSection from "../util/NewsSection";
import { useQuery } from "@tanstack/react-query";
import { fetchNews } from "../connection/http";
import Loading from "./Loading";
import Error from "./Error";
import SpecialLink from "../util/SpecialLink";

function Main() {
  const {
    data: otData,
    isError: otIsError,
    error: otError,
    isLoading: otIsLoading,
  } = useQuery({
    queryKey: ["news", { max: 3 }, { searchTerm: "Other" }],
    queryFn: ({ signal, queryKey }) =>
      fetchNews({ signal, ...queryKey[1], ...queryKey[2] }),
  });
  const {
    data: ecData,
    isError: ecIsError,
    error: ecError,
    isLoading: ecIsLoading,
  } = useQuery({
    queryKey: ["news", { max: 3 }, { searchTerm: "Economy" }],
    queryFn: ({ signal, queryKey }) =>
      fetchNews({ signal, ...queryKey[1], ...queryKey[2] }),
  });
  const {
    data: erData,
    isError: erIsError,
    error: erError,
    isLoading: erIsLoading,
  } = useQuery({
    queryKey: ["news", { max: 3 }, { searchTerm: "Earth" }],
    queryFn: ({ signal, queryKey }) =>
      fetchNews({ signal, ...queryKey[1], ...queryKey[2] }),
  });
  let contactErt;

  if (erIsLoading) {
    contactErt = <Loading />;
  }

  if (erIsError) {
    contactErt = (
      <Error
        title="An error occurred"
        message={erError.info?.message || "Please try again later"}
      />
    );
  }

  if (erData) {
    contactErt = (
      <>
        <div className="grid grid-cols-1  xl:grid-cols-3 md:max-xl:grid-cols-2">
          {erData.map((news) => (
            <NewsSection
              key={news.id}
              title={news.title}
              details={news.details}
              date={news.date}
              id={news.id}
              image={`http://localhost:3000/${news.image}`}
            />
          ))}
        </div>
      </>
    );
  }

  let contactEc;

  if (ecIsLoading) {
    contactEc = <Loading />;
  }

  if (ecIsError) {
    contactEc = (
      <Error
        title="An error occurred"
        message={ecError.info?.message || "Please try again later"}
      />
    );
  }

  if (ecData) {
    contactEc = (
      <>
        <div className="grid grid-cols-1  xl:grid-cols-3 md:max-xl:grid-cols-2">
          {ecData.map((news) => (
            <NewsSection
              key={news.id}
              title={news.title}
              details={news.details}
              date={news.date}
              id={news.id}
              image={`http://localhost:3000/${news.image}`}
            />
          ))}
        </div>
      </>
    );
  }

  let contactOt;

  if (otIsLoading) {
    contactOt = <Loading />;
  }

  if (otIsError) {
    contactOt = (
      <Error
        title="An error occurred"
        message={erError.info?.message || "Please try again later"}
      />
    );
  }

  if (otData) {
    contactOt = (
      <>
        <div className="grid grid-cols-1  xl:grid-cols-3 md:max-xl:grid-cols-2">
          {otData.map((news) => (
            <NewsSection
              key={news.id}
              title={news.title}
              details={news.details}
              date={news.date}
              id={news.id}
              image={`http://localhost:3000/${news.image}`}
            />
          ))}
        </div>
      </>
    );
  }
  return (
    <>
      <div className="container px-6 mx-auto lg:px-32">
        <div className="flex flex-col items-center">
          <SpecialLink path="/other" text="Other News" />
          {contactOt}
          <SpecialLink path="/economy" text="Economy" />
          {contactEc}
          <SpecialLink path="/earth" text="Earth" />
          {contactErt}
        </div>
      </div>
    </>
  );
}

export default Main;
