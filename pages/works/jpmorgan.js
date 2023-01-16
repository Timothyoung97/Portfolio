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
        <Layout title="Power Path Girls">
            <Container>
                <Title>
                    Power Path Girls <Badge>2022</Badge>
                </Title>
                <P>
                    Power Path Girls is a hackathon project developed during the "Hack For Good 2022" Hackathon hosted by JPMorgan Chase & Co. The project aims to empower young female students to pursue a career in their desired field of study by providing them with a platform to learn more about the career.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Game Engine</Meta>
                        <span>Unity Engine</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Desktop Application</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Project Showcase</Meta>
                        <Link href="https://www.youtube.com/watch?v=K3g8wSQFwQ4" isExternal>
                            Demo{' '}<ExternalLinkIcon />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Project Presentation</Meta>
                        <Link href="https://docs.google.com/presentation/d/18Il_Kj9MmqDyml5naHdQDmgG6MsUWLm2pMj_xW4bgFc/edit?usp=sharing" isExternal>
                            Presentation Slide{' '}<ExternalLinkIcon />
                        </Link>
                    </ListItem>
                </List>
                <Divider my={6}/>
                <WorkImage src="/images/works/powerpathgirl.gif" alt="Power Path Girl"/>
                <WorkImage src="/images/works/powerpathgirl2.gif" alt="Power Path Girl"/>
            </Container>
        </Layout>
    )
}

export default Work