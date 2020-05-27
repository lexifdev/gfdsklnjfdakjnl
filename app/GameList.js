import React from 'react'


const getLiveBoxList = async () => {
    const response = await fetch(`https://sports.news.naver.com/kbaseball/index.nhn`)
    const text = await response.text()
    const lines = text.split('\n')
    const target = lines.find(line => line.includes('"liveBoxList"'))

    if (!target) return []

    const raw = target.slice(17, -1)
    return JSON.parse(raw)
}


export default ({onSelected}) => {
    const [games, setGames] = React.useState([])

    React.useEffect(() => {
        const fetchGames = async () => {
            const data = await getLiveBoxList()
            setGames(data.filter(game => game.categoryId === 'kbo'))
        }
        fetchGames()
    }, [])

    return (
        <div>
            {games.length < 1 ?
                <div>지금은 진행중인 경기가 없어요</div> :
                games.map((game, i) => (
                        <div key={`game-${i}`} onClick={() => onSelected && onSelected(game)}>
                            {game.title}
                        </div>
                ))
            }
        </div>
    )
}
