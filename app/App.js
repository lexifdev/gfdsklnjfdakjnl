import React from 'react'
import FullScreen from './FullScreen'
import OverlayMenu from './OverlayMenu'
import GameList from './GameList'
import GamePlayer from './GamePlayer'


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