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
        <Layout title="Doodle's Diary">
            <Container>
                <Title>
                    Doodle&apos;s Diary <Badge>2022 - Ongoing</Badge>
                </Title>
                <P>
                    Build Towers! Swing your sword! Challenge yourself and help Doodle defend his home castle away from the evil spirits! Doodle&apos;s Diary is a single-player 2.5D tower defence game developed while I was undertaking the module CS3247 Game Development. The project is co-deved by a team of 6 NUS students. The project will undergo further development during AY22/23 Sem 1 under CS4350 Game Development Project (Continuation of CS3247).
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
                        <Link href="https://jasonica.itch.io/doodlesdiarytd" isExternal>
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
                    <Link href="https://uvents.nus.edu.sg/event/20th-steps/module/CS3247/project/7" isExternal>
                        20th-STEPS{' '}<ExternalLinkIcon />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Project Level</Meta>
                    <Link href="https://www.instagram.com/p/CdNi1EvOYVJ/?utm_source=ig_web_copy_link" isExternal>
                        Ranked 2nd (CS3247 Cohort AY21/22 S2){' '}<ExternalLinkIcon />
                    </Link>
                </ListItem>
            </List>
            <Divider my={6}/>
            <List ml={4} my={4}>
                <ListItem>
                    <MetaB>Collaborator</MetaB>
                    <UnorderedList my={2} mx={6}>
                        <ListItem>
                            <Link href="https://www.linkedin.com/in/adamandrssn/" isExternal>
                                Adam Andersson {' '}<ExternalLinkIcon />
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://www.linkedin.com/in/tan-tze-xern-0328/" isExternal>
                                Tze Xern Tan{' '}<ExternalLinkIcon />
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
                <WorkImage src="/images/works/ddiary_01.png" alt="DDiary"/>
                <WorkImage src="/images/works/ddiary_02.png" alt="DDiary"/>
            </Container>
        </Layout>
    )
}

export default Work