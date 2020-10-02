import React from 'react';


class Rank extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            entries: this.props.entries
        }
    }

    componentDidUpdate(prevProps){
        if(prevProps.entries !== this.props.entries){
            this.setState({entries: this.props.entries})
        }
    }


    resetRank = () => {
        if(this.props.entries < 1) return
        fetch('https://lit-sierra-14750.herokuapp.com/resetEntries',{
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: this.props.id
            })
          })
          .then(response => response.json())
          .then(count => {         
            this.setState({entries: count})

          })
          .catch(console.log)
    }



    render(){
        return(
            <div>
                <div className='white f3'> 
                    {`${this.props.name}, your current entry count is...`}
                </div>
                <div className='white f1'>
                    {this.state.entries}
                </div>
                {this.state.entries > 0 &&
                <input 
                    onClick={this.resetRank}
                    className="b ph3 pv2 input-reset ba br4 b--blue blue bg-transparent grow pointer f6 dib" 
                    type="submit" 
                    value="Reset"
                    />}
            </div>
        );
    }
}


export default Rank