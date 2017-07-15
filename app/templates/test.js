import {h, renderToString, Text} from 'ink';
import test from 'ava';
import <%= camelModuleName %> from '.';

test('output', t => {
	const actual = renderToString(<<%= camelModuleName %>/>);
	const expected = renderToString(<Text green>I love Ink</Text>);

	t.is(actual, expected);
});
