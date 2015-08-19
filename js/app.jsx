var React = require('react');

var Header = require('./header.jsx'),
		CentralFeatured = require('./central_features.jsx'),
		SearchContainer = require('./search_container.jsx');

var App = React.createClass({
	render: function() {
		return (
			<main>
				<Header />
				<CentralFeatured />
				<SearchContainer />
			</main> 
		)
	}
});
		
React.render(<App appName="wikipedia" />, document.body);		