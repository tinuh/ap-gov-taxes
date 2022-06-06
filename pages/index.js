import styles from '../styles/Home.module.css'
import { Heading, Button, Box, Tabs, TabList, Tab, Flex, VStack, Text } from '@chakra-ui/react'
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const tabs = {
    "Progressive Tax": "A tax in which the tax rate increases as the taxable amount increases.",
    "Inflation": "A general increase in prices and fall in the purchasing value of money.",
    "Fiscal Policy": "Use of government spending and tax policies to influence economic condition.",
    "Regressive Tax": "A tax in which the tax rate decreases as the taxable amount increases.",
    "Proportional Tax": "A tax in which the tax rate stays constant as the taxable amount increases.",
    "Social Welfare Policies": "Government's response to human needs such as food, housing, healthcare, employment, and other necessities.",
    "Poverty Line": "The minimum level of income deemed adequate in a particular country.",
    "Social Equality": "A state of affairs in which all individuals within a specific society have equal rights, liberties, and status."
  }

  const examples = {
    "Progressive Tax": "The US Income Tax is a progressive tax. The rate increase as the taxable amount increases.",
    "Inflation": "In 1980, for example, a movie ticket cost on average $2.89. By 2019, the average price of a movie ticket had risen to $9.16.",
    "Fiscal Policy": "The two major examples of expansionary fiscal policy are tax cuts and increased government spending. Both of these policies are intended to increase aggregate demand while contributing to deficits or drawing down budget surpluses.",
    "Regressive Tax": "The tax systems in Denmark, Sweden, and Norway follow the regressive tax model. The tax rate decreases as the taxable amount increases.",
    "Proportional Tax": "The tax system in Estonia uses to the protional tax model. The tax rate is constant for the taxable amounts.",
    "Social Welfare Policies": "Programs such as Medicaid, AFDC (Aid for families with dependent children), WIC (women, infants and children) programs, veteran programs and others.",
    "Poverty Line": "In 2020, in the United States, the poverty threshold for a single person under 65 was an annual income of US$12,760, or about $35 per day. The threshold for a family group of four, including two children, was US$26,200, about $72 per day.",
    "Social Equality": "There are laws and constitutional amendments that guarantee certain forms of social equality such as racial and gender equality."
  }

  const connections = {
    "Progressive Tax": "Progressive tax connects to the general topic of taxes because it is a specific model of a tax.",
    "Inflation": "Inflation connects to the general topic of taxes because as purchasing value of money decreases, people will start to gain more money, so taxes would be overall higher, since there is more money to be taxed.",
    "Fiscal Policy": "Fiscal policy connects to the general topic of taxes because it pertains to the government's use of tax policies in order to influence economic conditions, so taxes play a pretty big role in fiscal policy.",
    "Regressive Tax": "Regressive tax connects to the general topic of taxes because it is a specific model of a tax.",
    "Proportional Tax": "Proportional Tax connects to the general topic of taxes because it is a specific model of a tax.",
    "Social Welfare Policies": "Social welfare policies connect to the general topic of taxes because they are generally funded by taxes.",
    "Poverty Line": "Poverty line connects to the general topic of taxes because while the poverty line does not directly correlate with tax income brackets, it can lead to tax deductions and generally lower taxes for people living below the poverty line.",
    "Social Equality": "Social equality connects to the general topic of taxes because the taxes that a government imparts onto the public can affect social equality by taxing some more unfairly than others."
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
        
        <Box ml = {10}>
          <Heading size = "lg">Definition</Heading>
          <Text mb = {10}>{tabs[selected]}</Text>
          <Heading size = "lg">Example</Heading>
          <Text mb = {10}>{examples[selected]}</Text>
          <Heading size = "lg">Connection</Heading>
          <Text>{connections[selected]}</Text>
        </Box>

      </Flex>
    </Box>
  )
}
