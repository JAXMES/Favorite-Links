import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        /*
            TODO - set initial state for link name and URL 

        */
       this.state ={
           name: "",
           URL: ""
       }

       this.handleChange = this.handleChange.bind(this);
       this.onFormSubmit = this.onFormSubmit.bind(this);
        
    }

    handleChange = event => {
        /*
            TODO - Logic for changing state based on form changes
        */

            this.setState({[event.target.name]: event.target.value,
                [event.target.URL]:  event.target.value})
           
    }

    onFormSubmit = (event) => {
        // to prevent page reload on form submit
        event.preventDefault();
        console.log(this.state)
        

        this.setState({name:'', URL:''})
        
        /*
            TODO - Logic for calling props to handle submission and setting state changes
        */

        this.props.onSubmit(this.state)

    }

    render() {

        return(
            <form>
                {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}

                <label>Name</label> 
                <input type = 'text' name = "name" onChange={this.handleChange} value={this.state.name}></input>
                <label>URL</label>
                <input type = 'url'  name = "URL" onChange={this.handleChange} value={this.state.URL}></input>
                {/* <input type="submit" value="Submit"></input> */}
                <button onClick = {this.onFormSubmit}> Submit</button>

            </form>
        )
    
    }
}

export default Form;
