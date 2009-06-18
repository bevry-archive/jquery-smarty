/**
 * JSmarty plugin
 * @package JSmarty
 * @subpackage plugins
 */

/**
 * JSmarty strip modifier plugin
 *
 * Type:     modifier<br />
 * Name:     strip<br />
 * Original: Smarty strip modifier plugin
 *
 * @author   shogo < shogo4405 at gmail dot com>
 * @version  1.0.1
 * @see      http://smarty.php.net/manual/en/language.modifier.strip.php
 * @param    {String} s string
 * @param    {String} r replace
 * @return   {String} string with spaces removed
 */
function jsmarty_modifier_strip(s, r){
	return s.replace(/ +/g, r || ' ');
};
