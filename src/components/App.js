import React from 'react';
import Counter from 'components/Counter';
import Controls from 'components/Controls';


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
