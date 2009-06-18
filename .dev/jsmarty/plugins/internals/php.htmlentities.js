/**
 * htmlentities function
 *
 * @subpackages Strings
 * @author shogo < shogo4405 at gmail dot com >
 * @version 0.0.1
 * @see http://www.php.net/htmlentities
 * @param  {String} s string
 * @param  {String} t quote_style (ENT_COMPAT | ENT_QUOTES | ENT_NOQUOTES)
 * @param  {String} c charset
 * @return {String}
 */
function htmlentities(s, t, c)
{
	s = s.toString().replace(/&/g,'&amp;').replace(/</g, '&lt;').replace(/>/g,'&gt;');
	switch(t)
	{
		case 'ENT_QUOTES':
			s = s.replace(/"/g,'&quot;').replace(/'/g,'&#039;');
			break;
		case 'ENT_NOQUOTES':
			break;
		case 'ENT_COMPAT':
		default:
			s = s.replace(/"/g,'&quot;');
			break;
	};
	return s;
};