import React from 'react';

class searchBar extends React.Component {
    state = { term: ''};
onFormSubmit=event=>{
    event.preventDefault();
    this.props.onSubmit(this.state.term);
};
    
    render(){
        return (
        <div className="ui segment">
           <form onSubmit={this.onFormSubmit} className= "ui form">
           <div className="field"></div>
           <label>Image Search</label>
                    <input 
                    type="text" 
                    value={this.state.term} 
                    onChange={event => this.setState({term: event.target.value})} />
           </form>
        </div>
        )
    }
}

export default searchBar;