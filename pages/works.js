import { Container, Box, Heading, SimpleGrid, Divider } from "@chakra-ui/react"
import Section from "../components/Section"
import { WorkGridItem } from "../components/grid-item"
import thumbCyberacer from '../public/images/works/cyberacer.png'

const Works = () => {
    return (
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>

            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <WorkGridItem id="cyberacer" title="Cyberacer" thumbnail={thumbCyberacer}>
                        A pixelated racing game made with Unity.
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Works