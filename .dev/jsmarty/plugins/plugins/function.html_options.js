/**
 * JSmarty plugin
 * @package JSmarty
 * @subpackage plugins
 */

/**
 * JSmarty {html_options} function plugin
 *
 * Type:     function<br />
 * Name:     html_options<br />
 * Original: Smarty {html_options} function plugin
 *
 * @author   shogo < shogo4405 at gmail dot com>
 * @version  1.0.6
 * @see      http://smarty.php.net/manual/en/language.function.html.options.php
 * @param    {Object} params
 * @param    {JSmarty} jsmarty
 * @return   {String}
 */

function jsmarty_function_html_options(params, jsmarty)
{
	var Plugin = JSmarty.Plugin;

	Plugin.add('shared.escape_special_chars', jsmarty.plugins_dir);

	var k, f, value, i = 0, html = [];
	var optoutput = jsmarty_function_html_options_optoutput;
	var strval = Plugin.get('php.strval');
	var array_map = Plugin.get('php.array_map');
	var array_values = Plugin.get('php.array_values');

	var name = null;
	var extra = [];
	var output = null;
	var values = null;
	var options = null;
	var selected = [];

	for(k in params)
	{
		if(!params.hasOwnProperty(k)) continue;

		switch(k)
		{
			case 'name':
				name = params[k]; break;
			case 'options':
				options = params[k]; break;
			case 'values':
				values = array_values(params[k]); break;
			case 'output':
				output = array_values(params[k]); break;
			case 'selected':
				selected = array_map(strval, array_values([params[k]]));
				break;
			default:
				if(typeof(params[k]) != 'object')
					extra[i++] = ' ' + k +'="'+ params[k] +'"';
				else
					jsmarty.trigger_error('html_checkboxes: extra attribute '+ k +' cannot be an array');
				break;
		};
	};

	if(!options && !values) return;

	if(options)
	{
		for(k in options)
		{
			if(!options.hasOwnProperty(k)) continue;
			html[i++] = optoutput(k, options[k], selected)
		};
	}
	else
	{
		for(k=0,f=values.length;k<f;k++)
		{
			value = (output[k]) ? output[k] : '';
			html[i++] = optoutput(values[k], value, selected);
		};
	};

	return (name) ? '<select name="'+ name +'"'+ extra.join('') +'>\n'+ html.join('\n') +'</select>\n' : html.join('\n');
};

function jsmarty_function_html_options_optoutput(key, value, selected)
{
	var optgroup = jsmarty_function_html_options_optgroup;

	var html = new JSmarty.Classes.Buffer(), Plugin = JSmarty.Plugin;
	var escape_special_chars = Plugin.get('shared.escape_special_chars');
	var is_array = Plugin.get('php.is_array'), in_array = Plugin.get('php.in_array');

	if(!is_array(value))
	{
		value = escape_special_chars(value);
		html.append('<option label="', value, '" value="', escape_special_chars(key), '"');
		html.appendIf(in_array(key, selected))(' selected="selected"');
		html.append('>', value, '</option>');
	};

	return html.toString() || optgroup(key, value, selected);
};

function jsmarty_function_html_options_optgroup(key, value, selected)
{
	var k, html = new JSmarty.Classes.Buffer();
	var optoutput = jsmarty_function_html_options_optoutput;

	html.append('<optgroup label="', key, '">');
	for(k in value)
	{
		if(!value.hasOwnProperty(k)){ continue; };
		html.append(optoutput(key, value, selected));
	};
	html.append('</optgroup>');

	return html.toString();
};
