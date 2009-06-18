/**
 * JSmarty plugin
 * @package JSmarty
 * @subpackage plugins
 */

/**
 * JSmarty date_format modifier plugin
 *
 * Type:     modifier<br />
 * Name:     date_format<br />
 *
 * @author   shogo < shogo4405 at gmail dot com>
 * @version  1.0.0RC1
 * @see      http://smarty.php.net/manual/en/language.modifier.date.format.php
 * @param    {String} s string
 * @param    {String} f format
 * @param    {String} d default_date
 * @return   {String}
 */

function jsmarty_modifier_date_format(s, f, d)
{
	if(!s && !d){ return ''; };
	var strftime = JSmarty.Plugin.get('php.strftime');
	return strftime(f || '%b %e %Y', (new Date(s || d)).getTime());
};
