import styles from '../styles/Home.module.css'
import { Heading, Button, Box, Tabs, TabList, Tab, Flex, VStack } from '@chakra-ui/react'
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const tabs = {
    "Progressive Tax": "progs",
    "Inflation": "inf",
    "Fiscal Policy": "",
    "Regressive Tax": "",
    "Proportional Tax": "",
    "Social Welfare Policies": "",
    "Poverty Line": ""
  }
  const [selected, setSelected] = useState("Progressive Tax");

  return (
    <Box>
      <Heading size="2xl" bgClip="text" bgGradient="linear(to-tr, white, #53c9be)" textAlign={"center"} mt={10}>Taxes Baby</Heading>

      <Box textAlign="center">
        <Link href="/survey">
          <Button
            size="md"
            mt={10}
            bgGradient="linear(to-tl,green.500,blue.500)"
            _hover={{
              bgGradient: "linear(to-tl,green.500,blue.500)",
            }}
            _active={{
              bgGradient: "linear(to-tl,greened.500,blue.500)",
            }}
          >
            Get Started
          </Button>
        </Link>
      </Box>

      <Flex m = {10}>
        <Box
          borderWidth="3px"
          borderRadius="lg"
          textAlign="center"
          p = {5}
        >
          <Heading size = "lg" mb = {5}>Key Terms</Heading>
          
          <VStack>
            {Object.keys(tabs).map(tab => (
              <Button 
                variant = {tab == selected ? "solid" : "outline"} 
                onClick = {() => {setSelected(tab)}} 
                w = "100%"
              >
                  {tab}
              </Button>
            ))}
          </VStack>
        </Box>
        <Box
          borderWidth="3px"
          borderRadius="lg"
        >
          {tabs[selected]}
        </Box>

      </Flex>
    </Box>
  )
}
