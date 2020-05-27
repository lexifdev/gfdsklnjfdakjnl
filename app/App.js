import React from 'react'
import GameList from './GameList'
import GamePlayer from './GamePlayer'


const styles = {
    list: {

    },
    player: {
        width: '600px',
        height: '400px'
    }
}


export default () => {
    const [game, setGame] = React.useState(null)

    return (
        <div>
            <GameList onSelected={game => setGame(game)} style={styles.list} />
            <GamePlayer game={game} style={styles.player} />
        </div>
    )
}