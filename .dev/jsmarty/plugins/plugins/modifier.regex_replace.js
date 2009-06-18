/**
 * JSmarty plugin
 * @package JSmarty
 * @subpackage plugins
 */

/**
 * JSmarty regex_replace modifier plugin
 *
 * Type:     modifier<br />
 * Name:     regex_replace<br />
 *
 * @author   shogo < shogo4405 at gmail dot com>
 * @version  1.0.0RC1
 * @see      http://smarty.php.net/manual/en/language.modifier.regex.replace.php
 * @param    {String} s string
 * @param    {RegExp} e search
 * @param    {String} r replace
 * @return   {String} string with replaced
 */
function jsmarty_modifier_regex_replace(s, e, r){
	return s.replace(e, r);
};
