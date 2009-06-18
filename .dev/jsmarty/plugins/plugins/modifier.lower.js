/**
 * JSmarty plugin
 * @package JSmarty
 * @subpackage plugins
 */

/**
 * JSmarty lower modifier plugin
 *
 * Type:     modifier<br />
 * Name:     lower<br />
 *
 * @author   shogo < shogo4405 at gmail dot com>
 * @version  1.0.1
 * @see      http://smarty.php.net/manual/en/language.modifier.lower.php
 * @param    {String} s string
 * @return   {String} lowercased string
 */
function jsmarty_modifier_lower(s){
	return s.toLowerCase();
};
