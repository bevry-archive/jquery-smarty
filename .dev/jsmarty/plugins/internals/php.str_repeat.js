/**
 * str_repeat function
 *
 * @subpackage Strings
 * @author shogo < shogo4405 at gmail dot com >
 * @version 1.0.1
 * @see http://www.php.net/str_repeat
 * @param  {String} s input_str
 * @param  {Number} m multiplier
 * @return {String}
 */
function str_repeat(s, m){
	return Array(m + 1).join(s);
};
