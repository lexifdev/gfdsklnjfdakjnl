import React from 'react'
import FullScreen from 'components/FullScreen'
import OverlayMenu from 'components/OverlayMenu'
import GameList from 'components/GameList'
import GamePlayer from 'components/GamePlayer'


export default () => {
    const [game, setGame] = React.useState(null)

    return (
        <div>
            <OverlayMenu>
                <GameList onSelected={game => setGame(game)} />
            </OverlayMenu>
            <FullScreen>
                <GamePlayer game={game} />
            </FullScreen>
        </div>
    )
}