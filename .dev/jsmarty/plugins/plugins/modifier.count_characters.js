/**
 * JSmarty plugin
 * @package JSmarty
 * @subpackage plugins
 */

/**
 * JSmarty count_characters modifier plugin
 *
 * Type:     modifier<br />
 * Name:     count_sentences<br />
 *
 * @author   shogo < shogo4405 at gmail dot com>
 * @version  1.0.1
 * @see      http://smarty.php.net/manual/en/language.modifier.count.characters.php
 * @param    {String}  s string
 * @param    {Boolean} i include spaces
 * @return   {Number}
 */
function jsmarty_modifier_count_characters(s, i)
{
	var f = (i == void(0)) ? false: i;
	return f ? s.length : s.match(/[^\s]/g).length;
};
