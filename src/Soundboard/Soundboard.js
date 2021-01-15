import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SoundBoardContext from '../SoundboardContext'

//This function generates a JSON file that will be downloaded for the EXP Soundboard
function generateJSONFile(json) {
    const contents = JSON.stringify({ soundboardEntries: json });
    const fileBlob = new Blob([contents], { type: 'data:application/json' });
    return window.URL.createObjectURL(fileBlob);
}

class Soundboard extends Component {
    static contextType = SoundBoardContext;

    //This function will put together a certain soundboard for conversion to a JSON file for download
    handleDownload = e => {
        e.preventDefault()
        const download = this.context.soundboardEntries
            .filter(soundboard => soundboard.soundboard_id === this.props.soundboard.id)
            .map(
                ({ file, activationKeysNumbers }) => ({ file, activationKeysNumbers })
            )
        console.log(this.props.soundboard.name)
        console.log(download)

        const file = generateJSONFile(download)
        const name = this.props.soundboard.name;
        const a = document.createElement('a');
        a.href = file;
        a.download = `${name}.json`;
        a.click();
        a.remove();
    }

    render() {
        let routePath = this.props.routeInfo.match.path
        return (
            <>
                <section className="how" key={this.props.soundboard.id}>
                    <Link to={`${routePath}/${this.props.soundboard.id}`}><h3>{this.props.soundboard.name}</h3></Link>
                    <p>{this.context.soundboardEntries.filter(e => this.props.soundboard.id === e.soundboard_id).length} sounds</p>
                    <button onClick={this.handleDownload}>Download</button>
                </section>
            </>
        )
    }
}

export default Soundboard;