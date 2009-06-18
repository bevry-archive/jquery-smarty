/**
 * JSmarty plugin
 * @package JSmarty
 * @subpackage plugins
 */

/**
 * JSmarty {html_table} function plugin
 *
 * Type:     function<br />
 * Name:     html_table<br />
 * Original: Smarty {html_table} function plugin<br />
 *
 * @author   shogo <shogo4405 at gmail dot com>
 * @version  1.0.0RC3
 * @see      http://smarty.php.net/manual/en/language.function.html.table.php
 * @param    {Object} params
 * @param    {JSmarty} jsmarty
 * @return   {String} &lt;table&gt; - &lt;/table&gt;
 */

function jsmarty_function_html_table(params, jsmarty)
{
	if(!params.loop)
	{
		jsmarty.trigger_error("html_table: missing 'loop' parameter");
		return;
	};

	var c, r, v, k, x, rx;
	var html = new JSmarty.Classes.Buffer();
	var cycle = jsmarty_function_html_table_cycle;

	var loop = params.loop;
	var cols = 3;
	var rows = 3;
	var vdir = 'down';
	var hdir = 'right';
	var inner = 'cols';
	var tr_attr = '';
	var td_attr = '';
	var trailpad = '&nbsp;';
	var table_attr = ' border="1"';

	var loop_count = loop.length;

	for(k in params)
	{
		v = params[k];
		switch(k)
		{
			case 'loop':
				loop = v;
				break;
			case 'cols':
				cols = parseInt(v);
				break;
			case 'rows':
				rows = parseInt(v);
				break;
			case 'hdir':
				hdir = v;
				break;
			case 'vdir':
				vdir = v;
				break;
			case 'inner':
				inner = v;
				break;
			case 'trailpad':
				trailpad = v;
				break;
			case 'table_attr':
				table_attr = ' ' + v;
				break;
			case 'tr_attr':
				tr_attr = v;
				break;
			case 'td_attr':
				td_attr = v;
				break;
		};
	};

	if(params.rows == void(0)){
		rows = Math.ceil(loop_count / cols);
	};

	if(params.cols == void(0)){
		cols = Math.ceil(loop_count / rows);
	};

	html.append('<table', table_attr, '>');

	for(r=0;r<rows; r++)
	{
		html.append('<tr', cycle('tr', tr_attr, r), '>');
		rx = (vdir == 'down') ? r*cols : (rows-1-r)*cols;

		for(c=0;c<cols;c++)
		{
			x = (hdir == 'right') ? rx + c : rx + cols -1 -c;
			if(inner != 'cols'){
				x = Math.floor(x / cols) + (x % cols) * rows;
			};

			if(x < loop_count){
				html.append('<td', cycle('td', td_attr, c) ,'>', loop[x] ,'</td>');
			}else{
				html.append('<td', cycle('td', td_attr, c) ,'>', trailpad ,'</td>');
			};
		};

		html.append('</tr>');
	};

	html.append('</table>');

	return html.toString('\n');
};

function jsmarty_function_html_table_cycle(n, v, n)
{
	var h = (v instanceof Array) ? v[n % v.length] : v;
	return (h) ? ' '+ h : '';
};