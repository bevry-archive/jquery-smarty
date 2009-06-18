/**
 * JSmarty plugin
 * @package JSmarty
 * @subpackage plugins
 */

/**
 * JSmarty {textformat} function plugin
 *
 * Type:     function<br />
 * Name:     textformat<br />
 * Original: Smarty {textformat} block plugin
 *
 * @author   shogo < shogo4405 at gmail dot com>
 * @version  1.0.0RC2
 * @see      http://smarty.php.net/manual/en/language.block.textformat.php
 * @param    {Object} params
 * @param    {String} content
 * @param    {JSmarty} jsmarty
 * @return   {String}
 */

function jsmarty_block_textformat(params, content, jsmarty)
{
	if(!content) return;

	var wordwrap = JSmarty.Plugin.get('php.wordwrap');
	var str_repeat = JSmarty.Plugin.get('php.str_repeat');

	var output = '', paragraphs;
	var style = null;
	var wrap = 80;
	var assign = null;
	var indent = 0;
	var wrap_cut = false;
	var wrap_char = '\n';
	var indent_char = ' ';
	var indent_first = 0;

	for(k in params)
	{
		if(!params.hasOwnProperty(k)) continue;

		switch(k)
		{
			case 'style':
				style = params[k]; break;
			case 'wrap':
				wrap = parseInt(params[k]); break;
			case 'assign':
				assign = params[k]; break;
			case 'indent':
				indent = parseInt(params[k]); break;
			case 'wrap_cut':
				wrap_cut = parseInt(params[k]); break;
			case 'wrap_char':
				wrap_char = params[k]; break;
			case 'indent_char':
				indent_char = params[k]; break;
			case 'indent_first':
				indent_first = parseInt(params[k]); break;
			default:
				jsmarty.trigger_error("textformat: unknown attribute");
				break;
		};
	};

	switch(style)
	{
		case 'email':
			wrap = 72;
			break;
	};

	paragraphs = content.split(/\r?\n\r?\n/g);

	for(var x = 0, y = paragraphs.length; x < y; x++)
	{
		if(paragraphs[x] == '') continue;
		paragraphs[x] = paragraphs[x].replace(/\s+/,' ');
		paragraphs[x] = paragraphs[x].replace(/^(\s+)|(\s+)$/,'');
		if(indent_first > 0)
			paragraphs[x] = str_repeat(indent_char, indent_first) + paragraphs[x];
		paragraphs[x] = wordwrap(paragraphs[x], wrap - indent, wrap_char, wrap_cut);
		if(indent > 0)
			paragraphs[x] = paragraphs[x].replace(/^/gm, str_repeat(indent_char, indent));
	};

	output = paragraphs.join(wrap_char + wrap_char);

	if(assign)
	{
		jsmarty.assign(assign, output);
		output = '';
	};

	return output;
};