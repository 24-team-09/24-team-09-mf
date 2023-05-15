import { Link } from 'react-router-dom'
import { FC, useEffect } from 'react'
import { EndViewProps } from './end-view.types'
import { BtnText, Content } from '../game.styles'
import { BtnStart, Title, Score, Footer, Wrapper } from './end-view.styles'
import { useGameStore } from '@/store/gameStore'
import { useAppDispatch, userStore } from '@/store'
import { addLeaderboardItem } from '@/api/leaderboard'

export const EndView: FC<EndViewProps> = ({ onClickStartGame }) => {
  const { score, resetGame } = useGameStore()
  const { user } = userStore()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(
      addLeaderboardItem({
        score: score,
        name: user?.login,
        avatar: user?.avatar,
      }))
  }, [dispatch])

  const handlerStartGame = () => {
    resetGame()
    onClickStartGame()
  }

  return (
    <Wrapper>
      <Content>
        <Title>Game over</Title>
        <Score>SCORE: {score}</Score>
        <Footer>
          <Link to="/forum">
            <BtnText
              as="button"
              type="button"
              color="#fff"
              variant="text"
              disabled={false}>
              Forum
            </BtnText>
          </Link>
          <Link to="/statistics">
            <BtnText
              as="button"
              type="button"
              color="#fff"
              variant="text"
              disabled={false}>
              Leaderboard
            </BtnText>
          </Link>
          <BtnStart
            as="button"
            type="button"
            color="#fff"
            variant="contained"
            disabled={false}
            onClick={handlerStartGame}>
            Retry
          </BtnStart>
        </Footer>
      </Content>
    </Wrapper>
  )
}
