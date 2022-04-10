import React from 'react'
import MPDPlayer from 'components/MPDPlayer'


export default ({game}) => {
    const [streamInfo, setStreamInfo] = React.useState(null)

    React.useEffect(() => {
        const fetchStreamInfo = async () => {
            const gameId = game['gameId']
            const livesResponse = await fetch(`https://api-gw.sports.naver.com/schedule/games/${gameId}/lives`)
            const lives = await livesResponse.json()
            const liveId = lives.result.lives[0].liveId
            const mediaResponse = await fetch(`https://proxy-gateway.sports.naver.com/livecloud/lives/${liveId}/playback?countryCode=KR&devt=HTML5_PC&timeMachine=false&p2p=true&includeThumbnail=true&pollingStatus=true`)
            const media = await mediaResponse.json()
            const dash = media.media.find(m => m.protocol === 'DASH')
            setStreamInfo(dash)
        }
        fetchStreamInfo()
    }, [game])

    return (
        <div>
            {streamInfo && <MPDPlayer url={streamInfo['path']} />}
        </div>
    )
}
