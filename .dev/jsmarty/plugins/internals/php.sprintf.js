/**
 * sprintf function
 *
 * @subpackage Strings
 * @author shogo < shogo4405 at gmail dot com >
 * @version 1.0.0RC2
 * @see http://www.php.net/sprintf
 * @param  {string} s format
 * @param  {mixed}  1..n arguments
 * @return {string}
 */
function sprintf(s)
{
	var i, a, c, v, m, p, t, n, f, k = 1, b = s.split('');

	for(i=0,f=b.length;i<=f;i++)
	{
		if(b[i] == '%')
		{
			v = sprintf.arguments[k++];
			m = n = c = '', a = 0, p = ' ';

			do
			{
				t = b[i], b[i++] = '';
				switch(t)
				{
					case '$':
						v = sprintf.arguments[n];
						n = '';
						break;
					case '.':
						if(n == '') n = 0;
						c = b[i], b[i++] = '';
						break;
					case '%':
						t = b[i];
						break;
					case '+':
						if(m == '') m = '+';
						break;
					case '-':
						a = 1;
						break;
					case "'":
						p = b[i], b[i++] = '';
						break;
					case '0':
						if(n == ''){ p = t; break; };
						if(c == ''){ n+= t; } else { c+= t; };
						break;
					case '1':
					case '2':
					case '3':
					case '4':
					case '5':
					case '6':
					case '7':
					case '8':
					case '9':
						if(c == ''){ n += t; } else { c += t; };
						break;
					default:
						i--;
						break;
				};
			}
			while('#' < t && t < ':');

			n = (n == '') ? 0 : Number(n);
			if(!isNaN(Number(v)))
			{
				if(v < 0)   m = '';
				if(c != '') v = v.toFixed(c);
			};

			switch(t)
			{
				case '%': k--; b[i] = t; continue;
				case 'F': v = v.toFixed(6); break;
				case 'f': v = v.toFixed(6); break;
				case 'o': v = v.toString(8); break;
				case 'u': v = v.toString(10); break;
				case 'd': v = v.toString(10); break;
				case 'c': v = String.fromCharCode(v); break;
				case 'b': v = parseInt(v).toString(2); break;
				case 'x': v = v.toString(16).toLowerCase(); break;
				case 'X': v = v.toString(16).toUpperCase(); break;
				case 'e': v = parseInt(v).toExponential(c || 5); break;
				case 's': m = ''; if(c != '') v = v.slice(0, c); break;
			};

			if(v.length < n)
			{
				if(a) v = v + Array(n - v.length - m.length + 1).join(p);
				else  v = Array(n - v.length - m.length + 1).join(p) + v;
			};

			b[i] = m + v;
		};
	};

	return b.join('');
};
