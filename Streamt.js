import {IconButton, ScrollView, View, VStack} from 'native-base';

import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Box,
  AspectRatio,
  Center,
  Image,HStack
} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Streamt = () => {
  return (
    <Box flex={1} backgroundColor={"black"} >
    <Box flexDirection={"row"} justifyContent={'space-between'}
     paddingLeft={"2"} paddingRight={'2'} margin={'2'}> 
    <Text color={"red.900"} fontWeight="bold" fontSize={"2xl"}>STREAMIT</Text>    
    <Icon name="account-plus" color="white" size={28} />
    </Box> 
    <Box marginTop={'2'}> <CustomeTabs />  </Box>
   
    <ScrollView style={{backgroundColor: 'black'}}>
      <View flex={1} paddingLeft={"2"} paddingRight={'2'}>
        <Box
          maxW="96"
          rounded="lg"
          overflow="hidden"
          
          >
          <Box>
            <AspectRatio w="100%" ratio={16 / 9}>
              <Image
                source={{
                  uri: 'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg',
                }}
                alt="image"
              />
            </AspectRatio>
            <Center
              bg="violet.500"
              _dark={{
                bg: 'violet.400',
              }}
              _text={{
                color: 'warmGray.50',
                fontWeight: '700',
                fontSize: 'xs',
              }}
              position="absolute"
              bottom="0"
              px="3"
              py="1.5">
              PHOTOS
            </Center>
          </Box>
          <Box flexDirection={"row"} justifyContent={"space-between"} marginLeft={'2'} marginRight={'2'}>
            <Text color={"white"} fontSize={"3xl"}>Sand Dust</Text>
            <Icon name='volume-mute' size={24} marginTop={'4'} color={"white"} />
          </Box>
          <Box  marginLeft={'2'} marginRight={'2'} flexDirection={"row"} justifyContent={"space-between"}>
            <Text fontSize={'xs'} color="gray.400">2hr:22min</Text>
          </Box>
        </Box>

<Box marginTop={"4"}>
    <Box flexDirection={"row"} justifyContent={"space-between"}>
        <Text color={"white"} fontSize="xl">Latest Movies</Text>
        <Icon name="arrow-right" color="white" size={20} />
    </Box>
    <ScrollView horizontal={true} flex={1} keyboardShouldPersistTaps="handled">
    <HStack space={4} >
          
          { [0,1,2,3,4,5,6,7].map((item, index)=><Item key={index} />)}
              
            
          </HStack>
    </ScrollView>

</Box>

<Box marginTop={"4"}>
    <Box flexDirection={"row"} justifyContent={"space-between"}>
        <Text color={"white"} fontSize="xl">Upcoming Movies</Text>
        <Icon name="arrow-right" color="white" size={20} />
   
    </Box>
    <ScrollView horizontal={true} flex={1} keyboardShouldPersistTaps="handled">
    <HStack space={4} >
          
          { [0,1,2,3,4,5,6,7].map((item, index)=><Item key={index} />)}
              
            
          </HStack>
    </ScrollView>

</Box>

<Box marginTop={"4"}>
    <Box flexDirection={"row"} justifyContent={"space-between"}>
        <Text color={"white"} fontSize="xl">Suggested For You</Text>
        <Icon name="arrow-right" color="white" size={20} />  
          </Box>
    <ScrollView horizontal={true} flex={1} keyboardShouldPersistTaps="handled">
    <HStack space={4} >
          
          { [0,1,2,3,4,5,6,7].map((item, index)=><Item key={index} />)}
              
            
          </HStack>
    </ScrollView>

</Box>

<Box marginTop={"4"}>
    <Box flexDirection={"row"} justifyContent={"space-between"}>
        <Text color={"white"} fontSize="xl">Recommeded For You</Text>
        <Icon name="arrow-right" color="white" size={20} />
    </Box>
    <ScrollView horizontal={true} flex={1} keyboardShouldPersistTaps="handled">
    <HStack space={4} >
          
          { [0,1,2,3,4,5,6,7].map((item, index)=><Item key={index} />)}
              
            
          </HStack>
    </ScrollView>

</Box>
       
      </View>
    </ScrollView> 
    </Box>
  
  );
};

const Item = () => {
  return (
    <Box maxW={'48'} >
      <AspectRatio w="100%" ratio={16 / 9} >
        <Image
        borderRadius={"lg"}
          source={{
            uri: 'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg',
          }}
          alt="image"
        />
      </AspectRatio>
      <Box flexDirection={"row"} justifyContent={"space-between"}>
        <Text color={"white"} fontSize={"md"}> title here</Text>
        <Text color={"white"} fontSize={"xs"}> 4.00 hrs</Text>
      </Box>
    </Box>
  );
};

const CustomeTabs=()=>{
    return <Box flexDirection={"row"} justifyContent={"space-evenly"}>
        <Text color={"red.900"} fontSize={'md'}>Home</Text>
        <Text color={"white"}>Movies</Text>
        <Text color={"white"}>TV Shows</Text>
        <Text color={"white"}>Vedios</Text>
    </Box>
}

export default Streamt;
