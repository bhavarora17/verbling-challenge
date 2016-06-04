import React from 'react';

var itemList=[];

export default class AddList extends React.Component {
    constructor(props) {
        super(props);
	this.closeAll = this.closeAll.bind(this);
	this.openAll = this.openAll.bind(this);
	this.add = this.add.bind(this);
	this.toggleHere = this.toggleHere.bind(this);
    }

/*Take Input and relay information*/
    add(){
        var item = prompt("Title: ", "");
	var description = prompt("Description: ", "");
	if ((item != "" && item!=null) && (description !="" && description!=null)) {  //if cancelled or not entered anything
	    this.props.onUpdate(item, description);
	}
	else{
	    alert("Title or Description Missing!!!!");
	}
    }

/*Toggle button*/	
    toggleHere(){
	this.props.toggle();
    }

/*Open ALl button*/	
    openAll(){
	this.props.openState();
    }

/*Close ALl button*/
    closeAll(){
	this.props.closeState();
    }

    render(){		
        return(
	    <div>
      	        <button onClick={this.openAll} className="btn openButton"> Expand All </button>
	        <button onClick={this.closeAll} className="btn closeButton"> Collapse All </button>
   	        <button onClick={this.toggleHere} className="btn toggleButton"> Toggle All</button>
 	        <button onClick={this.add} className="btn  addButton"> Add </button>			
	    </div>
	);
    }
}
