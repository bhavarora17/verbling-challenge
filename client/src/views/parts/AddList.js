import React from 'react';
import ScrollArea from 'react-scrollbar';
   
export default class AddList extends React.Component {
    
    constructor(props) {
    	super(props);
    	this.handleItem = this.handleItem.bind(this);
    	this.addMemberRow = this.addMemberRow.bind(this);
    }

/*relay the item further*/
    handleItem(item){
	this.props.handleItemClick(item);
    }
    
/* Add to the table*/
    addMemberRow(item, i) {
//    var icon = item.expState? &#xf0a4; : &#xf0a7; ;
    	return(
    		<tr key={i} onClick={()=>this.handleItem(item)}>	
    			<td className="initHeight"> <i className="expandView" ><strong>TITLE : </strong> {item.title} </i> 
			     <i className={ item.expState? "displayNotHidden" : "displayHidden" }><strong>TITLE : </strong>{item.title}<br/> <strong>DESCRIPTION : </strong>{item.description}</i>
			</td>
			<td>
			    <i className={ item.expState? "iconTitleShow fa fa-hand-o-down" : "iconTitleShow fa fa-hand-o-right"}></i>
			    <i className={ item.expState? "iconShow fa fa-circle-o" : ""}></i>
			</td>
    		</tr>		
    	);
    }

    render(){
	return(
	    <div className="test1">
	        <form action="javascript:void(0)" >		    
		    <ScrollArea
            		speed={0.8}
            		className="fixedSizeClass"
            		contentClassName="content"
            		horizontal={false}			
            	    >
			<table className="table table-striped" id="myTable">
			    <tbody itemList>
				{this.props.result.length != 0 ?  (this.props.result.map(this.addMemberRow)) : (this.props.lengthQ==0 && this.props.itemList && this.props.itemList.map(this.addMemberRow))}
			    </tbody>
			</table>
          	    </ScrollArea>
		</form>
	    </div>				
	);
    }
}
