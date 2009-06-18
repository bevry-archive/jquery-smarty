/**
 * strtr function
 *
 * @subpackages Strings
 * @author shogo < shogo4405 at gmail dot com >
 * @version 1.0.0
 * @see http://www.php.net/strtr
 */
function strtr(s, p, r)
{
	switch(arguments.length)
	{
		case 2:
			for(var i in p){ s = strtr(s, i, p[i]); };
			return s;
		case 3:
			var l = p.length, n = r.length;
			if(l < n){ return s.replace(RegExp(p, 'g'), r.slice(0, l)); };
			if(n < l){ return s.replace(RegExp(p.slice(0, n), 'g'), r); };
			return s.replace(RegExp(p, 'g'), r);
		default:
			throw new Error('Wrong parameter count for strtr()');
			return;
	};
};
