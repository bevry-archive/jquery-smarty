/**
 * JSmarty plugin
 * @package JSmarty
 * @subpackage plugins
 */

/**
 * JSmarty nl2br modifier plugin
 *
 * Type:     modifier<br />
 * Name:     nl2br<br />
 * Purpose:  convert \r?\n to <br />
 *
 * @author   shogo < shogo4405 at gmail dot com>
 * @version  1.0.1
 * @param    {String} s string
 * @return   {String}
 */

function jsmarty_modifier_nl2br(s){
	return s.replace(/\r?\n/g, '<br />');
};
