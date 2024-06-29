import React from "react";

//function (not a class)
// arrow function
const Header = () => {
    return (
        <div className="ui fixed menu">
            <div className="ui container center">
                <img src="/logo.png" width="50" height="50"></img>
                <h2>Explorix AI</h2>
            </div>
        </div>
    );
};

export default Header;