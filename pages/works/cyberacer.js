import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    AspectRatio
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'

  const Work = () => {
    return (
        <Layout title="Cyberacer">
            <Container>
                <Title>
                    Cyberacer
                    <Badge>
                        2021
                    </Badge>
                </Title>
            </Container>
        </Layout>
    )
  }

  export default Work