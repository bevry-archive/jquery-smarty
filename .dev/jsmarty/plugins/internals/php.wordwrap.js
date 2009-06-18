/**
 * wordwrap function
 *
 * @subpackages Strings
 * @author shogo < shogo4405 at gmail dot com >
 * @version 1.0.1.1
 * @see http://www.php.net/wordwrap
 * @param  {String} str
 * @param  {Number} width
 * @param  {String} break_word
 * @param  {Boolean} cut
 * @return {String}
 */
function wordwrap(str, width, break_word, cut)
{
	width = width || 75;
	break_word = break_word || '\n';

	str = str.replace(/\r?\n/g,' ');

	var line, words = str.split(' ');
	var k, f, i = 0, p = 0, len = 0, txt = [];
	var regexp = RegExp('.{'+ width +'}','g');

	for(k=0,f=words.length;k<f;k++)
	{
		len += words[k].length || 1;

		if(width <= len)
		{
			len = 0;
			if(cut)
			{
				line = words.slice(p, k + 1).join(' ');
				txt[i++] = line.match(regexp).join(break_word) + break_word +
						   line.slice(-(line.length % width));
				p = k + 1, k++;
				continue;
			};

			txt[i++] = words.slice(p, k).join(' '), p = k;
		};
	};
	txt[i++] = words.slice(p, f).join(' ');

	return txt.join(break_word);
};