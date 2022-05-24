import {Container, Box, Heading} from '@chakra-ui/react'

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
                Hello, I&apos;m Timothy Yang, a computer science student at the University of Singapore.
            </Box>
            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Timothy Yang
                    </Heading>
                    
                    <p>Aspiring Software Developer</p>
                </Box>
            </Box>
        </Container>
    )
}

export default Page
