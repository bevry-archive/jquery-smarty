/**
 * ucfirst function
 *
 * @subpackage Strings
 * @author shogo < shogo4405 at gmail dot com >
 * @version 1.0.1
 * @see http://www.php.net/ucfirst
 * @param  {String} s str
 * @return {String}
 */
function ucfirst(s){
	return s.slice(0,1).toUpperCase().concat(s.slice(1));
};
