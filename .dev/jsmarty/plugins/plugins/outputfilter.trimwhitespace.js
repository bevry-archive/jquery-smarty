/**
 * Smarty plugin
 * @package Smarty
 * @subpackage plugins
 */

/**
 * JSmarty trimwhitespace outputfilter plugin
 * 
 * Type:     outputfilter<br />
 * Name:     trimwhitespace<br />
 * 
 * @author   shogo < shogo4405 at gmail dot com>
 * @version  1.0.0RC1
 * @param    {String} source
 * @param    {JSmarty} jsmarty
 * @return   {String}
 */
function jsmarty_outputfilter_trimwhitespace(source, jsmarty)
{
	var trim = JSmarty.Plugin.get('php.trim');

	var pretxt = /<pre>.*?<\/pre>/ig;
	var script = /<script[^>]+>.*?<\/script>/ig;
	var txtara = /<textarea[^>]+>.*?<\/textarea>/ig;

	var script_blocks = source.match(script);
	source = source.replace(script, '@@@JSMARTY:TRIM:SCRIPT@@@');

	var pretxt_blocks = source.match(pretxt);
	source = source.replace(pretxt, '@@@JSMARTY:TRIM:PRE@@@');

	var txtara_blocks = source.match(txtara);
	source = source.replace(txtara, '@@@JSMARTY:TRIM:TEXTAREA@@@');

	source = trim(source.replace(/((\?<!\?>)\n)[\s]+/m, '$1'));

	source = jsmarty_outputfilter_trimwhitespace_replace('@@@SMARTY:TRIM:SCRIPT@@@', script_blocks, source);
	source = jsmarty_outputfilter_trimwhitespace_replace('@@@JSMARTY:TRIM:PRE@@@', pretxt_blocks, source);
	source = jsmarty_outputfilter_trimwhitespace_replace('@@@JSMARTY:TRIM:TEXTAREA@@@', txtara_blocks, source);

	return source;
};

function jsmarty_outputfilter_trimwhitespace_replace(search_str, replace, subject)
{
	while(subject.indexOf(search_str) != -1)
		subject = subject.replace(search_str, replace);
	return subject;
};