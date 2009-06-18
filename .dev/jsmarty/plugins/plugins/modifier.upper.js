/**
 * JSmarty plugin
 * @package JSmarty
 * @subpackage plugins
 */

/**
 * JSmarty upper modifier plugin
 *
 * Type:     modifier<br>
 * Name:     lower<br>
 * Purpose:  convert string to uppercase
 *
 * @author   shogo < shogo4405 at gmail dot com>
 * @version  1.0.1
 * @param    {String} s string
 * @return   {String}
 */
function jsmarty_modifier_upper(s){
	return s.toUpperCase();
};
