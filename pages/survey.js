import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { slideDown, slideLeft, slideRight, stagger, fadeIn } from "../lib/animations";
import {
	Heading,
	InputGroup,
	NumberInput,
	NumberInputField,
	Box,
	FormErrorMessage,
	FormControl,
	FormLabel,
	InputLeftAddon,
	Flex,
	Select,
	Wrap,
	WrapItem
} from "@chakra-ui/react";
import brackets from "../lib/brackets";
import { Bar, Pie } from "react-chartjs-2";
import "chart.js/auto";

export default function Survey() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => console.log(data);
	const [rates, setRates] = useState([0, 0, 0, 0]);

	useEffect(() => {
		let status = watch("status");
		let income = parseInt(watch("income")) || 0;
		const bounds = Object.keys(brackets[status]);
		let tax = 0;

		for (let i = 0; i < bounds.length - 1; i++) {
			if (bounds[i + 1] >= income) {
				let taxable = income - bounds[i];

				tax += taxable * brackets[status][bounds[i]];
				break;
			} else {
				tax += (bounds[i + 1] - bounds[i]) * brackets[status][bounds[i]];
			}
		}
		if (income > bounds.at(-1)) {
			tax += (income - bounds.at(-1)) * brackets[status][bounds.at(-1)];
		}

		let ss = income * 0.062;
		let med = income * 0.0145;
		let takehome = income - med - ss - tax;

		setRates([takehome, tax, ss, med]);
	}, [watch("income"), watch("status")]);

	const graphData = {
		labels: [
			"Take Home Pay",
			"Federal Income Tax",
			"Social Security",
			"Medicare",
		],
		datasets: [
			{
				label: "Money ($)",
				data: rates,
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
		],
	};

	return (
		<div>
			<motion.div
				variants={stagger(0.5)}
				initial="initial"
				animate="animate"
				exit="exit"
			>
				<motion.div variants={slideDown}>
					<Heading
						bgClip="text"
						bgGradient="linear(to-tr, white, #53c9be)"
						textAlign={"center"}
						mt={10}
					>
						Federal Income Tax Calculator
					</Heading>
				</motion.div>

				<motion.div 
					initial = {{opacity: 0}}
					animate = {{opacity: 1}} 
					transition = {{
						duration: 0.5,
						type: "easeInOut"
					}}
					variants={stagger(0.25)}
				>
					<Flex flexWrap mr={30} ml={30} gap={30}>
						<Box
							mt={30}
							borderWidth="3px"
							borderRadius="lg"
							p={5}
							flex="1"
						>
							<form onSubmit={handleSubmit(onSubmit)}>
								<FormControl mt={5} mb={5} isInvalid={errors.income}>
									<motion.div variants={slideRight}>
										<FormLabel>Annual Income ($)</FormLabel>
									</motion.div>

									<motion.div variants={slideRight}>
										<InputGroup>
											<InputLeftAddon children="$" />
											<NumberInput min={0} w="100%">
												<NumberInputField
													borderLeftRadius={0}
													placeholder="Enter Income"
													{...register("income", { required: true })}
												/>
											</NumberInput>
										</InputGroup>
									</motion.div>

									<FormErrorMessage>
										{errors.income && <span>This field is required</span>}
									</FormErrorMessage>
								</FormControl>

								<FormControl>
									<motion.div variants={slideRight}>
										<FormLabel>Filing Status</FormLabel>
									</motion.div>
									<motion.div variants={slideRight}>
										<Select {...register("status")}>
											<option value="single">Single</option>
											<option value="married-joint">Married Jointly</option>
											<option value="married-separate">Married Separately</option>
											<option value="head">Head of Household</option>
										</Select>
									</motion.div>
								</FormControl>

								{/* <Button mt = {5} bgColor = "teal" type = "submit">Submit</Button> */}
							</form>
						</Box>
						<Box
							borderRadius="lg"
							borderWidth="3px"
							mt={30}
							p={5}
							flex="1"
						>
							<Pie data={graphData} />
						</Box>
					</Flex>
				</motion.div>
			</motion.div>
		</div>
	);
}
