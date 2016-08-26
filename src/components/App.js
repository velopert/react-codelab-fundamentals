import React from 'react';
import Counter from './Counter';
import Controls from './Controls';
class App extends React.Component {
    render(){

        return (
                <div>
                    <Counter/>
                    <Controls/>
                </div>
        );
    }
}

export default App;
