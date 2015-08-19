var React = require('react');
var FeaturedLan = require('./featured_lan.jsx');

var CentralFeatureList = module.exports = React.createClass({
	getInitialState: function() {
		return {
			featuredLans: [
				{lan: 'English', des: 'The Free Encyclopedia', articles: '4 943 000 articles'}, 
				{lan: 'Español', des: 'La enciclopedia libre', articles: '1 193 000+ artículos'}, 
				{lan: 'Deutsch', des: 'Die freie Enzyklopädie', articles: '1 844 000+ Artikel'}, 
				{lan: '日本語', des: 'フリー百科事典', articles: '978 000+ 記事'}, 
				{lan: 'Русский', des: 'Свободная энциклопедия', articles: '1 245 000+ статей'}, 
				{lan: 'Français', des: 'L’encyclopédie libre', articles: '1 652 000+ articles'}, 
				{lan: 'Italiano', des: 'L’enciclopedia libera', articles: '1 217 000+ voci'}, 
				{lan: 'Polski', des: 'Wolna encyklopedia', articles: '1 128 000+ haseł'}, 
				{lan: 'Português', des: 'A enciclopédia livre', articles: '883 000+ artigos'}, 
				{lan: '中文', des: '自由的百科全書', articles: '836 000+ 條目'}
			]
		}
	}, 
	
	render: function() {
		var lanList = this.state.featuredLans.map(function(oneLan) {
			// skip the list 
			return <FeaturedLan lan={oneLan} />
		});
			
		return (
			<ul>
				{lanList}
			</ul>
		)
	}
});


