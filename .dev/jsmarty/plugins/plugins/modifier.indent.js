/**
 * JSmarty plugin
 * @package JSmarty
 * @subpackage plugins
 */

/**
 * JSmarty indent modifier plugin
 *
 * Type:     modifier<br />
 * Name:     indent<br />
 *
 * @author   shogo < shogo4405 at gmail dot com>
 * @version  1.0.1
 * @see      http://smarty.php.net/manual/en/language.modifier.indent.php
 * @param    {String} v string
 * @param    {String} n charn
 * @param    {String} s chars
 * @return   {String} indented string
 */
function jsmarty_modifier_indent(v, n, s)
{
	if(n == void(0)){ n = 4; };
	if(s == void(0)){ s = ' '; };
	return Array(n + 1).join(s) + v;
};
