import { Box, Flex } from "@chakra-ui/core";

export const Wrapper = ({ children, bg }) => {
  return (
    <Flex
      p={12}
      bg={bg}
      minHeight="100vh"
      w="100%"
      justifyContent="center"
    >
      <Box maxWidth={1000} w="100%">
        {children}
      </Box>
    </Flex>
  );
};
