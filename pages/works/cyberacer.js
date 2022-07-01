import {
    Container,
    Badge,
    Divider,
    Link,
    List,
    ListItem,
    SimpleGrid,
    Text,
    AspectRatio,
    UnorderedList
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta, MetaB } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
return (
    <Layout title="Cyberacer">
        <Container>
            <Title>
                Cyberacer <Badge>2021</Badge>
            </Title>
            <P>
                A pixelated arcade-style racing game developed during the summer break of AY2020/2021. This game is a single-player game where the player gets to choose their preferred car to race around and compete with challenging NPCs on 3 different custom-designed tracks.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Engine</Meta>
                    <span>Unity 3D Engine</span>
                </ListItem>
                <ListItem>
                    <Meta>Language</Meta>
                    <span>C#</span>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>
                        <Link href="https://drive.google.com/drive/folders/1r80cXKP16si9tXdl1X0eXbkcgrSTj3pZ?usp=sharing" isExternal>
                            Windows 10/11 <ExternalLinkIcon />
                        </Link>
                        {', '}
                        <Link href="https://drive.google.com/drive/folders/1h9-h0uh8UZ5bq90Gv3nQErLfIXctVdek?usp=sharing" isExternal> 
                            macOS {' '} <ExternalLinkIcon />
                        </Link>

                    </span>
                </ListItem>
                <ListItem>
                    <Meta>GitHub</Meta>
                    <Link href="https://github.com/Team-Aston-Martin-Henz/Cyberacer" isExternal>
                        Team-Aston-Martin-Henz: Cyberacer{' '}<ExternalLinkIcon />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Documentation</Meta>
                    <Link href="https://docs.google.com/document/d/1W_IndlNVo6aEFQ42cPw6e8EyzmfCK2zPy8nlv-93GL0/edit#" isExternal>
                        Devlog{' '}<ExternalLinkIcon />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Orbital Level</Meta>
                    <Link href="https://credentials.nus.edu.sg/66e8881b-fb0b-4304-ae79-77ef3ac0d8f9" isExternal>
                        Apollo 11{' '}<ExternalLinkIcon />
                    </Link>
                </ListItem>
            </List>
            <Divider my={6}/>
            <List ml={4} my={4}>
                <ListItem>
                    <MetaB>Collaborator</MetaB>
                    <UnorderedList my={2} mx={6}>
                        <ListItem>
                            <Link href="https://www.linkedin.com/in/david-eom/" isExternal>
                                Yan Xiao Zhi{' '}<ExternalLinkIcon />
                            </Link>
                        </ListItem>
                    </UnorderedList>
                </ListItem>
            </List>

            <Divider my={6}/>
            <WorkImage src="/images/works/cyberacer_logo.png" alt="cyberacerLogo"/>
            <WorkImage src="/images/works/cyberacer_01.png" alt="cyberacer"/>
            <WorkImage src="/images/works/cyberacer_02.png" alt="cyberacer"/>
        
        </Container>
    </Layout>
)
}

export default Work