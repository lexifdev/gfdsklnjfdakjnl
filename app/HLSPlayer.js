import React from 'react'
import HLS from 'hls.js'


const style = {
    maxWidth: '100%',
    maxHeight: '100%'
}

export default ({url, ...props}) => {
    const video = React.useRef(null)

    React.useEffect(() => {
        const hls = new HLS()
        hls.loadSource(url)
        hls.attachMedia(video.current)
        hls.on(HLS.Events.MANIFEST_PARSED, () => {
            video.current.play()
        })

        return () => {
            hls.detachMedia()
        }
    }, [url])

    return <video ref={video} controls {...props} style={style} />
}
