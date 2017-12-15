import React from 'react';

export const Home = (props)=>{
    return(
        <div>
            <h2>Home component</h2>
            {props.match.params.id ? props.match.params.id : "No Params"}
        </div>    
    );
}