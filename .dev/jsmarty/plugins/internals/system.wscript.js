if(typeof(WScript) != 'undefined')
{
	JSmarty.System.outputString = function(){
		WScript.Echo(Array.prototype.join.call(argumetns,''));
	};
};

JSmarty.Classes.extend(JSmarty.System)
({
	READER : 1,
	WRITER : 2,
	APPEND : 8,
	ENCODING : -1,
	/**
	 * create a new FileSystemObject
	 * @return FileSystemObject
	 */
	newFileSystemObject : function(){
		return new ActiveXObject('Scripting.FileSystemObject');
	},
	read : function(f, d)
	{
		var text, cont, file;
		var i, p = this.buildPath(f, d);
		var fso = this.newFileSystemObject();

		for(i=p.length-1;0<=i;i--)
		{
			if(fso.FileExists(p[i]))
			{
				file = fso.GetFile(p[i]);
				text = file.OpenAsTextStream(this.READER);
				cont = text.ReadAll();
				this.modified[f] = file.DateLastModified;
				text.Close();
				break;
			};
		};

		// fso release
		fso = text = file = null;

		return cont || function()
		{
			JSmarty.Error.log('System', 'can\'t load the ' + f);
			return null;
		}();
	},
	write : function(p, c)
	{
		var text, file;
		var fso = this.newFileSystemObject();

		file = fso.GetFile(p);
		text = file.OpenAsTextStream(this.WRITER);
		text.Write(c);
		text.Close();

		// fso release
		fso = text = file = null;
	}
});
