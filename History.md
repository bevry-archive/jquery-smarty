## History

v0.5.0-dev, June 29, 2010
- No longer autoloads (caused too many loading sync issues)
- Updated $.console, as google chrome hates function aliasing
- Wrapped all evals in try-catch as google chrome hates evals
- Uses YUI Compressor for jquery smarty. This is due to closure not liking evals.
- No longer uses date.js

v0.4.3-dev, May 17, 2008
- Updated the php.js library to a new version, and now includes minified
- Updated the date library to a much newer version (+extras), and is now packed
- Added support for the runat tag (jaxer compatiable)

v0.4.2-dev, May 04, 2008
- Auto import of resources now fixes never cache issue

v0.4.1-dev, May 1, 2008
- Fixed/Added support for not named foreach loops
- Imports resources automaticly now

v0.4.0-dev, April 11, 2008
- Added support for multiple modifiers at once
- Added auto_update modifier, this is another HUGE step to true web 2.0

v0.3.1-dev, April 06, 2008
- Added cycle, debug, foreach functions.
- Fixed serious flaw in else/elseif handling.

v0.3.0-dev, April 04, 2008
- Updated $.Smarty.varloc, works a bit better, but also more limited (shouldn't be a problem though)
- Added onchange, so $.Smarty.onchange('something.something', function(old_value, new_value){});
  - This is extremely important for AJAX/Web2.0 work.

v0.2.1-dev, March 20, 2008
- Fixed:
  - single char attribute regex problem
  - multi line comments
- Added: date_format, default, fsize_format,
- Includes: php2.js, DateJS

v0.2.0-dev, February 19, 2008
- Initial Release