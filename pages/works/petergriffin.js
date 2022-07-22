import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    SimpleGrid
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
  
const Work = () => {
    return (
        <Layout title="Peter Griffin Task Tracker">
            <Container>
                <Title>
                    Peter Griffin Task Tracker <Badge>2021</Badge>
                </Title>
                <P>
                    A simple &quot;Family Guy&quot; themed to-do list application was developed using Java and JavaFX. You can set tasks with deadlines, timing specific events or simply to-dos to complete. This application is an individual course project which I undertook as part of the CS2103T module at NUS.
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
                        <Meta>Platform</Meta>
                        <span>Windows 10/11, macOS</span>
                    </ListItem>
                    <ListItem>
                        <Meta>GitHub</Meta>
                        <Link href="https://github.com/Timothyoung97/Peter-Griffin-Task-Tracker" isExternal>
                            Peter-Griffin-Task-Tracker{' '}<ExternalLinkIcon />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Release</Meta>
                        <Link href="https://github.com/Timothyoung97/Peter-Griffin-Task-Tracker/releases/tag/A-Release2" isExternal>
                            PeterGriffin v2.0{' '}<ExternalLinkIcon />
                        </Link>
                    </ListItem>
                </List>
                <WorkImage src="/images/works/CS2103T-ip_logo.png" alt="Peter Griffin Task Tracker" />
                <SimpleGrid columns={2} gap={1}>
                    <WorkImage src="/images/works/CS2103T-ip_01.png" alt="Peter Griffin Task Tracker 1" />
                    <WorkImage src="/images/works/CS2103T-ip_02.png" alt="Peter Griffin Task Tracker 2" />
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Work