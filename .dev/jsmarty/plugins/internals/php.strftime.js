/**
 * strftime function
 *
 * @package Date/Time
 * @author shogo < shogo4405 at gmail dot com >
 * @version 1.0.0RC2
 * @see http://www.php.net/strftime
 * @param  {String} s format
 * @param  {Number} t timestamp
 * @return {String}
 */
function strftime(s, t)
{
	var i, v, f, b = s.split('');
	var d = (t) ? new Date(t) : new Date();

	for(i=0,f=s.length;i<=f;i++)
	{
		if(b[i] == '%')
		{
			b[i++] = '';
			switch(b[i])
			{
				case 'a':
					b[i] = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][d.getDay()];
					break;
				case 'A':
					b[i] = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][d.getDay()];
					break;
				case 'h':
				case 'b':
					b[i] = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][d.getMonth()];
					break;
				case 'B':
					b[i] = ['January','February','March','April','May','June','July','August','September','October','November','December'][d.getMonth()];
					break;
				case 'c':
					b[i] = strftime('%m/%d/%y %H:%M:%S', d.getTime());
					break;
				case 'C':
					b[i] = Math.floor(d.getFullYear() / 100);
					break;
				case 'd':
					v = d.getDate();
					b[i] = (v < 10) ? '0' + v : v;
					break;
				case 'D':
					b[i] = strftime('%m/%d/%y', d.getTime());
					break;
				case 'e':
					v = d.getMonth();
					b[i] = (v < 10) ? ' ' + v : v;
					break;
				case 'g':
					b[i] = '';
					break;
				case 'G':
					b[i] = '';
					break;
				case 'H':
					v = d.getHours();
					b[i] = (v < 10) ? '0' + v : v;
					break;
				case 'I':
					v = d.getHours();
					if(v == 0){ v = 24; };
					if(12 < v){ v -= 12; };
					b[i] = (v < 10) ? '0' + v : v;
					break;
				case 'j':
					v = Math.ceil((d.getTime() - new Date(d.getFullYear(), 0, 1).getTime()) / 86400000);
					b[i] = (v < 100) ? (v < 10) ? '00' + v : '0' + v : v ;
					break;
				case 'm':
					v = d.getMonth() + 1;
					b[i] = (v < 10) ? '0' + v : v;
					break;
				case 'M':
					b[i] = d.getMinutes();
					break;
				case 'n':
					b[i] = '\n';
					break;
				case 'p':
					v = d.getHours();
					b[i] = (v < 12) ? 'AM' : 'PM';
					break;
				case 'r':
					v = d.getHours();
					b[i] = (v < 12) ? v : v - 12;
					break;
				case 'R':
					b[i] = d.getHours();
					break;
				case 'S':
					b[i] = d.getSeconds();
					break;
				case 't':
					b[i] = '\t';
					break;
				case 'T':
					b[i] = strftime('%H:%M:%S', d.getTime());
					break;
				case 'u':
					v = d.getDay();
					b[i] = (v == 0) ? 7 : v;
					break;
				case 'U':
					v = (d.getTime() - new Date(d.getFullYear(), 0, 1).getTime());
					b[i] = Math.ceil(v / 604800000);
					break;
				case 'V':
					b[i] = '';
					break;
				case 'W':
					v = (d.getTime() - new Date(d.getFullYear(), 0, 1).getTime());
					b[i] = Math.floor(v / 604800000);
					break;
				case 'w':
					b[i] = d.getDay();
					break;
				case 'x':
					v = d.toLocaleString();
					b[i] = v.slice(0, v.indexOf(' '));
					break;
				case 'X':
					v = d.toLocaleString();
					b[i] = v.slice(v.indexOf(' '));
					break;
				case 'y':
					b[i] = d.getFullYear().toString().slice(-2);
					break;
				case 'Y':
					b[i] = d.getFullYear();
					break;
				case 'Z':
					b[i] = '';
					break;
				case '%':
					b[i] = '%';
					break;
				default:
					b[i] = '';
					break;
			};
		};
	};

	return b.join('');
};