import Head from 'next/head'
import Navbar from '../navbar.js'
import dynamic from 'next/dynamic'
import { Box, Container } from '@chakra-ui/react'
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
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="container.md" pt={14}>
                <LazyVoxelRobot />
                {children}
            </Container>
        </Box>
    )
}

export default Main