/**
 * JSmarty plugin
 * @package JSmarty
 * @subpackage plugins
 */

/**
 * JSmarty capitalize modifier plugin
 *
 * Type:     modifier<br />
 * Name:     capitalize<br />
 *
 * @author   shogo < shogo4405 at gmail dot com >
 * @version  1.0.0RC1
 * @param    {String} string
 * @return   {String} digits
 */
function jsmarty_modifier_capitalize(string, digits)
{
	var i, f, b = true, s = string.split('');

	for(i=0,f=s.length;i<f;i++)
	{
		switch(s[i])
		{
			case ' ':
			case '-':
			case '!':
				b = true;
				break;
			default:
				if(b)
				{
					s[i] = s[i].toUpperCase();
				};
				b = false;
				break;
		};
	};

	return s.join('');
};