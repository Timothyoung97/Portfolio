import { Container, Box, Heading, SimpleGrid, Divider } from "@chakra-ui/react"
import Section from "../components/Section"
import { WorkGridItem } from "../components/grid-item"
import Layout from "../components/layouts/article"

import thumbCyberacer from '../public/images/works/cyberacer.png'
import thumbPeterGriffin from '../public/images/works/CS2103T-ip.png'

const Works = () => {
    return (
        <Layout>
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Software
                </Heading>
                <SimpleGrid columns={[1,1,2]} gap={6}>
                    <Section>
                        <WorkGridItem id="cyberacer" title="Peter Griffin Task Tracker" thumbnail={thumbPeterGriffin}>
                        A simple to-do list application themed around my favourite cartoon character, Peter Griffin, from Family Guy
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="cyberacer" title="Cyberacer" thumbnail={thumbCyberacer}>
                            A pixelated racing game made with Unity.
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>

                <Heading as="h3" fontSize={20} mb={4}>
                    Game
                </Heading>
                <SimpleGrid columns={[1,1,2]} gap={6}>
                    <Section delay={0.1}>
                        <WorkGridItem id="cyberacer" title="Cyberacer" thumbnail={thumbCyberacer}>
                            A pixelated racing game made with Unity.
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>

                <Heading as="h3" fontSize={20} mb={4}>
                    Hackaton
                </Heading>
                <SimpleGrid columns={[1,1,2]} gap={6}>
                    <Section delay={0.2}>
                        <WorkGridItem id="cyberacer" title="Cyberacer" thumbnail={thumbCyberacer}>
                            A pixelated racing game made with Unity.
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>

                <Heading as="h3" fontSize={20} mb={4}>
                    Misc
                </Heading>
                <SimpleGrid columns={[1,1,2]} gap={6}>
                    <Section delay={0.3}>
                        <WorkGridItem id="cyberacer" title="Cyberacer" thumbnail={thumbCyberacer}>
                            A pixelated racing game made with Unity.
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>

            </Container>
        </Layout>
    )
}

export default Works