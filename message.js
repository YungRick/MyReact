var Message = React.createClass({
	render: function() {
		return <h1>{this.props.message}!</h1>
	}
})

ReactDOM.render(
<Message message="Wassup" />,
 document.getElementById('root'));
	
	
	
	

