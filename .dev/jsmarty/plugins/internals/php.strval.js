/**
 * strval function
 *
 * @author shogo < shogo4405 at gmail dot com >
 * @version 1.0.1
 * @see http://www.php.net/strval
 * @param  {mixed} v value
 * @return {String}
 */
function strval(v){
	return (v == null) ? '' : v.toString();
};
