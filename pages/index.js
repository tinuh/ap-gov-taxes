import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Heading } from '@chakra-ui/react'

export default function Home() {
  return (
    <div className={styles.container}>
      <Heading textAlign={"center"} mt = {10}>Taxes Baby</Heading>

    </div>
  )
}
