/**
 * JSmarty plugin
 * @package JSmarty
 * @subpackage plugins
 */

/**
 * JSmarty spacify modifier plugin
 *
 * Type:     modifier<br />
 * Name:     spacify<br />
 *
 * @author   shogo < shogo4405 at gmail dot com>
 * @version  1.0.2
 * @see      http://smarty.php.net/manual/en/language.modifier.spacify.php
 * @param    {String} s string
 * @param    {String} c 
 * @return   {String} string with spaced (eg. a b c d)
 */
function jsmarty_modifier_spacify(s, c){
	return s.split('').join((c == void(0)) ? ' ' : c);
};
