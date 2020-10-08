import { Wrapper } from "../components/Wrapper";
import { Input, Tag } from "@chakra-ui/core";
import React, { useEffect } from "react";
import fetchData from "../lib/fetchData";
import useSWR from "swr";
import { useRouter } from "next/router";
import Head from "next/head";

const Index = ({ data: initialData, query: initialQuery }) => {
  const router = useRouter();
  const [query, setQuery] = React.useState<string | undefined>(
    initialQuery.query ?? ""
  );
  let { data, mutate } = useSWR("/api/dummy", fetchData, initialData);
  useEffect(() => {
    let filteredData = [];
    initialData.filter((data) => {
      if (query.length > 0 && data.title.includes(query) === true) {
        return filteredData.push({
          ...data,
        });
      }
      if (!query && filteredData.length === 0)
        return (filteredData = initialData);
    });
    mutate(filteredData, false);
    router.push("?query=" + query);
  }, [query]);

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Mono:wght@500;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Wrapper>
        <Input
          fontSize={18}
          height={12}
          mb={4}
          variant={"flushed"}
          value={query}
          onChange={async (event) => {
            const value = event.target.value;
            setQuery(value);
          }}
        />
        {data && data.length > 0 ? (
          data.slice(0, 30).map((item) => {
            return (
              <Tag
                size="sm"
                mt={2}
                mr={2}
                variantColor={"blue"}
                borderRadius={4}
                key={item.id}
                whiteSpace="pre"
                dangerouslySetInnerHTML={{
                  __html:
                    query.length > 0
                      ? item.title.replace(
                          new RegExp(query, "gi"),
                          (match) => `<b>${match}</b>`
                        )
                      : item.title,
                }}
              ></Tag>
            );
          })
        ) : (
          <Tag size="sm" mt={2} mr={2} variantColor={"blue"} borderRadius={4}>
            no results
          </Tag>
        )}
      </Wrapper>
    </>
  );
};

export const getServerSideProps = async ({ query }) => {
  const data = await fetchData();
  return { props: { data, query } };
};
export default Index;
