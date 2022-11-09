import React from "react";
class Tabuleiro extends React.Component{
    constructor(props);
        super(props);
        this.state = {
            tabu:[
                [0,1,0,1,0,1,0,1],
                [1,0,1,0,1,0,1,0],
                [0,1,0,1,0,1,0,1],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [2,0,2,0,2,0,2,0],
                [0,2,0,2,0,2,0,2],
                [2,0,2,0,2,0,2.0],
            ]
        }

    render(){
        let x = 0, y = 0;

        const rows= this.state.tabu.map(row) =>{
            const r = row.map((n) =>{
                return <Quadro x ={x} y={y++} />

            })

            y=0;
            x = x +1

        };
        return(
            <div
            className="tabuleiro">{rows}</div>
        )
    }
}

