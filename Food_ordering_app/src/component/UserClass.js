import React from "react";
class UserClass extends React.Component {

    constructor(prop){
        super(prop);

        this.state={
            count:1,
            count1:2,
        };
    }
    
    render(){
        const {count,count1}=this.state;
        return(
            <div className="user-card">
                <h1>Counts = {count}-{count1}</h1>
                <p>Name:{this.props.name} </p>
                <p>Address:Germany</p>
            </div>
        );
    }
}

export default UserClass;