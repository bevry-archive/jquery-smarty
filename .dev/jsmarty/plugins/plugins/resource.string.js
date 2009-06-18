/**
 * JSmarty plugin
 * @package JSmarty
 * @subpackage plugins
 */

/**
 * JSmarty string resource plugin
 *
 * Type:     resource<br />
 * Name:     string<br />
 *
 * @author   shogo < shogo4405 at gmail dot com>
 * @version  1.0.2
 * @type     Array
 */

var jsmarty_resource_string =
[
	/**
	 * get a source of resource
	 * @param {String} name of template
	 * @param {HashMap} data templateObject
	 * @param {JSmarty} the instance of JSmarty
	 * @return {Boolean} 
	 */
	function(name, item, renderer)
	{
		item.put('src', name);
		return true;
	},
	/**
	 * get a timestamp of resource
	 * @param {String} name of template
	 * @param {HashMap} data of templateObject
	 * @param {JSmarty} the instance of JSmarty
	 * @return {Boolean} 
	 */
	function(name, item, renderer)
	{
		try{
			item.put('timestamp', JSmarty.System.timestamp(document.lastModified));
		}catch(e){
			item.put('timestamp', JSmarty.System.timestamp());
		};
		return true;
	},
	/**
	 * secure?
	 * @return {Boolean} true
	 */
	function(){ return true; },
	/**
	 * trusted?
	 * @return {Boolean} true
	 */
	function(){ return true; }
];
