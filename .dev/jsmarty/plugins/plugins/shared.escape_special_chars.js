/**
 * JSmarty plugin
 * @package JSmarty
 * @subpackage plugins
 */

/**
 * JSmarty escape_special_chars shared
 *
 * Type:	shared<br />
 *
 * @author	shogo < shogo4405 at gmail dot com >
 * @version	1.0.0
 * @param	{String} s
 * @return	{String} 
 */
function jsmarty_shared_escape_special_chars(s){
	return JSmarty.Plugin.get('php.htmlspecialchars')(s.toString());
};