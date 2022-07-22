import Head from 'next/head'
import Navbar from '../navbar.js'
import dynamic from 'next/dynamic'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelRobotLoader from '../voxel-robot-loader'

const LazyVoxelRobot = dynamic(() => import('../voxel-robot'), {
    ssr: false,
    loading: () => <VoxelRobotLoader />
  })


const Main = ({ children, router}) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Timothy Yang - Homepage</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#000000" />
                <meta name="theme-color" content="#000000"></meta>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="container.md" pt={14}>
                <LazyVoxelRobot />
                {children}
                <Footer />
            </Container>
        </Box>
    )
}

export default Main