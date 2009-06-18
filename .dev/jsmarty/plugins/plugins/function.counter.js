/**
 * JSmarty plugin
 * @package JSmarty
 * @subpackage plugins
 */

/**
 * JSmarty {counter} function plugin
 *
 * Type:     function<br />
 * Name:     counter<br />
 * Original: Smarty {counter} function plugin
 *
 * @author   shogo < shogo4405 at gmail dot com>
 * @version  1.0.3
 * @see      http://smarty.php.net/manual/en/language.function.counter.php
 * @param    {Object} params
 * @param    {JSmarty} jsmarty
 * @return   {String}
 */

/* counters */
var jsmarty_function_counter_counters = {};

function jsmarty_function_counter(params, jsmarty)
{
	var k, v, assign, direction, counter;
	var counters = jsmarty_function_counter_counters;
	var retval, print, name = params.name || 'default';

	counter = counters[name] || function()
	{
		counters[name] = {start:1, skip:1, count:1, direction:'up'};
		return counters[name];
	}();

	assign = counter.assign;
	direction = counter.direction;
	print = (counter.assign != 0 && !counter.assign);

	for(k in params)
	{
		v = params[k];
		switch(k)
		{
			case 'print':
				print = !!v;
				break;
			case 'skip':
				counter.skip = v;
				break;
			case 'assign':
				assign = counter.assing = v;
				break;
			case 'direction':
				direction = counter.direction = v;
				break;
			case 'start':
				counter.start = counter.count = Number(v);
				break;
		};
	};

	retval = (print) ? counter.count : '';
	if(assign){ jsmarty.assign(assign, counter.count); };

	if(direction == 'down'){
		counter.count -= Number(counter.skip);
	}else{
		counter.count += Number(counter.skip);
	};

	return retval;
};
