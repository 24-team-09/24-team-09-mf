import { useCallback, useState } from 'react'

import { MainView, Wrapper } from './game.styles'
import { GameView } from './game-view'
import { StartView } from '@/components/organisms/game/start-view'
import { EndView } from './end-view'
import { InformationView } from '@/components/organisms/game/information-view'
import { GameInformation } from '@/components/organisms/game/game-information'

export const GameComponent = () => {
  const [isShowInformation, setIsShowInformation] = useState(false)
  const [isGameStarted, setIsGameStarted] = useState(false)
  const [isGameEnded, setIsGameEnded] = useState(false)

  const handlerClickStartGame = useCallback(
    () => setIsGameStarted(prev => !prev),
    []
  )

  const handlerClickRestartGame = useCallback(
    () => setIsGameEnded(prev => !prev),
    []
  )

  const handlerClickShowInformation = useCallback(
    () => setIsShowInformation(prev => !prev),
    []
  )

  const handlerGameOver = useCallback(() => setIsGameEnded(true), [])

  return (
    <Wrapper>
      <MainView>
        <GameView
          isStartedGame={isGameStarted}
          isEndedGame={isGameEnded}
          onGameOver={handlerGameOver}
        />
        {isGameStarted && !isGameEnded && <GameInformation />}
        {!isGameStarted && !isGameEnded && (
          <StartView
            onClickStartGame={handlerClickStartGame}
            onClickInformation={handlerClickShowInformation}
          />
        )}
        {isShowInformation && (
          <InformationView onCloseInformation={handlerClickShowInformation} />
        )}
        {isGameEnded && <EndView onClickStartGame={handlerClickRestartGame} />}
      </MainView>
    </Wrapper>
  )
}
