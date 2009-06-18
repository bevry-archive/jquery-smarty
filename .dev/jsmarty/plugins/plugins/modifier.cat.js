/**
 * JSmarty plugin
 * @package JSmarty
 * @subpackage plugins
 */

/**
 * JSmarty cat modifier plugin
 *
 * Type:     modifier<br />
 * Name:     cat<br />
 *
 * @author   shogo < shogo4405 at gmail dot com>
 * @version  1.0.1
 * @see      http://smarty.php.net/manual/en/language.modifier.cat.php
 * @param    {String} s string
 * @param    {String} c string
 * @return   {String} string with cat
 */

function jsmarty_modifier_cat(s, c){
	return s.concat(c);
};
