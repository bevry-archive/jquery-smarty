/**
 * date function
 *
 * @package Date/Time
 * @author shogo < shogo4405 at gmail dot com >
 * @version 1.0.0RC3
 * @see http://www.php.net/date
 * @param  {String} s format
 * @param  {Number} t timestamp
 * @return {String}
 */
function date(s, t)
{
	var i, f, v, s = s.split('');
	var d = (t) ? new Date(t) : new Date();
	for(i=0,f=s.length;i<=f;i++)
	{
		switch(s[i])
		{
			case 'd':
				v = d.getDate();
				s[i] = (v < 10) ? '0' + v : v ;
				break;
			case 'D':
				s[i] = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][d.getDay()];
				break;
			case 'j':
				s[i] = d.getDate();
				break;
			case 'l':
				s[i] = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][d.getDay()];
				break;
			case 'N':
				v = d.getDay();
				s[i] = (v == 0) ? 7 : v ;
				break;
			case 'S':
				v  = d.getDate().toString().slice(-1);
				s[i] = ['th','st','nd','rd','th','th','th','th','th','th'][v];
				break;
			case 'w':
				s[i] = d.getDay();
				break;
			case 'z':
				s[i] = Math.ceil((d.getTime() - new Date(d.getFullYear(), 0, 1).getTime()) / 86400000);
				break;
			case 'W':
				s[i] = '';
				break;
			case 'F':
				s[i] = ['January','February','March','April','May','June','July','August','September','October','November','December'][d.getMonth()];
				break;
			case 'm':
				v = d.getMonth() + 1;
				s[i] = (v < 10) ? '0' + v : v;
				break;
			case 'M':
				s[i] = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][d.getMonth()];
				break;
			case 'n':
				s[i] = d.getMonth() + 1;
				break;
			case 't':
				v = [31,28,31,30,31,30,31,31,30,31,30,31][d.getMonth()];
				s[i] = (v == 28) ? v + Number(date('L')) : v;
				break;
			case 'L':
				v = d.getFullYear();
				s[i] = (v % 4) ? 0 : (v % 400) ? (v % 100) ? 1 : 0 : 1;
				break;
			case 'o':
				s[i] = '';
				break;
			case 'Y':
				s[i] = d.getFullYear();
				break;
			case 'y':
				s[i] = d.getFullYear().toString().slice(2,4);
				break;
			case 'a':
				v = d.getHours();
				s[i] = (v < 12) ? 'am' : 'pm';
				break;
			case 'A':
				v = d.getHours();
				s[i] = (v < 12) ? 'AP' : 'PM';
				break;
			case 'B':
				s[i] = '';
				break;
			case 'g':
				v = d.getHours();
				s[i] = (v < 12) ? v : v - 12;
				break;
			case 'G':
				s[i] = d.getHours();
				break;
			case 'h':
				v = d.getHours();
				v = (v < 12) ? v : v - 12;
				s[i] = (v < 10) ? '0' + v : v ;
				break;
			case 'H':
				v = d.getHours();
				s[i] = (v < 10) ? '0' + v : v;
				break;
			case 'i':
				v = d.getMinutes();
				s[i] = (v < 10) ? '0' + v : v;
				break;
			case 's':
				v = d.getSeconds();
				s[i] = (v < 10) ? '0' + v : v;
				break;
			case 'e':
				s[i] = '';
				break;
			case 'I':
				s[i] = '';
				break;
			case 'O':
				s[i] = '';
				break;
			case 'P':
				s[i] = '';
				break;
			case 'T':
				s[i] = '';
				break;
			case 'Z':
				s[i] = '';
				break;
			case 'c':
				s[i] = '';
				break;
			case 'r':
				s[i] = date('D, d M Y H:m:s O', d.getTime());
				break;
			case 'U':
				s[i] = d.getTime();
				break;
		};
	};
	return s.join('');
};