import "./App.css"

function App() {
    return (
        <div className="app">
            <div className="content-wrapper">
                <h1>Robots Game</h1>
                <h4>Enter your name and smash the Enter to calculate your super secret robot name</h4>
                <input type="text" placeholder="Your name"/>
                <div className="output">
                    output here
                </div>
            </div>
        </div>
    );
}

export default App;
