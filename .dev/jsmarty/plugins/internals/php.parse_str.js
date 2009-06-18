/**
 * parse_str function
 *
 * @subpackages Strings
 * @author shogo < shogo4405 at gmail dot com >
 * @version 1.0.0RC3
 * @see http://www.php.net/parse_str
 * @param  {String} s string
 * @param  {Object} o object
 */
function parse_str(s, o)
{
	var i, f, p, m, r = /\[(.*?)\]/g;
	s = decodeURI(s.toString()).replace(/\+/g,' ').split('&');

	function c(o, k, v, p)
	{
		var n, m = r.exec(p);

		if(m != null)
		{
			n = m[1];
			if(typeof(o[k]) == 'undefined'){ o[k] = []; };
			arguments.callee(o[k], n || o[k].length.toString(), v, p);
			return;
		};

		o[k] = v;
	};

	for(i=0,f=s.length;i<f;i++)
	{
		p = s[i].split('='), m = p[0].indexOf('[');
		c(o || this, (0 <= m) ? p[0].slice(0, m) : p[0], decodeURIComponent(p[1]), p[0]);
	};
};