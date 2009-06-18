/**
 * JSmarty plugin
 * @package JSmarty
 * @subpackage plugins
 */

/**
 * JSmarty truncate modifier plugin
 *
 * Type:     modifier<br />
 * Name:     truncate<br />
 * Original: Smarty truncate modifier plugin
 *
 * @author   shogo < shogo4405 at gmail dot com>
 * @version  1.0.2
 * @see      http://smarty.php.net/manual/en/language.modifier.truncate.php
 * @param    {String} s string
 * @param    {Number} l length
 * @param    {String} e etc
 * @param    {String} b break_words
 * @param    {Boolean} m middle
 * @return   {String}
 */
function jsmarty_modifier_truncate(s, l, e, b, m)
{
	if(l == 0){ return ''; };

	l = Number(l || 80);
	e = (e == void(0)) ? '...' : e;

	if(l < s.length)
	{
		l -= JSmarty.Plugin.get('php.min')(l, e.length);
		if(!b && !m){
			s = s.replace(/\s+?(\S+)?$/,'').slice(0, l + 1); 
		};
		return (!m) ? s.slice(0, l) + e : s.slice(0, l/2) + e + s.slice(-l/2);
	};

	return s;
};
