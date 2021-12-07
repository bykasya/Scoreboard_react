{/*

 const title= 'My first React Element!';


const desc= 'I just leasrned how to create a React node and render it to the DOM';
   
const myTitleId='main-title';
const myName= 'Asya';

const header= (
    <header> 
        
         <h1 id={myTitleId}>{myName}'s First React Element!</h1>
        <p>{desc}</p>
    </header>
); 
*/}
const players = [
    {
        name: "Asya",
        score: 50,
        id: 1
    },
    {
        name: "John",
        score: 75,
        id: 2
    },
    {
        name: "Mary",
        score: 35,
        id: 3
    },
    {
        name: "Mike",
        score: 55,
        id: 4
    }
    
];

const Header=(props)=> {
    return (
        <header>
            <h1>{props.title}</h1>
            <span className="stats">Players: {props.totalPlayers} </span>
        </header>
    );
}
{/* arrow function expression to declare Component */}
const Player = (props)=>{
    return(
        <div className="player">
            <span className= "player-name">
                {props.name}
            </span>
            <Counter />
        </div>
    );
}

class Counter extends React.Component {

    constructor() {
        super()
        this.state ={
            score: 0
        };
    }

    incrementScrore=()=> {
        this.setState({
            score:  this.state.score+1
        });
    }

    decrementScrore=()=> {
        this.setState({
            score:  this.state.score-1
        });

    }


    render() {
        return (
            <div className= "counter">
                <button className= "counter-action decrement" onClick={this.decrementScrore}> - </button>
                <span className= "counter-score">{this.state.score} </span>
                <button className= "counter-action increment" onClick={this.incrementScrore}> + </button>
                {/*  onClick={this.incrementScrore.bind(this)}  */}
            </div>
        );
    }  
    
}

const App = (props) => {
    return (
        <div className="scoreboard">
            <Header 
               title= "Scoreboard"
               totalPlayers={props.initialPlayers.length} 
            />

            {props.initialPlayers.map( player =>
                <Player 
                    name= {player.name}
                    key= {player.id.toString()}
                />
            )}          
        </div>
    );
}

ReactDOM.render(
    <App  initialPlayers={players}/>,
    document.getElementById('root')
);