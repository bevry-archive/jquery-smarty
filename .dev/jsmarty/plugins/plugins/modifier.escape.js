/**
 * JSmarty plugin
 * @package JSmarty
 * @subpackage plugins
 */
function jsmarty_modifier_escape(s, t)
{
	var i;

	switch(t)
	{
		case 'html':
			return JSmarty.Plugin.get('php.htmlspecialchars')(s, 'ENT_QUOTES');
		case 'htmlall':
			return JSmarty.Plugin.get('php.htmlentities')(s, 'ENT_QUOTES');
		case 'url':
			return escape(s);
		case 'urlpathinfo':
			return escape(s).replace(/%2F/g, '/');
		case 'quotes':
			return s.replace(/'/g, "\\'");
		case 'hex':
			s = s.split('');
			for(i=s.length-1;0<=i;i--){
				s[i] = '%' + s[i].charCodeAt(0).toString(16);
			};
			return s.join('');
		case 'hexentity':
			s = s.split('');
			for(i=s.length-1;0<=i;i--){
				s[i] = '&#x' + s[i].charCodeAt(0).toString(16) + ';';
			};
			return s.join('');
		case 'decentity':
			s = s.split('');
			for(i=s.length-1;0<=i;i--){
				s[i] = '&#' + s[i].charCodeAt(0).toString(10) +';';
			};
			return s.join('');
//		case 'javascript':
//			return JSmarty.Plugin.get('php.strtr')(s, {'\\':'\\\\', "'":"\\'", "\r":"\\r", "\n":'\\n', '</':'<\/'});
		case 'mail':
			return s.replace(/@/g, ' [AT] ').replace(/\./g, ' [DOT] ');
		default:
			return s;
	};
};
