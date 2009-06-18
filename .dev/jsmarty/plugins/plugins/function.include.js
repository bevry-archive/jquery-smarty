/**
 * JSmarty plugin
 * @package JSmarty
 * @subpackage plugins
 */

/**
 * JSmarty {include} function plugin
 *
 * Type:     function<br />
 * Name:     include<br />
 *
 * @author   shogo < shogo4405 at gmail dot com>
 * @version  1.0.0RC2
 * @param    {Object} params
 * @param    {JSmarty} renderer
 * @return   {String}
 */
function jsmarty_function_include(params, renderer)
{
	if(!('file' in params))
	{
		renderer.trigger_error('fetch : parameter "file" cannot be empty', 'die');
		return;
	};

	var i, temp, Templatec = JSmarty.Templatec;
	var templateName = renderer.get_resource_name(params.file);
	var result, item = new JSmarty.Classes.Item(templateName);

	if
	(
		Templatec.isCompiled(item, renderer.force_compile) ||
		Templatec.newTemplate(item.load(renderer), renderer.get_compiler())
	)
	{
		delete(params.file);
		temp = renderer.$vars;
		renderer.$vars = JSmarty.Plugin.get('util.clone')(temp);
		for(i in params){
			renderer.assign(i, params[i]);
		};
		result = Templatec.call(templateName, renderer);
		renderer.$vars = temp;
	};

	return result;
};
