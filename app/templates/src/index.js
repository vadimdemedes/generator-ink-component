'use strict';

const {h, Text, Component} = require('ink');
const PropTypes = require('prop-types');

class <%= camelModuleName %> extends Component {
	render({name}) {
		return (
			<Text green>
				I love {name}
			</Text>
		);
	}
}

<%= camelModuleName %>.propTypes = {
	name: PropTypes.string
};

<%= camelModuleName %>.defaultProps = {
	name: 'Ink'
};

module.exports = <%= camelModuleName %>;
