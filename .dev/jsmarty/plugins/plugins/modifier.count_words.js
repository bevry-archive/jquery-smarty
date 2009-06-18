/**
 * JSmarty plugin
 * @package JSmarty
 * @subpackage plugins
 */

/**
 * JSmarty count_words modifier plugin
 *
 * Type:     modifier<br />
 * Name:     count_words<br />
 *
 * @author   shogo < shogo4405 at gmail dot com>
 * @version  1.0.1
 * @see      http://smarty.php.net/manual/en/language.modifier.count.words.php
 * @param    {String} s string
 * @return   {Number}
 */
function jsmarty_modifier_count_words(s)
{
	var preg_grep = JSmarty.Plugin.get('php.preg_grep');
	return JSmarty.Plugin.get('php.count')(preg_grep(/[a-zA-Z0-9\x80-\xff]/, s.split(/\s+/)));
};
