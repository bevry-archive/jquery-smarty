/**
 * array_values function
 *
 * @subpackage Arrays
 * @author shogo < shogo4405 at gmail dot com >
 * @version 1.0.0
 * @see http://www.php.net/array_values
 * @param  {Object} o input
 * @return {Array}
 */
function array_values(o)
{
	var k, i = 0, a = [];
	for(k in o)
	{
		if(!o.hasOwnProperty(k)) continue;
		a[i++] = o[k];
	};
	return a;
};