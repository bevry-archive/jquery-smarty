(function($)
{
	if(typeof($) == 'undefiend'){ return; };

	var renderer = new JSmarty();

	function fetch()
	{
		var elementId = this.id;
		if(!!elementId){
			this.innerHTML = renderer.fetch('id:' + elementId);
		};
	};

	$.fn.assign = function()
	{
		renderer.assign.apply(renderer, arguments);
		return this;
	};

	$.fn.assignByRef = function()
	{
		renderer.assign_by_ref.apply(renderer, arguments);
		return this;
	};

	$.fn.fetch = function(resourceName)
	{
		switch(arguments.length)
		{
			case 0:
				this.each(fetch);
				return this;
			case 1:
				this.html(renderer.fetch(resourceName));
				return this;
		};
	};

	$.getRenderer = function(){ return renderer; };

})(window.jQuery);
