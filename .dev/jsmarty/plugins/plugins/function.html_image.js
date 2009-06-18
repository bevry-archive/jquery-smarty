/**
 * JSmarty plugin
 * @package JSmarty
 * @subpackage plugins
 */

/**
 * JSmarty {html_image} function plugin
 *
 * Type:     function<br />
 * Name:     html_image<br />
 * Original: Smarty {html_image} function plugin
 *
 * @author   shogo < shogo4405 at gmail dot com>
 * @version  1.0.0RC1
 * @see      http://smarty.php.net/manual/en/language.function.counter.php
 * @param    {Object} params
 * @param    {JSmarty} jsmarty
 * @return   {String}
 */
function jsmarty_function_html_image(params, jsmarty)
{
	if(!params.file)
	{
		jsmarty.trigger_error("html_image: missing 'file' parameter");
		return '';
	};

	var img, path;

	var dpi;
	var alt = '';
	var file = '';
	var width = '';
	var extra = [];
	var height = '';
	var prefix = '';
	var suffix = '';
	var basedir = '';
	var path_prefix = '';

	for(k in params)
	{
		if(!params.hasOwnProperty(k)) continue;

		switch(k)
		{
			case 'dpi':
				dpi = params[k];
				break;
			case 'file':
				file = params[k];
				break;
			case 'width':
				width = params[k];
				break;
			case 'height':
				height = paramas[k];
				break;
			case 'basedir':
				basedir = params[k];
				break;
			case 'path_prefix':
				path_prefix = params[k];
				break;
			case 'link':
			case 'href':
				prefix = '<a href="'+ params[k] +'">';
				suffix = '</a>';
				break;
			case 'alt':
				alt = params[k];
				break;
			default:
				extra.push(params[k]);
				break;
		};
	};

	if(file.charAt(0) == '/')
		path = basedir + file;
	else
		path = file;

	if(params.width == void(0) || params.height == void(0))
	{
		img = new Image();
		img.src = path;

		if(params.width == void(0))
			width = img.width;
		if(params.height == void(0))
			height = img.height;
	};

	return prefix + '<img src="'+ path_prefix + file +'" width="'+ width +
		   '" height="'+ height +'"'+ extra.join(' ') +' />' + suffix;
};