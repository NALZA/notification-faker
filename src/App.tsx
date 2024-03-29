import { Box, Flex, Heading } from '@chakra-ui/react';
import NotificationForm from './Components/NotificationForm';

function App() {
  return (
    <Flex align={'center'} paddingTop={['5rem']} flexDir={'column'} gap="8">
      <Heading>Chakra UI</Heading>
      <NotificationForm />
    </Flex>
  );
}

export default App;
