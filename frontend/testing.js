import React,{Component} from 'react';
import axios from 'axios';
class App extends Component{
    constructor(probs){
        super(probs);
        this.state={
                FirstName:"",LastName:""}

        this.Fname=this.Fname.bind(this)
        this.Lname=this.Lname.bind(this)
        this.submitButton=this.submitButton.bind(this)
        
    }

    
Fname(e){
    this.setState({FirstName:e.target.value})
}
Lname(e){
    this.setState({LastName:e.target.value})
}
submitButton(e){
    axios.post('http://127.0.0.1:8000/test/',{FirstName:this.state.FirstName,LastName:this.state.LastName})


}
render(){
    return(
        <div>
            <form onSubmit={this.submitButton}>
        
            <label>
                First Name:
                <input type="text" name={this.state.FirstName} onChange={this.Fname}/>
            </label>
            <br></br>
            <br></br>
            <label>
                Last Name:
                <input type="text" name={this.state.LastName} onChange={this.Lname}/>
            </label>
            <br></br>
            <br></br>
            <button type="submit">submit</button>    
            
            
            </form>
        </div>
    )
}
}

export default App
