import React from "react";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

const responseFacebook = (response) => {
    console.log("Login result",response);
}

function Facebook(){
    return(
        <div>
            <FacebookLogin
                appId="469241738264429"
                autoLoad
                callback={responseFacebook}
                render={renderProps => (
                <button onClick={renderProps.onClick}>Login with Facebook</button>
                )}
            />
        </div>
    );
}
export { Facebook }
