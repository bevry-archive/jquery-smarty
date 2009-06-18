/**
 * JSmarty plugin
 * @package JSmarty
 * @subpackage plugins
 */

/**
 * JSmarty count_sentences modifier plugin
 *
 * Type:     modifier<br />
 * Name:     count_sentences<br />
 *
 * @author   shogo < shogo4405 at gmail dot com>
 * @version  1.0.1
 * @see      http://smarty.php.net/manual/en/language.modifier.count.sentences.php
 * @param    {String} s string
 * @return   {Number}
 */
function jsmarty_modifier_count_sentences(s){
	return s.match(/[^\s]\.(?!\w)/g).length;
};
