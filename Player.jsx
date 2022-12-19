import React from 'react'
import {Search} from "./Header"
import axios from 'axios';
import Function from './Function'
import YoutubeEmbed from "./YoutubeEmbed";
export default function Player() {
  var [youtubeID, setYouTubeId] = React.useState('5Eqb_-j3FDA')
  var [thumbnail, setThumbnail] = React.useState('https://img.youtube.com/vi/5Eqb_-j3FDA/mqdefault.jpg')

  return (
    <div>
        <Search.Consumer>
          
          {(song) => {
            console.log(song);
            console.log({youtubeID});
            const url =`https://www.googleapis.com/youtube/v3/search?q=${song}&key=AIzaSyBzga6qqPGR14-ThGvj09cKiPJCo0jg-r4&part=snippet`
            axios.get(url).then((response) => {
              console.log(response)
              setYouTubeId(response.data.items[0].id.videoId)
              setThumbnail(response.data.items[0].snippet.thumbnails.high.url)}).catch((error) => {console.log(error)});
            return (
              <div>
                {/* <Video id={youtubeID}/> */}
                {/* <YoutubeEmbed embedId={youtubeID}/> */}
                <img src={thumbnail} alt="thumbnail"/>
                <Function embedId={youtubeID}/>
              </div>
            );
          }}
        </Search.Consumer>
    </div>
  );
}


