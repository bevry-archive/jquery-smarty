var jsmarty_resource_script =
[
	function(name, item, renderer)
	{
		try
		{
			item.put('src', JSmarty.Browser.getCurrentScript().text);
			return true;
		}
		catch(e)
		{
			renderer.trigger_error(e);
		};

		return false;
	},
	function(name, item, renderer)
	{
		try{
			item.put('timestamp', JSmarty.System.timestamp(document.lastModified));
		}catch(e){
			item.put('timestamp', JSmarty.System.timestamp());
		};

		return true;
	},
	function(){ return true; },
	function(){ return true; }
];
