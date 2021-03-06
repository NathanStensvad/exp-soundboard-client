import React from 'react';
import ReactDOM from 'react-dom';
import Soundboard from './Soundboard';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom'

it('renders without crashing', () => {
    const div = document.createElement('div');

    const soundboard = {
        id: 2,
        name: "First Soundboard",
        user_id: 2
    }

    const testInfo = {
        match: {
            path: '/create'
        }
        
    }

    ReactDOM.render(<BrowserRouter><Soundboard routeInfo={testInfo} soundboard={soundboard}/></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
})