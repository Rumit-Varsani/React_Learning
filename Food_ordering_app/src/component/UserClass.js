import React from "react";
class UserClass extends React.Component {

    constructor(prop){
        super(prop);
    }
    render(){
        return(
            <div className="user-card">
                <p>Name:{this.props.name} </p>
                <p>Address:Germany</p>
            </div>
        );
    }
}

export default UserClass;