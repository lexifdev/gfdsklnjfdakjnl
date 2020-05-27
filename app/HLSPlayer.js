import React from 'react'
import HLS from 'hls.js'


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

    return <video ref={video} controls {...props} />
}
