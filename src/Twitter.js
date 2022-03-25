import React from "react";
import TwitterLogin from "react-twitter-login";

const authHandler = (err, data) => {
    console.log(err, data);
};
  
function Twitter(){
    return(
        <div>
            <p>Hello, I'm Twitter Button</p>
            <TwitterLogin
                authCallback={authHandler}
                consumerKey={"M7P4CtSWeRxbgT9LujzT7PE6h"}
                consumerSecret={"DXn9DWlkEKOI7uspXoyUrwaSpigqjFwTdi2hjyRapgHA8FQhLR"}
            />
        </div>
    );
}

export { Twitter }