import NextLink from 'next/link'
import { Button, Container, Box, Icon, Heading, Image, Link, List, ListItem, Text, useColorModeValue } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import { BioSection, BioYear } from '../components/bio'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { IoLogoLinkedin, IoLogoGithub, IoMailOutline, IoLogoTwitter } from 'react-icons/io5'

const Page = () => {
    return (
        <Layout>
            <Container>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.100')} p={3} mb={6} align="center">
                    <Text>
                        Welcome and hello there
                        <span className="wave">
                            👋
                        </span>
                    </Text>
                    <Text>
                        I&apos;m a CS penultimate @ National University of Singapore (NUS)
                    </Text>
                </Box>
                <Box display={{md:'flex'}}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Timothy Yang
                        </Heading>
                        <p>C&apos;est la vie</p>
                    </Box>

                    <Box
                        flexShrink={0}
                        mt={{ base: 4, md: 0 }}
                        ml={{ md: 6 }}
                        textAlign="center"
                    >
                        <Image 
                            borderColor="whiteAlpha.800"
                            borderWidth={3}
                            borderStyle="solid"
                            w="150px"
                            h="150px"
                            display="inline-block"
                            borderRadius="full"
                            src="images/timothy_square.jpg"
                            alt="Profile Picture"
                        />
                    </Box>
                </Box>

                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        👨‍💻 About Me
                    </Heading>
                    <Paragraph>
                        Timothy Yang is a 3rd year undergraduate majoring in Computer Science at NUS. He is interested in the field of Computer Grahpics and Game Development. He enjoys creating softwares, games and spending time on his computer. Sometimes, he participates in hackathons to expose himself to new technologies and to learn new things. During his free time, he likes to play <Link href="https://www.cyberpunk.net/" target="_blank">Cyberpunk 2077</Link> and catch up on movies from the 90s.
                    </Paragraph>
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
                        📽️ Bio
                    </Heading>
                    <BioSection>
                        <BioYear>
                            2020 Jul
                        </BioYear>
                        Matriculated at National University of Singapore (NUS)
                    </BioSection>
                    <BioSection>
                        <BioYear>
                            2021 Nov
                        </BioYear>
                        Worked at <Link href="https://www.linkedin.com/company/augmentus-tech/" target="_blank">Augmentus</Link> as a Software Engineer Intern
                    </BioSection>
                    <BioSection>
                        <BioYear>
                            2022 Jan
                        </BioYear>
                        Volunteered at <Link href="https://www.linkedin.com/company/ethlas/" target="_blank">Ethlas Metaverse</Link> as a Game Developer
                    </BioSection>
                    <BioSection>
                        <BioYear>
                            2022 Jun
                        </BioYear>
                        Interned at <Link href="https://www.linkedin.com/company/huawei-singapore/" target="_blank">Huawei Singapore</Link> as a R&D Intern
                    </BioSection>
                    <BioSection>
                        <BioYear>
                            2023 Jun
                        </BioYear>
                        Now at <Link href="https://www.linkedin.com/company/jpmorganchase/" target="_blank">J.P.M Chase</Link> as a Summer Analyst (SWE)
                    </BioSection>
                </Section>

                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">  
                        🎮 My Interests
                    </Heading>
                    Game Development, Cycling, Running, Video Game, Movies

                </Section>

                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        🤝 Let&apos;s Connect
                    </Heading>
                    <List>
                        <ListItem>
                            <Link href="https://www.linkedin.com/in/shiyuan-yang97/" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={ <Icon as={ IoLogoLinkedin } />}>
                                    Timothy-Yang
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://github.com/Timothyoung97" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={ <Icon as={ IoLogoGithub } />}>
                                    Timothyoung97
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://twitter.com/timothyoung97" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={ <Icon as={ IoLogoTwitter } />}>
                                    Timothyoung97
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="mailto:timothyoung97@gmail.com" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={ <Icon as={ IoMailOutline } />}>
                                    Timothyoung97@gmail.com
                                </Button>
                            </Link>
                        </ListItem>
                    </List>
                </Section>

            </Container>
        </Layout>
    )
}

export default Page

// {' '}<Link href="https://www.google.com">Example</Link>