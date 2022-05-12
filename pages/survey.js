import { Heading, InputGroup, InputLeftElement, Input, Button, Box} from '@chakra-ui/react'
import React, {useState} from 'react';
import { useForm } from 'react-hook-form';

export default function Survey() {
	const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

	return (
		<div>
			<Box ml = {30} mr = {30}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Heading textAlign={"center"} mt={10}>Let's Get Started</Heading>

					<InputGroup mt = {10}>
						<InputLeftElement
							pointerEvents='none'
							color='gray.300'
							fontSize='1.2em'
							children='$'
						/>
						<Input placeholder='Enter amount' {...register("income", {required: true, pattern: [0-9]})} />
					</InputGroup>
					{errors.income && <span>This field is required</span>}
					<br/>
					<Button mt = {5} bgColor = "teal" type = "submit">Submit</Button>
				</form>
			</Box>
			{watch("income")}
		</div>
	)
}
