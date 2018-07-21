import React from 'react';
//using {video} instead of props, beacuse they have the same name
const VideosListItem= ({video, onVideoSelect}) =>{

    // const video= props.video;
    const imageUrl= video.snippet.thumbnails.default.url;
    return(
        <li onClick= {()=> onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl}/>
                </div>

                <div className="media-body">
                    <div className="media-heading">
                        {video.snippet.title}
                    </div>
                </div>
            </div>
        </li>
    );
};

export default VideosListItem;