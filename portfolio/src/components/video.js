import React, {Component} from 'react';
import Lights from '../media/Bikers.mp4';

class Video extends Component {
 

    render () {
        return (
            <video id="background-video" loop muted autoPlay>
                <source src={Lights} type="video/mp4" />
                <source src={Lights} type="video/ogg" />
                Your browser does not support the video tag.
            </video>
        )
    }
};

export default Video;