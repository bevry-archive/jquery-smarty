/**
 * JSmarty plugin
 * @package JSmarty
 * @subpackage plugins
 */

/**
 * JSmarty wordwrap modifier plugin
 *
 * Type:     modifier<br />
 * Name:     wordwrap<br />
 *
 * @author   shogo < shogo4405 at gmail dot com>
 * @version  1.0.1
 * @see      http://smarty.php.net/manual/en/language.modifier.wordwrap.php
 * @param    {String} n string
 * @param    {Number} l length
 * @param    {String} s separator
 * @param    {Boolean} c cut
 * @return   {String}
 */
function jsmarty_modifier_wordwrap(n, l, s, c){
	return JSmarty.Plugin.get('php.wordwrap')(n, l || 80, (s == void(0)) ? '\n' : s, c || false);
};
