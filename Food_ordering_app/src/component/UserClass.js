import React from "react";
import UserContext from "../Utils/UserContext";
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
                <button onClick={()=>{
                    this.setState({
                        count: this.state.count+1,
                        count1: this.state.count1 + 2,
                    });
                }}>Count Btn</button>
                <div>
                    <UserContext.Consumer>
                        {({loggedInUser})=><h1 className="">{loggedInUser}</h1>}
                    </UserContext.Consumer>
                </div>
                <p>Name:{this.props.name} </p>
                <p>Address:Germany</p>
            </div>
        );
    }
}

export default UserClass;