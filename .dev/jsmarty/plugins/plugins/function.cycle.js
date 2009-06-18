/**
 * JSmarty plugin
 * @package JSmarty
 * @subpackage plugins
 */

/**
 * JSmarty {cycle} function plugin
 *
 * Type:     function<br />
 * Name:     cycle<br />
 * Purpose:  cycle through given values<br />
 * Original: Smarty {cycle} function plugin
 *
 * @author   shogo <shogo4405 at gmail dot com>
 * @version  1.0.1
 * @see      http://smarty.php.net/manual/en/language.function.cycle.php
 * @param    {Object} params
 * @param    {JSmarty} jsmarty
 * @return   {String}
 */

/* cycle_vars */
var jsmarty_function_cycle_cycle_vars = {};

function jsmarty_function_cycle(params, jsmarty)
{
	var cycle_vars = jsmarty_function_cycle_cycle_vars;
	var name, reset, print, advance, cycle_var, cycle_array;
	var retval, values = params.values, assign = params.assign;

	name    = params.name || 'default';
	print   = (params.print   == void(0)) ? true  : params.print;
	reset   = (params.reset   == void(0)) ? false : params.reset;
	advance = (params.advance == void(0)) ? true  : params.advance;

	if(!(cycle_var = cycle_vars[name]))
		cycle_var = cycle_vars[name] = { index:0, values: '' };

	if(!values)
	{
		if(!cycle_var.values)
		{
			jsmarty.trigger_error("cycle: missing 'values' parameter");
			return '';
		}
	}
	else
	{
		if(!cycle_var.values && cycle_var.values != values)
			cycle_var.index = 0;
		cycle_var.values = values;
	}

	cycle_var.delimiter = (params.delimiter) ? params.delimiter : ',';

	if(cycle_var.values && cycle_var.values instanceof Array)
		cycle_array = cycle_var.values;
	else
		cycle_array = cycle_var.values.split(cycle_var.delimiter);

	if(!cycle_var.index || reset)
		cycle_var.index = 0;

	if(assign)
	{
		print = false;
		jsmarty.assign(assign, cycle_array[cycle_var.index]);
	}

	if(print)
		retval = cycle_array[cycle_var.index];
	else
		retval = '';

	if(advance)
	{
		if(cycle_var.index >= cycle_array.length - 1)
			cycle_var.index = 0;
		else
			cycle_var.index++;
	}

	return retval;
}