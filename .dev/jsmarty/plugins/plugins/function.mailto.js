/**
 * JSmarty plugin
 * @package JSmarty
 * @subpackage plugins
 */

/**
 * JSmarty {mailto} function plugin
 *
 * Type:     function<br />
 * Name:     mailto<br />
 * Original: Smarty {mailto} function plugin<br />
 *
 * @author   shogo <shogo4405 at gmail dot com>
 * @version  1.0.0RC1
 * @see      http://smarty.php.net/manual/en/language.function.mailto.php
 * @param    {Object} params
 * @param    {JSmarty} jsmarty
 * @return   {String}
 */

function jsmarty_function_mailto(params, jsmarty)
{
	if(!params.address)
	{
		jsmarty.trigger_error("mailto: missing 'address' parameter");
		return '';
	};

	var k, i = 0 , mail_parms = [];
	var extra, mail_parm_vals, text, address, encode;

	extra = mail_parm_vals = '';
	text = address = params.address;

	for(k in params)
	{
		switch(k)
		{
			case 'cc':
			case 'bcc':
			case 'followupto':
				mail_parms[i++] = k + '=' + params[k].replace('%40','@');
				break;
			case 'subject':
			case 'newsgroups':
				mail_parms[i++] = k + '=' + params[k];
				break;
			case 'extra':
				extra = params[k];
				break;
			case 'text':
				text = params[k];
				break;
		};
	};

	for(k=0;k<i;k++)
	{
		mail_parm_vals += (0==i) ? '?' : '&';
		mail_parm_vals += mail_params[k];
	};

	address += mail_parm_vals;
	encode = (params.encode) ? params.encode : 'none';

	switch(encode)
	{
		case 'hex':
			var hexText = [], hexAddress = [];
			for(k=0,f=address.length;k<f;k++)
			{
				if(address.charAt(k).match(/\w/))
					hexAddress[k] = '%' + address.charCodeAt(k).toString(16);
				else
					hexAddress[k] = address.charAt(k);
			};
			for(k=0,f=text.length;k<f;k++)
				hexText[k] = '&#' + text.charCodeAt(k) +';';
			mailto = "&#109;&#97;&#105;&#108;&#116;&#111;&#58;";
			return '<a href="'+ mailto + hexAddress.join('') +'"'+ extra +'>'+ hexText.join('') +'</a>';
		case 'none':
			return '<a href="mailto:'+ address +'" '+ extra +'>'+  text +'</a>';
		case 'javascript':
			var enc = [], str = 'document.write(\'<a href="mailto:'+ address +'" '+ extra +'>'+ text +'</a>\');';
			for(k=0,f=str.length;k<f;k++) enc[k] = '%' + str.charCodeAt(k).toString(16);
			return '<script type="text/javascript">eval(unescape(\''+ enc.join('') +'\'))</'+'script>';
		case 'javascript_charcode':
			var ord = [], str = '<a href="mailto:'+ address +'" '+ extra +'>'+  text +'</a>';
			for(k=0,f=str.length;k<f;k++) ord[k] = str.charCodeAt(k);
			str =
			[
				'<script type="text/javascript" language="JavaScript">',
				'document.write(String.fromCharCode('+ ord.join() +'))',
				'</'+'script>'
			];
			return str.join('\n');
		default:
			jsmarty.trigger_error("mailto: 'encode' parameter must be none, javascript or hex");
			return '';
	};
};