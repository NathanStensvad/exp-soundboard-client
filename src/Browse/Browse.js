import React, { Component } from 'react';
import SoundboardContext from '../SoundboardContext';
import Soundboard from '../Soundboard/Soundboard';
import config from '../config';

class Browse extends Component {
    static contextType = SoundboardContext

    state = {
        id: 0,
        name:'',
        user_id: 0,
        public: false,
        soundboardEntries: []
    }

    //fetches all the public soundboards
    componentDidMount() {
        fetch(config.API_ENDPOINT + '/api/soundboards', {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(res => {
            if (!res.ok) {
                return res.json().then(error => Promise.reject(error))
            }
            return res.json()
        })
        .then(responseData => {
            this.setState({
                id: responseData.id,
                name: responseData.name,
                user_id: responseData.user_id,
                public: responseData.public,
                soundboardEntries: responseData.soundboardEntries
            })
        })
    }

    render() {
        return (
            <>
                <section>
                    <h3>User Created Soundboards</h3>
                </section>
                {this.context.soundboards
                .filter(soundboard => soundboard.public === true)
                .map(soundboard => (
                    <Soundboard soundboard={soundboard} routeInfo={this.props.routeInfo} isBrowse={true} key={soundboard.id}/>
                ))}
            </>
        )
    }
}

export default Browse;