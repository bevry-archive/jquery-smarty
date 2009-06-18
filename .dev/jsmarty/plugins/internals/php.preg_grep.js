/**
 * preg_grep function
 *
 * @subpackage PCRE
 * @author shogo < shogo4405 at gmail dot com >
 * @version 1.0.0RC1
 * @see http://www.php.net/preg_grep
 * @param  {RegExp} p pattern
 * @param  {Array}  b input
 * @param  {String} f flags
 * @return {Array}
 */
function preg_grep(p, b, f)
{
	var i, f, m = (b instanceof Array), o = (m) ? [] : {};
	var c = (f == 'PREG_GREP_INVERT') ? function(b){ return !b; } : function(b){ return b; };
	if(m){for(i=0,f=b.length;i<f;i++){if(p.test(b[i])){o[i] = b[i];}}}
	else {for(i in b){o[i] = b[i];}}
	return o;
};