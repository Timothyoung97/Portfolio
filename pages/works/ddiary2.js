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
        <Layout title="Doodle's Diary 2">
            <Container>
                <Title>
                    Doodle&apos;s Diary 2 <Badge>2022 Fall</Badge>
                </Title>
                <P>
                    Doodle&apos;s Diary 2 is the continuation of Doodle&apos;s Diary developed in the spring of 2022. This project aims to extend and polish on the core gameplay of its predecessor with new features and content such as storylines, enemies, towers, and more. The project is co-deved by a team of 6 NUS students during AY22/23 Sem 1 under CS4350 Game Development Project.
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
                    <Meta>Play</Meta>
                    <span>
                        <Link href="https://teamdoodles.itch.io/doodles-diary-2" isExternal>
                            itch.io <ExternalLinkIcon />
                        </Link>
                    </span>
                </ListItem>
                <ListItem>
                    <Meta>GitHub</Meta>
                    <Link href="https://github.com/CS3247-Game-Development-Team-6/Doodles" isExternal>
                    CS3247-Game-Development-Team-6: Doodles{' '}<ExternalLinkIcon />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Project Showcase</Meta>
                    <Link href="https://uvents.nus.edu.sg/event/21st-steps/module/CS4350/project/6" isExternal>
                        21th-STEPS{' '}<ExternalLinkIcon />
                    </Link>
                </ListItem>
            </List>
            <Divider my={6}/>
            <List ml={4} my={4}>
                <ListItem>
                    <MetaB>Collaborator</MetaB>
                    <UnorderedList my={2} mx={6}>
                        <ListItem>
                            <Link href="https://github.com/orgs/CS3247-Game-Development-Team-6/people/ChenHaobnds" isExternal>
                                Chen Hao {' '}<ExternalLinkIcon />
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://www.linkedin.com/in/ngddanh/" isExternal>
                                Nguyen Duc Danh{' '}<ExternalLinkIcon />
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://www.linkedin.com/in/wayne-tan-6b2799179/" isExternal>
                                Wayan Tan{' '}<ExternalLinkIcon />
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://www.linkedin.com/in/pei-xian-wong-85504a1b4/?originalSubdomain=sg" isExternal>
                                Wong Pei Xian{' '}<ExternalLinkIcon />
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://www.linkedin.com/in/yong-rui-tan/" isExternal>
                                Yong Rui Tan{' '}<ExternalLinkIcon />
                            </Link>
                        </ListItem>
                    </UnorderedList>
                </ListItem>
            </List>
            <Divider my={6}/>
                <WorkImage src="/images/works/ddiary2_01.jpg" alt="DDiary"/>
                <WorkImage src="/images/works/ddiary2_02.jpg" alt="DDiary"/>
            </Container>
        </Layout>
    )
}

export default Work