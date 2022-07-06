import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbGit from '../public/images/contents/git.png'

const Posts = () => (
    <Layout title="Posts">
        <Container>
            <Heading as="h3" fontSize={20} mb={3}>
                📃 Blog
            </Heading>
            <Section delay={0.1}>
                <SimpleGrid columns={[1,2,2]} gap={6}>
                    <GridItem 
                        title="Git Commands" 
                        thumbnail={ thumbGit } 
                        href="https://dev.to/timothyoung97/git-commands-3pkh"
                    />
                </SimpleGrid>
            </Section>
        </Container>
    </Layout>
)

export default Posts