import React from 'react';

var resultArr=[];
var queryText;
var that;

export default class Search extends React.Component {    
        	
    constructor(props) {
        super(props);
        this.state = {
    	    queryText: ''
    	};
    	
        this.handleChange = this.handleChange.bind(this);
    }
    
    componentDidMount(){
        that=this;
    }
    
/*handle the search bar*/
    handleChange(){
    	queryText= this.refs.queryInput.value    	
        this.props.resetResultAndLength(queryText.length);
        if(queryText.length != 0){
	    this.props.itemList.forEach(function(itemInd){
                if(itemInd.title.toLowerCase().indexOf(queryText)!=-1 || itemInd.description.toLowerCase().indexOf(queryText)!=-1)
                    that.props.updateResult(itemInd);
            });
	}
    }
    
    render(){

        return (
    	    <div>
    		<input
    		    type="text" 
    		    placeholder="&#xf002; Enter Search Text" 
    		    value={this.props.queryText}
    		    ref="queryInput"
    		    onChange={this.handleChange}
    		    className="searchBar"
		    type="text"
     	        >
     		</input>
    	    </div>
    	);
    }
}
