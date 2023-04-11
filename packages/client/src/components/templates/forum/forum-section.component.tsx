import {
  CatalogTop,
  SectionRowMessagesCount,
  SectionRowLastMessage,
  Wrapper,
} from './forum.styles'
import { Navigate, useParams } from 'react-router-dom'
import {
  ForumSectionForm,
  ForumSectionTitle,
  ForumSectionTopics,
} from '@/components/organisms/forum'

import Container from '@/components/layouts/container/container.component'
import { H1 } from '@/global-styles'

export const ForumSection = () => {
  const { id } = useParams()

  // TODO: Поменять, демо
  if (id !== '1' && id !== '2') {
    return <Navigate to="/404" replace />
  }

  const demoData = {
    title: 'Сообщество',
    topics: [
      {
        id: '55',
        parentId: '1',
        title: 'Предложения по улучшению игры',
        postCount: 33,
        userId: 99,
        lastTopic: {
          id: '101',
          date: 1681213333000,
          title: 'Предложения по улучшению игры',
          userId: 99,
          userName: 'useruser',
        },
      },
      {
        id: '56',
        parentId: '1',
        title: 'Предложения по улучшению игры 22222',
        postCount: 44,
        userId: 99,
        lastTopic: {
          id: '101',
          date: 1682213533000,
          title: 'Предложения по улучшению игры',
          userId: 99,
          userName: 'useruser',
        },
      },
    ],
  }

  return (
    <Container>
      <Wrapper>
        <H1>ФОРУМ</H1>
        <ForumSectionTitle title={demoData.title} />
        <CatalogTop>
          <SectionRowMessagesCount>Сообщений</SectionRowMessagesCount>
          <SectionRowMessagesCount>Автор</SectionRowMessagesCount>
          <SectionRowLastMessage>Последнее сообщение</SectionRowLastMessage>
        </CatalogTop>
        <ForumSectionTopics data={demoData.topics} />
        <ForumSectionForm id={id} />
      </Wrapper>
    </Container>
  )
}
