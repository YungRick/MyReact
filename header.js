var styles = {
  color: 'lightblue',
  background: 'white'
};

var Header = React.createClass({
	render: function() {
	 return (
	 <div className="header" style = {styles} >
			<h1> Ruokonen </h1>
		</div>
		)
	}
});

ReactDOM.render(
<Header />,
 document.getElementById('root'));
 
 var Message = React.createClass({
	render: function() {
		return <h1>{this.props.message}!</h1>
	}
})

ReactDOM.render(
<Message message="Wassup" />,
 document.getElementById('root'));
	
	
	
	
	