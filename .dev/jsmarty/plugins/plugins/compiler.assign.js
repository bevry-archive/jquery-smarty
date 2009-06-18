/**
 * JSmarty plugin
 * @package JSmarty
 * @subpackage plugins
 */

/**
 * JSmarty {assign} compiler plugin
 *
 * Type:     conmpiler<br />
 * Name:     assign<br />
 * Original: Smarty {assign} compiler plugin
 *
 * @author   shogo < shogo4405 at gmail dot com>
 * @version  1.0.0RC1
 * @param    {Module}
 * @param    {Context}
 * @return   {String}
 */
function jsmarty_compiler_assign(module, context)
{
	var key, value;

	var buf = new JSmarty.Classes.Buffer();
	var params = module.toObject(module.toParams());

	return buf.append('$.assign("',params['var'],'","',params.value,'");').toString();
};
