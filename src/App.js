import React from 'react';
import { Facebook } from './Facebook';
import { Twitter } from './Twitter';


export default class App extends React.Component{
    render(){
        return(
            <div>
                <h1>Login with Facebook</h1>
                <Facebook />
                <Twitter />
            </div>
        )
    }
}
