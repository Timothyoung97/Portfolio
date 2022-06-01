import NextLink from 'next/link'
import { Button, Container, Box, Heading, Image, Link, useColorModeValue } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import Section from '../components/Section'
import Paragraph from '../components/Paragraph'

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                Hello, I&apos;m Timothy Yang, a computer science student at the University of Singapore.
            </Box>
            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Timothy Yang
                    </Heading>
                    <p>Aspiring Software Developer</p>
                </Box>

                <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    textAlign="center"
                >
                    <Image 
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        w="100px"
                        h="100px"
                        display="inline-block"
                        borderRadius="full"
                        src="images/timothy_square.jpg"
                        alt="Profile Picture"
                    />
                </Box>
            </Box>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>Tim love Fanny.</Paragraph>
                <Box align="center" my={4}>
                    <NextLink href="/works" passHref scroll={false}>
                        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                            My portfolio
                        </Button>
                    </NextLink>
                </Box>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>
                        1997
                    </BioYear>
                    Born in 
                </BioSection>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    My Interests
                </Heading>
                Game Development, 
                {' '}<Link href="https://www.google.com">Example</Link>
            </Section>

        </Container>
    )
}

export default Page
