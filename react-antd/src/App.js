import React, { Component } from 'react';
import {
    DatePicker,
    Button
} from 'antd'
import './App.css';

class App extends Component {
render() {
    return (
        <div className="App">
            <DatePicker />
            <Button type="primary">Primary</Button>
        </div>
    );
}
}

export default App;
