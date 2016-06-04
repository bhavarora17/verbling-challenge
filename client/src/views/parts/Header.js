import React from 'react';

export default class Header extends React.Component {
    render(){
   	return(
   	    <header className="row ">
	        <div className="col-xs-12 ">
		    <h1 className="headerStyle">{this.props.title}</h1>
		</div>
	    </header>
	);
    }
}

Header.propTypes = {
    title: React.PropTypes.string.isRequired
};
