import React from 'react'
import { MediaPlayer } from 'dashjs'

const style = {
    maxWidth: '100%',
    maxHeight: '100%'
}

export default ({url, ...props}) => {
    const video = React.useRef(null)

    React.useEffect(() => {
        const player = MediaPlayer().create()
        player.initialize(video.current, url, true)

        return () => {
            player.destroy()
        }
    }, [url])

    return <video ref={video} controls {...props} style={style} />
}
