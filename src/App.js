import "./App.css"
import {useState} from "react";

function App() {
    const [humanName, setHumanName] = useState("")
    const [robotName, setRobotName] = useState("i dont know")

    const toLeet = (input) => {
        const dictionary = ["o", "i", "z", "e", "a", "s", "g", "t", "b", "j"] // uncomplete
        return input.split("").map(letter => {
                const index = dictionary.findIndex(item => item === letter.toLowerCase())
                if (index < 0) return letter
                else return index.toString()
            }
        ).join("")
    }

    const generateSomething = (input) => {
        const asciiSum = input.split("").reduce((acc, cur) => {
            return acc + cur.charCodeAt(0)
        }, 0)
        const a = String.fromCharCode(asciiSum % 150 + 50)
        const b = String.fromCharCode(asciiSum % 33 + 50)
        return a + b + asciiSum.toString()
    }

    const calculateRobotName = () => {
        if (humanName.length < 1) {
            setRobotName("enter human name")
            return
        }
        const partOne = toLeet(humanName)
        const partTwo = generateSomething(humanName)
        const result = partOne + "-2022-" + partTwo
        const rName = result.split("").map(letter => (new RegExp("\s")).test(letter) ? "" : letter).join("")
        setRobotName(rName)
        setHumanName("")
    }


    return (
        <div className="app">
            <div className="content-wrapper">
                <h1>Robots Game</h1>
                <h4>Enter your name and smash the Calculate Button to calculate your unique super secret robot name</h4>
                <input type="text" placeholder="Your name" value={humanName}
                       onChange={(e) => {
                           setHumanName(e.target.value)
                           setRobotName("")
                       }}/>
                <button onClick={calculateRobotName}>Calculate</button>
                <h1 className="output">
                    {robotName}
                </h1>
            </div>
        </div>
    );
}

export default App;
