/**
 * range function
 *
 * @subpackage Arrays
 * @author shogo < shogo4405 at gmail dot com >
 * @version 1.0.0
 * @see http://www.php.net/range
 * @param  {mixed}  l low
 * @param  {mixed}  h high
 * @param  {Number} n step
 * @return {Array}
 */
function range(l, h, n)
{
	var m = (typeof(l) == 'number');
	var k, i = -1, a = [], n = n || 1;
	var s = (l < h) ? l : h, e = (l < h) ? h : l;
	if(typeof(s) == 'string') s = s.charCodeAt(0);
	if(typeof(e) == 'string') e = e.charCodeAt(0);
	if(m) for(k=s;k<=e;k+=n) a[++i] = k;
	else  for(k=s;k<=e;k+=n) a[++i] = String.fromCharCode(k);
	return a;
};