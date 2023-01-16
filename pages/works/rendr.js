import {
    Container,
    Badge,
    Divider,
    Link,
    List,
    ListItem,
    UnorderedList
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta, MetaB } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Rendr">
            <Container>
                <Title>
                    Rendr <Badge>2022</Badge>
                </Title>
                <P>
                    Project Rendr is a customized report rendering project co-deved by 5 NUS CS undergraduates for GS ENGage 2021 (Goldman Sachs Engineering Engage). This is a hackathon-themed project aimed at fulfilling the problem statement: Customizable Report Rendering.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Frontend</Meta>
                        <span>React</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Backend</Meta>
                        <span>SpringBoot</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Database</Meta>
                        <span>MySQL</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Web Application</span>
                    </ListItem>
                    <ListItem>
                        <Meta>GitHub</Meta>
                        <Link href="https://github.com/MJKR-Tech/Rendr" isExternal>
                            Rendr{' '}<ExternalLinkIcon />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Project Showcase</Meta>
                        <Link href="https://docs.google.com/presentation/d/13k6wr31fsR4xNExFFMcE9Rqgp3h1to_72nQYM0BUPm4/edit?usp=sharing" isExternal>
                            Pitch Presentation{' '}<ExternalLinkIcon />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Achievement</Meta>
                        <Link href="https://drive.google.com/file/d/1neiQQb2DHKaDH2vCPNg2m1V8zgh7Nzl0/view?usp=sharing" isExternal>
                            1st - Category: Customizable Report Rendering{' '}<ExternalLinkIcon />
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
                <WorkImage src="/images/works/rendr_01.png" alt="RENDR"/>
                <WorkImage src="/images/works/rendr_02.png" alt="TuitiONE"/>
            </Container>
        </Layout>
    )
}

export default Work