import React, { useEffect } from "react";
import ezChatImage from '../ezChat.png';
import {
  Box,
  Container,
  TabList,
  TabPanels,
  Tab,
  Tabs,
  Text,
  TabPanel,
} from "@chakra-ui/react";
import Signup from "../components/Authentication/Signup";
import Login from "../components/Authentication/Login";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Homepage = () => {
  const history = useHistory();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);
  return (
    <Container maxW="2xl" centerContent>
      <Box
        display="flex"
        justifyContent="center"
        p={3}
        bg="none"
        w="100%"
        m="40px 0 15px 0"
      >
        <Text fontSize="4xl" fontFamily="Lucida Handwriting">
         <img src={ezChatImage} width={250} className="bg-none"/>
        </Text>
      </Box>

      <Box w="100%"  display="flex" justifyContent="space-evenly" gap="1rem">
         
            
          
          <Box bg="white" w="70%"  p={4} borderRadius="lg" borderWidth="1px">
            <Tabs isFitted variant="soft-rounded">
              <TabList mb="1em">
                <Tab>Login</Tab>
                <Tab>Sign Up</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Login />
                </TabPanel>
                <TabPanel>
                  <Signup />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
      </Box>
     
    </Container>
  );
};

export default Homepage;
