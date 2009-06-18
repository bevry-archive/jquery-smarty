/**
 * count function
 *
 * @subpackage Arrays
 * @author shogo < shogo4405 at gmail dot com >
 * @version 1.0.0RC2
 * @see http://www.php.net/count
 * @param  {Object} v var
 * @param  {Number} m mode
 * @return {Array}
 */
function count(v, m)
{
	var k, i = 0;

	switch(m)
	{
		case 1:
			if(v instanceof Array)
			{
				for(k=v.length-1;0<=k;k--){ i += count(v[k], 1) || 1; };
				return i;
			};
			if(v instanceof Object)
			{
				for(k in v){ i += count(v[k], 1) || 1; };
				return i;
			};
			break;
		case 0:
		default:
			if(v instanceof Array){
				return v.length;
			};
			if(v instanceof Object){
				for(k in v){ i++; }; return i;
			};
			break;
	};

	return (v == null) ? 0 : 1;
};
