/**
 * array_map function
 *
 * @subpackage Arrays
 * @author shogo < shogo4405 at gmail dot com >
 * @version 1.0.0RC2
 * @see http://www.php.net/array_map
 * @param  {Function} c callback
 * @param  {Array} 1..n arguments
 * @return {Array}
 */
function array_map(c)
{
	var i, k, f, m, a = [], r = [];
	if(c == null) c = function(v){ return [v]; };
	for(m=0,f=arguments.length-1;m<f;m++);
	for(i=0,f=arguments[1].length;i<f;i++)
	{
		for(k=1;k<=m;k++) a[k-1] = arguments[k][i];
		r[i] = c.apply(null, a);
	};
	return r;
};