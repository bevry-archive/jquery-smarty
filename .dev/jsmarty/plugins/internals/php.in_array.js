/**
 * in_array function
 *
 * @subpackage Arrays
 * @author shogo < shogo4405 at gmail dot com >
 * @version 1.1.0
 * @see http://www.php.net/in_array
 * @param  {Object}  n needle
 * @param  {Array}   h haystack
 * @param  {Boolean} s strict
 * @return {Boolean}
 */
function in_array(n, h, s)
{
	var i, f, c = (s) ? function(v){return (n===v);} : function(v){return (n==v);};
	for(i=0,f=h.length;i<f;i++){ if(c(h[i])){ return true; }; };
	return false;
};