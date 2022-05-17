import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Heading, InputGroup, InputLeftElement, NumberInput, NumberInputField, Button, Box, FormErrorMessage, FormControl, FormLabel, Input, InputLeftAddon, Flex} from '@chakra-ui/react'
import { Bar, Pie } from "react-chartjs-2";
import 'chart.js/auto';

export default function Survey() {
	const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

	const graphData = {
		labels: ["Take Home Pay", "Federal Income Tax", "FICA (Social Security & Medicare)"],
		datasets: [
			{
				label: "Money ($)",
				data: [watch("income") * 0.66, watch("income") * 0.33],
				borderWidth: 1,
				backgroundColor: [
					"rgba(255, 99, 132, 0.2)",
					"rgba(54, 162, 235, 0.2)",
					"rgba(255, 206, 86, 0.2)",
					"rgba(75, 192, 192, 0.2)",
					"rgba(153, 102, 255, 0.2)",
					"rgba(255, 159, 64, 0.2)",
				],
			},
		]
	}

	return (
		<div>
			<motion.div
				initial={{ y: -100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ type: "spring", stiffness: 25 }}
			>
				<Heading bgClip='text' bgGradient = "linear(to-tr, white, #53c9be)" textAlign={"center"} mt={10}>Let's Get Started</Heading>
			</motion.div>

			<Flex>
				<Box mt = {30} ml = {30} mr = {30} borderWidth="3px" borderRadius="lg" p= {5} w = "50%">
					<motion.div 
						transition = {{
							staggerChildren: 1.3,
						}}
					>
						<form onSubmit={handleSubmit(onSubmit)}>

							<FormControl mt = {5} isInvalid = {errors.income}>
								<motion.div
									initial={{ y: -100, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									transition={{ type: "spring", stiffness: 25 }}
								>
									<FormLabel>Annual Income ($)</FormLabel>
								</motion.div>
								
								<motion.div
									initial={{ x: -100, opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}
									transition={{ type: "spring", stiffness: 25 }}
								>
									<InputGroup>
										<InputLeftAddon children = "$"/>
										<NumberInput min={0} w = "100%">
											<NumberInputField borderLeftRadius={0} placeholder='Enter Income' {...register("income", {required: true})}/>
											</NumberInput>
									</InputGroup>
								</motion.div>
				
								<FormErrorMessage>{errors.income && <span>This field is required</span>}</FormErrorMessage>
							</FormControl>

							<br/>
							{/* <Button mt = {5} bgColor = "teal" type = "submit">Submit</Button> */}
						</form>
					</motion.div>
				</Box>
				<Box borderRadius="lg" borderWidth="3px" mt={30} ml={30} mr={30} p = {5} w = "50%">
						<Pie data = {graphData}/>
				</Box>
			</Flex>
			{watch("income")}
		</div>
	)
}
