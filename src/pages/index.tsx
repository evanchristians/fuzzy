import { Wrapper } from "../components/Wrapper";
import { Input, Box } from "@chakra-ui/core";
import React, { useEffect } from "react";
import fetchData from "../lib/fetchData";
import useSWR from "swr";
import { useRouter } from "next/router";

const Index = ({ data: initialData, query: initialQuery }) => {
  const router = useRouter();
  const [query, setQuery] = React.useState(initialQuery.query ?? "");
  let { data, mutate } = useSWR("/api/dummy", fetchData, initialData);
  useEffect(() => {
    let filteredData = [];
    console.log(initialQuery.query);
    initialData.filter((d) => {
      if (query.length > 0 && d.title.includes(query) === true) {
        console.log(d.title.includes(query));
        return filteredData.push({
          ...d,
          title: d.title.replace(query, query.bold()),
        });
      }
      if (!query && filteredData.length === 0)
        return (filteredData = initialData);
    });
    mutate(filteredData, false);
    router.push("?query=" + query);
  }, [query]);

  return (
    <Wrapper bg="#282C34">
      <Input
        bg="black"
        borderColor="grey"
        placeholder="search"
        color="white"
        onChange={async (event) => {
          const value = event.target.value;
          setQuery(value);
        }}
      />
      {data && data.length > 0 ? (
        data.map((item) => (
          <Box
            mt={2}
            py={3}
            px={6}
            bg="#21252B"
            color="white"
            borderRadius={8}
            key={item.id}
            dangerouslySetInnerHTML={{ __html: item.title }}
          ></Box>
        ))
      ) : (
        <Box mt={2} py={3} px={6} bg="#21252B" color="white" borderRadius={8}>
          No results
        </Box>
      )}
    </Wrapper>
  );
};

export const getServerSideProps = async ({ query }) => {
  const data = await fetchData("test");
  return { props: { data, query } };
};
export default Index;
