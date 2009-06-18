/**
 * JSmarty plugin
 * @package JSmarty
 * @subpackage plugins
 */

/**
 * JSmarty default modifier plugin
 *
 * Type:     modifier<br />
 * Name:     default<br />
 *
 * @author   shogo < shogo4405 at gmail dot com>
 * @version  1.0.1
 * @see      http://smarty.php.net/manual/en/language.modifier.default.php
 * @param    {String} s string
 * @param    {String} d default value
 * @return   {String}
 */
function jsmarty_modifier_default(s, d){
	return s ? s : (d == void(0)) ? '' : d;
};
