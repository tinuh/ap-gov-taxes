import styles from '../styles/Home.module.css'
import { Heading, Button, Box, Tabs, TabList, Tab, Flex, VStack, Text } from '@chakra-ui/react'
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const tabs = {
    "Progressive Tax": "A tax in which the tax rate increases as the taxable amount increases. The US Income tax uses a progessive rate.",
    "Inflation": "A general increase in prices and fall in the purchasing value of money.",
    "Fiscal Policy": "Use of government spending and tax policies to influence economic condition.",
    "Regressive Tax": "A tax in which the tax rate decreases as the taxable amount increases.",
    "Proportional Tax": "A tax in which the tax rate stays constant as the taxable amount increases.",
    "Social Welfare Policies": "Government's response to human needs such as food, housing, healthcare, employment, and other necessities.",
    "Poverty Line": "The minimum level of income deemed adequate in a particular country.",
    "Social Equality": "A state of affairs in which all individuals within a specific society have equal rights, liberties, and status."
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
          
        <Text ml = {10}>{tabs[selected]}</Text>

      </Flex>
    </Box>
  )
}
