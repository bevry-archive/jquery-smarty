/**
 * JSmarty plugin
 * @package JSmarty
 * @subpackage plugins
 */

/**
 * JSmarty {html_select_date} function plugin
 *
 * Type:     function<br />
 * Name:     html_select_date<br />
 * Original: Smarty {html_select_date} function plugin
 *
 * @author   shogo < shogo4405 at gmail dot com>
 * @version  1.0.0RC2
 * @see      http://smarty.php.net/manual/en/language.function.html.select.date.php
 * @param    {Object} params
 * @param    {JSmarty} jsmarty
 * @return   {String}
 */
function jsmarty_function_html_select_date(params, jsmarty)
{
	var dir = jsmarty.plugins_dir, Plugin = JSmarty.Plugin;

	var range = Plugin.get('php.range');
	var sprintf = Plugin.get('php.sprintf');
	var strftime = Plugin.get('php.strftime');
	var html_options = Plugin.get('function.html_options', dir);
	var escape_special_chars = Plugin.get('shared.escape_special_chars', dir);

	var n, i = 0, k = 0, month, day, year, html = new JSmarty.Classes.Buffer();
	var days, day_values, month_names, month_values, years, year_values, year_name;

	var time = new Date().getTime();
	var prefix = 'Date_';
	var day_size = null;
	var end_year = strftime('%Y');
	var all_empty = null;
	var day_empty = null;
	var year_size = null;
	var all_extra = null;
	var day_extra = null;
	var start_year = end_year;
	var day_format = '%02d';
	var year_empty = null;
	var month_size = null;
	var year_extra = null;
	var field_array = null;
	var field_order = 'MDY';
	var month_extra = null;
	var extra_attrs = '';
	var month_empty = null;
	var display_days = true;
	var month_format = '%B';
	var year_as_text = false;
	var display_years = true;
	var reverse_years = false;
	var display_months = true;
	var field_separator = '\n';
	var day_value_format = '%d';
	var month_value_format = '%m';

	for(k in params)
	{
		if(!params.hasOwnProperty(k)) continue;

		switch(k)
		{
			case 'prefix':
				prefix = params[k]; break;
			case 'time':
				time = params[k]; break;
			case 'start_year':
				start_year = params[k]; break;
			case 'end_year':
				end_year = params[k]; break;
			case 'month_format':
				month_format = params[k]; break;
			case 'day_format':
				day_format = params[k]; break;
			case 'day_value_format':
				day_value_format = params[k]; break;
			case 'field_array':
				field_array = params[k]; break;
			case 'day_size':
				day_size = params[k]; break;
			case 'month_size':
				month_size = params[k]; break;
			case 'year_extra':
				year_extra = params[k]; break;
			case 'field_order':
				field_order = params[k]; break;
			case 'field_separator':
				field_separator = params[k]; break;
			case 'month_value_format':
				month_value_format = params[k]; break;
			case 'month_empty':
				month_empty = params[k]; break;
			case 'day_empty':
				day_empty = params[k]; break;
			case 'year_empty':
				year_empty = params[k]; break;
			case 'all_empty':
				all_empty = params[k];
				day_empty = month_empty = year_empty = all_empty;
				break;
			case 'display_days':
				display_days = params[k]; break;
			case 'display_months':
				display_months = params[k]; break;
			case 'display_years':
				display_years = params[k]; break;
			case 'year_as_text':
				year_as_text = params[k]; break;
			case 'reverse_years':
				reverse_years = params[k]; break;
			default:
				break;
		};
	};

	if(time.match && time.match(/^-\d+$/)){
		time = date('Y-m-d', time);
	};
	if(!(time.match && time.match(RegExp('^\d{0,4}-\d{0,2}-\d{0,2}$')))){
		time = strftime('%Y-%m-%d', new Date(time).getTime());
	};

	time = time.split('-');

	if(match = end_year.match(/^(\+|\-)\s*(\d+)$/))
	{
		if(match[1] == '+')
			end_year = strftime('%Y') + match[2];
		else
			end_year = strftime('%Y') - match[2];
	};

	if(match = start_year.match(/^(\+|\-)\s*(\d+)$/))
	{
		if(match[1] == '+')
			start_year = strftime('%Y') + match[2];
		else
			start_year = strftime('%Y') - match[2];
	};

	if(time[0].length > 0)
	{
		if(start_year > time[0] && !params.start_year)
			start_year = time[0];
		if(end_year < time[0] && !params.end_year)
			end_year = time[0];
	};

	field_order = field_order.toUpperCase();

	if(display_months)
	{
		month = new JSmarty.Classes.Buffer();
		n = 0, month_names = [], month_values = [];

		if(month_empty)
		{
			month_names[0] = month_empty;
			month_values[0] = '', n++;
		};

		for(k=0;k<12;k++)
		{
			month_names[n+k] = strftime(month_format, new Date(2000, k).getTime());
			month_values[n+k] = strftime(month_value_format, new Date(2000, k).getTime());
		};

		month.append('<select name=');
		month.appendIf(field_array)('"', prefix, 'Month"');
		month.appendIf(!field_array)('"', field_array, '[' + prefix + 'Month]"');
		month.appendIf(month_size)(' size="', month_size, '"');
		month.appendIf(month_extra)(' ', all_extra);
		month.append(extra_attrs, '>\n');
		month.append(html_options({ output:month_names, values:month_values, selected: time[1] ? strftime(month_value_format, new Date(2000, time[1] - 1).getTime()) : ''}, jsmarty));
		month.append('\n</select>');
	};

	if(display_days)
	{
		day = new JSmarty.Classes.Buffer();
		n = 0, days = [], day_values = [];

		if(day_empty)
		{
			days[0] = day_empty;
			day_values[0] = '', n++;
		};

		for(k=0;k<31;k++)
		{
			days[n+k] = sprintf(day_format, k+1);
			day_values[n+k] = sprintf(day_value_format, k+1);
		};

		day.append('<select name=');
		day.appendIf(field_array)('"', field_array, '[', prefix, 'Day]"');
		day.appendIf(!field_array)('"', prefix, 'Day"');
		day.appendIf(day_size !== null)(' size="', day_size, '"');
		day.appendIf(all_extra !== null)(' ', all_extra);
		day.appendIf(day_extra !== null)(' ', day_extra);
		day.append(extra_attrs, '>\n');
		day.append(html_options({ output:days, values:day_values, selected:time[2] }, jsmarty));
		day.append('\n</select>');
	};

	if(display_years)
	{
		year = new JSmarty.Classes.Buffer();
		year_name = (field_array) ? field_array + '[' + prefix + 'Year]' : prefix + 'Year' ;

		if(year_as_text)
		{
			year.append
			(
				'<input type="text" name="', year_name, '" value="',
				time[0], '" size="4" maxlength="4"'
			);
			year.appendIf(all_extra !== null)(' ', all_extra);
			year.appendIf(year_extra !== null)(' ', year_extra);
			year.append(' />');
		}
		else
		{
			years = range(parseInt(start_year), parseInt(end_year));
			(reverse_years) ? years.reverse() : years.sort() ;
			year_values = [].concat(years);
			if(year_empty)
			{
				years.unshift(year_empty);
				year_values.unshift('');
			};
			year.append('<select name="', year_name, '"');
			year.appendIf(year_size !== null)(' size="', year_size, '"');
			year.appendIf(all_extra !== null)(' ', year_extra);
			year.append(extra_attrs, '>\n');
			year.append(html_options({ output:years, values:year_values, selected:time[0] }, jsmarty));
			year.append('\n</select>');
		};
	};

	for(i=0;i<=2;i++)
	{
		switch(field_order.charAt(i))
		{
			case 'D': html.append(day.toString()); break;
			case 'Y': html.append(year.toString()); break;
			case 'M': html.append(month.toString()); break;
		};
	};

	return html.toString(field_separator);
};