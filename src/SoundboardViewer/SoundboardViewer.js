import React, { Component } from 'react';
import SoundboardContext from '../SoundboardContext';
import Sound from '../Sound/Sound';

//This is for the Browse section. Will be for view only.
class SoundboardViewer extends Component {
    static contextType = SoundboardContext

    //This will duplicate a soundboard
    handleFork = e => {
        e.preventDefault()

        this.context.forkSoundboard(this.props.routeInfo.match.params.id)
        this.props.routeInfo.history.push('/create')
    }

    render() {
        return (
            <>
                <header>
                    <h1>{this.context.soundboards.find(soundboard => parseInt(this.props.routeInfo.match.params.id) === soundboard.id).name}</h1>
                </header>
                <section className="create-items">
                    <form>
                        <div>
                            <button onClick={this.handleFork}>Fork Soundboard</button>
                        </div>
                    </form>
                </section>
                {this.context.soundboardEntries
                    .filter(e => e.soundboard_id === parseInt(this.props.routeInfo.match.params.id))
                    .map((entry,index) => (
                <Sound routeInfo={this.props.routeInfo} entry={entry} index={index} key={index} isSoundboardEditor={false} onChange={this.updateField}/>
                ))}
            </>
        )
    }
}

export default SoundboardViewer;