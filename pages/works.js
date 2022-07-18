import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react"
import Section from "../components/section"
import { GridItemExt, WorkGridItem } from "../components/grid-item"
import Layout from "../components/layouts/article"

import thumbCyberacer from '../public/images/works/cyberacer.png'
import thumbPeterGriffin from '../public/images/works/CS2103T-ip.png'
import thumbTuitione from '../public/images/works/CS2103T-tp.png'
import thumbDDiary from '../public/images/works/ddiary.png'
import thumbRendr from '../public/images/works/rendr.png'
import thumbVoxelBot from '../public/images/works/voxelBot.png'
import thumbPortfolio from '../public/images/works/portfolio.png'

const Works = () => {
    return (
        <Layout title="Works">
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    📱 Software
                </Heading>
                <SimpleGrid columns={[1,1,2]} gap={6}>
                    <Section>
                        <WorkGridItem id="petergriffin" title="Peter Griffin Task Tracker" thumbnail={thumbPeterGriffin}>
                            A simple to-do list application themed around my favourite cartoon characters, Brian Griffin and Peter Griffin, from Family Guy
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.1}>
                        <WorkGridItem id="tuitione" title="TuitiONE" thumbnail={thumbTuitione}>
                            An administrative desktop application targeted to help admin clerks in tuition centres to manage the enrolment of students and the scheduling of classes
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>

                <Section delay={0.2}>
                    <Divider my={6}/>
                    <Heading as="h3" fontSize={20} mb={4}>
                        🎮 Game
                    </Heading>
                </Section>

                <SimpleGrid columns={[1,1,2]} gap={6}>
                    <Section delay={0.3}>
                        <WorkGridItem id="cyberacer" title="Cyberacer" thumbnail={thumbCyberacer}>
                            A retro-style arcade racing game with pixelated graphics developed using C# and Unity 3D Engine
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.3}>
                        <WorkGridItem id="ddiary" title="Doodle's Diary" thumbnail={thumbDDiary}>
                            A cartoony 2.5D tower defence game developed using C# and Unity 3D Engine
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>

                <Section delay={0.4}>
                    <Divider my={6}/>
                    <Heading as="h3" fontSize={20} mb={4}>
                        ⌨️ Hackaton
                    </Heading>
                </Section>

                <SimpleGrid columns={[1,1,2]} gap={6}>
                    <Section delay={0.5}>
                        <WorkGridItem id="rendr" title="Rendr" thumbnail={thumbRendr}>
                            A customized report rendering project co-deved during GS ENGage 2021 (Goldman Sachs Engineering Engage)
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>

                <Section delay={0.6}>
                    <Divider my={6}/>
                    <Heading as="h3" fontSize={20} mb={4}>
                        ⚙️ Misc
                    </Heading>
                </Section>
                
                <SimpleGrid columns={[1,1,2]} gap={6}>
                    <Section delay={0.7}>
                        <GridItemExt title="Voxel Bot" thumbnail={thumbVoxelBot} href="https://skfb.ly/ovUsG">
                            A mini voxel robot model made using MagicaVoxel and rendered with Blender
                        </GridItemExt>
                    </Section>
                    <Section delay={0.7}>
                        <GridItemExt title="Portfolio" thumbnail={thumbPortfolio} href="https://github.com/Timothyoung97/Portfolio">
                            You&apos;re looking right at me! 
                        </GridItemExt>
                    </Section>
                </SimpleGrid>

            </Container>
        </Layout>
    )
}

export default Works