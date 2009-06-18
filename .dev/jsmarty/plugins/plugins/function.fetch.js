/**
 * renderer plugin
 * @package renderer
 * @subpackage plugins
 */

/**
 * renderer {fetch} function plugin
 *
 * Type:     function<br />
 * Name:     fetch<br />
 * Original: Smarty {fetch} function plugin
 *
 * @author   shogo < shogo4405 at gmail dot com>
 * @version  1.0.0RC2
 * @see      http://smarty.php.net/manual/en/language.function.fetch.php
 * @param    {Object}  params parameters
 * @param    {JSmarty} renderer renderer
 * @return   {String}
 */
var jsmarty_function_fetch_caches = {};

function jsmarty_function_fetch(params, renderer)
{
	var name, cache, caches = jsmarty_function_fetch_caches;

	if(!('file' in params))
	{
		renderer.trigger_error('fetch : parameter "file" cannot be empty', 'die');
		return;
	};

	name = renderer.get_resource_name(params.file);
	cache = caches[name] || function()
	{
		caches[name] = new JSmarty.Classes.Item(name);
		return caches[name].load(renderer);
	}();

	if(params.assign)
	{
		renderer.assign(params.assign, cache.get('src'));
		return;
	};

	return cache.get('src');
};

