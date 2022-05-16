import { Heading, InputGroup, InputLeftElement, NumberInput, NumberInputField, Button, Box, FormErrorMessage, FormControl, FormLabel, Input, InputLeftAddon} from '@chakra-ui/react'
import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

export default function Survey() {
	const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

	return (
		<div>
			<Box ml = {30} mr = {30}>
				<motion.div 
					transition = {{
						staggerChildren: 1.3,
					}}
				>
					<form onSubmit={handleSubmit(onSubmit)}>
						<motion.div
							initial={{ y: -100, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ type: "spring", stiffness: 25 }}
						>
							<Heading bgClip='text' bgGradient = "linear(to-tr, white, #53c9be)" textAlign={"center"} mt={10}>Let's Get Started</Heading>
						</motion.div>

						<FormControl mt = {10} isInvalid = {errors.income}>
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
						<Button mt = {5} bgColor = "teal" type = "submit">Submit</Button>
					</form>
				</motion.div>
			</Box>
			{watch("income")}
		</div>
	)
}
