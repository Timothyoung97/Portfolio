import {
    Container,
    Badge,
    Divider,
    Link,
    List,
    ListItem,
    SimpleGrid,
    Text,
    UnorderedList,
    AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta, MetaB } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="TuitiONE">
            <Container>
                <Title>
                    TuitiONE <Badge>2021</Badge>
                </Title>
                <P>
                    TuitiONE is a desktop app for managing contacts, optimized for use via a Command Line Interface (CLI) while still having the benefits of a Graphical User Interface (GUI). This application is a team-course project which I undertook as part of the CS2103T module at NUS.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Language</Meta>
                        <span>Java</span>
                    </ListItem>
                    <ListItem>
                        <Meta>GUI Library</Meta>
                        <span>JavaFX</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Build Tool</Meta>
                        <span>Gradle</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows 10/11, macOS</span>
                    </ListItem>
                    <ListItem>
                        <Meta>GitHub</Meta>
                        <Link href="https://github.com/AY2122S1-CS2103T-F13-4/tp" isExternal>
                            TuitiONE{' '}<ExternalLinkIcon />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Release</Meta>
                        <Link href="https://github.com/AY2122S1-CS2103T-F13-4/tp/releases/tag/v1.4" isExternal>
                            v1.4{' '}<ExternalLinkIcon />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Documentation</Meta>
                        <Link href="https://ay2122s1-cs2103t-f13-4.github.io/tp/" isExternal>
                            Devlog{' '}<ExternalLinkIcon />
                        </Link>
                    </ListItem>
                </List>
                <Divider my={6}/>
                <List ml={4} my={4}>
                    <ListItem>
                        <MetaB>Collaborator</MetaB>
                        <UnorderedList my={2} mx={6}>
                            <ListItem>
                                <Link href="https://www.linkedin.com/in/justin-ee-9a338b208/" isExternal>
                                Justin Ee{' '}<ExternalLinkIcon />
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href="https://www.linkedin.com/in/michael-lee-sheng-kiat/" isExternal>
                                Michael Lee{' '}<ExternalLinkIcon />
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href="https://www.linkedin.com/in/muhammadkhair-binabdulrashid/" isExternal>
                                Muhammad Khair{' '}<ExternalLinkIcon />
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href="https://www.linkedin.com/in/rickie-li/" isExternal>
                                Rickie Li{' '}<ExternalLinkIcon />
                                </Link>
                            </ListItem>
                        </UnorderedList>
                    </ListItem>
                </List>
                <Divider my={6}/>
                <WorkImage src="/images/works/CS2103T-tp_02.png" alt="TuitiONE"/>
                <WorkImage src="/images/works/CS2103T-tp_01.png" alt="TuitiONE"/>
            </Container>
        </Layout>
    )
}

export default Work