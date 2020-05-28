import React from 'react'
import HLSPlayer from './HLSPlayer'


export default ({game, ...props}) => {
    const [streamInfo, setStreamInfo] = React.useState(null)

    React.useEffect(() => {
        const fetchStreamInfo = async () => {
            const streamInfoResponse = await fetch(`https://apis.naver.com/pcLive/livePlatform/sUrl?ch=${game['channelCode']}&q=5000&p=hls&cc=KR&env=pc`)
            const data = await streamInfoResponse.json()
            setStreamInfo(data)
        }
        fetchStreamInfo()
    }, [game])

    return (
        <div style={props.style}>
            {streamInfo && <HLSPlayer url={streamInfo['secUrl']} />}
        </div>
    )
}