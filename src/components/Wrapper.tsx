import { Box } from "@chakra-ui/core"

export const Wrapper = ({children, bg}) => {
  return (
    <Box p={4} bg={bg} minHeight="100vh">
      {children}
    </Box>
  )
}