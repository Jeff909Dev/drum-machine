import React, { Component, Fragment } from 'react';
import Display from './Display';
import DrumPad from './DrumPad';

class DrumMachine extends Component {

    render() {
        return (
            <Fragment>
                <div>
                    {/* <h1>DRUM MACHINE</h1> */}
                    <div id="drum-machine">
                        <Display />
                        <DrumPad />

                    </div>
                </div>
            </Fragment>
        )
    }
}

export default DrumMachine;