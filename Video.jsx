import React from 'react'
import ReactPlayer from 'react-player'
export default function Video(props) {
  return (
    <div>
        <ReactPlayer url={`https://www.youtube.com/watch?v=${props.id}`} />
    </div>
  )
}
