import React from 'react'
import ReactPlayer from 'react-player'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faForward } from '@fortawesome/free-solid-svg-icons'
import { faBackward } from '@fortawesome/free-solid-svg-icons'
import { faPause } from '@fortawesome/free-solid-svg-icons'

const playy = <FontAwesomeIcon icon={faPlay} />
const forward= <FontAwesomeIcon icon={faForward} />
const backward= <FontAwesomeIcon icon={faBackward} />
const pause= <FontAwesomeIcon icon={faPause} />

export default function Function(props) {
    const [play, setPlay]=React.useState(true);
    function playVideo()
    {
        setPlay(!play);
    }
  return (
    <div>
        {/* <iframe id="player" type="text/html" width="640" height="390"
            src="http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&autoplay=1&playerapiid=player"
            frameBorder="0"></iframe> */}
        {/* <button onClick={playVideo}>Play</button> */}
        <ReactPlayer url={`https://www.youtube.com/watch?v=${props.embedId}`} playing={play} height={0} width={0} />
        <button id="backward" className="backward">{backward}</button>
        <button id="play" className="play" onClick={playVideo}>{play ? pause : playy}</button>
        {/* <button id="play" className="play" onClick={playVideo}>{playy}</button> */}
        <button id="forward" className="forward">{forward}</button>
    </div>
  )
}

