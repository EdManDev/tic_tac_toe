import React, { Component } from "react";
import "./Game.css";

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      header: "status"
    };
  }
  render() {
    const router = useRouter();
    return (
      <div>
        <p>Post id: {router.query.id}</p>
        <div className="status">{this.state.header}</div>
        <div className="board-row">0 1 2</div>
        <div className="board-row">3 4 5</div>
        <div className="board-row">6 7 8</div>
      </div>
    );
  }
}

export default Game;

// ================================================================================

// class Square extends React.Component {
//   render() {
//     return <button className="square">{/* TODO */}</button>;
//   }
// }

// class Board extends React.Component {
//   renderSquare(i) {
//     return <Square />;
//   }

//   render() {
//     const status = "Next player: X";

//     return (
//       <div>
//         <div className="status">{status}</div>
//         <div className="board-row">
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}
//           {this.renderSquare(5)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(6)}
//           {this.renderSquare(7)}
//           {this.renderSquare(8)}
//         </div>
//       </div>
//     );
//   }
// }

// class Game extends React.Component {
//   render() {
//     return (
//       <div className="game">
//         <div className="game-board">
//           <Board />
//         </div>
//         <div className="game-info">
//           <div>{/* status */}</div>
//           <ol>{/* TODO */}</ol>
//         </div>
//       </div>
//     );
//   }
// }

// export default Game;

// // ========================================

// // ReactDOM.render(<Game />, document.getElementById("root"));
