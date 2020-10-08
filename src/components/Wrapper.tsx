import { Box, Flex } from "@chakra-ui/core";

export const Wrapper = ({ children }) => {
  return (
    <Flex p={12} minHeight="100vh" w="100%" justifyContent="center">
      <Box maxWidth={1000} w="100%">
        {children}
      </Box>
    </Flex>
  );
};
