import React from 'react'
import { useEffect, useRef } from 'react'

const VideoPlayer = (props) => {
    const {width, height } = props;
    const cloudinaryRef = useRef();
    const videoRef = useRef();
    useEffect(() => {
        if ( cloudinaryRef.current )return;
        cloudinaryRef.current = window.cloudinary;
        cloudinaryRef.current.videoPlayer( videoRef.current, {
            cloud_name: 'dw4lpeb7n'
        })

    }, []);
  return (
    <div><video
    ref={videoRef}
    data-cld-public-id="Videos/blueberries"
    width={width}
    height={height}
    controls/></div>
  )
}

export default VideoPlayer