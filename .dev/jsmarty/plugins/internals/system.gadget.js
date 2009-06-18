(function()
{
	var path = JSmarty.System.path;

	JSmarty.Classes.extend(JSmarty.prototype)
	({
		compile_dir : path + 'templates_c',
		plugins_dir : [path + 'plugins'].concat(JSmarty.Plugin.repos),
		template_dir : path + 'templates'
	});
})();
