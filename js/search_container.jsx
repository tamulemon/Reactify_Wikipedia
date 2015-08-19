var React = require('react');

var SearchContainer = module.exports = React.createClass({
	render: function() {
		return (
			<form action="//www.wikipedia.org/search-redirect.php">
			<label>Search: </label>
				<input id="searchInput" name="search" type="search" size="20" autofocus="autofocus"  dir="auto" results="10"></input>
			<input class="formBtn" type="submit" value="→" name="go"></input>
			</form>
		)
	}
});