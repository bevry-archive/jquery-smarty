/**
 * JSmarty plugin
 * @package JSmarty
 * @subpackage plugins
 */

/**
 * JSmarty replace modifier plugin
 *
 * Type:     modifier<br />
 * Name:     replace<br />
 *
 * @author   shogo < shogo4405 at gmail dot com>
 * @version  1.0.0
 * @see      http://smarty.php.net/manual/en/language.modifier.replace.php
 * @param    {String} s string
 * @param    {String} e search
 * @param    {String} r replace
 * @return   {String} string with replaced
 */
function jsmarty_modifier_replace(s, e, r){
	return s.replace(RegExp(e,'g'), r);
};
