var React = require('react');

var FeaturedLan = module.exports = React.createClass({
	render: function() {
		return (
			<li>
				<h3>{this.props.lan.lan}</h3>
				<p>{this.props.lan.des}</p>
				<p>{this.props.lan.articles}</p>
			</li>
		)
	}
});