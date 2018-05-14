import React from 'react';
import Header from './Header';
import Content from './Content';

class App extends React.Component {
    render() {
        // return (
        //     <div>
        //         Hello World
        //     </div>
        // )
        return (
            <div>
                <Header />
                <Content />
            </div>
        )
    }
}

export default App;