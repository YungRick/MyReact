var styles = {
  color: 'lightblue',
  background: 'white'
};

var Header = React.createClass({
	render: function() {
	<div className="header" style = {styles} >
			<h1> Ruokonen </h1>
		</div>
	}
});

ReactDOM.render(
<Header />,
 document.getElementById('root'));
	