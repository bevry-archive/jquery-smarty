/**
 * jQuery Smarty Plugin (jQSmarty) - Smarty Templating Engine for jQuery
 * Copyright (C) 2008 Benjamin Arthur Lupton
 * http://plugins.jquery.com/project/jquery_smarty
 *
 * This file is part of jQuery Smarty Plugin (jQSmarty).
 * 
 * jQuery Smarty Plugin (jQSmarty) is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 * 
 * jQuery Smarty Plugin (jQSmarty) is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 * 
 * You should have received a copy of the GNU Affero General Public License
 * along with jQuery Smarty Plugin (jQSmarty).  If not, see <http://www.gnu.org/licenses/>.
 *
 * @name jqsmarty: jquery.smarty.js
 * @package jQuery Smarty Plugin (jQSmarty)
 * @version 0.3.0-dev
 * @date April 04, 2008
 * @category jquery plugin
 * @author Benjamin "balupton" Lupton {@link http://www.balupton.com}
 * @copyright (c) 2008 Benjamin Arthur Lupton {@link http://www.balupton.com}
 * @license GNU Affero General Public License - {@link http://www.gnu.org/licenses/agpl.html}
 * @example Visit {@link http://jquery.com/plugins/project/jquery_smarty} for more information.
 * 
 * 
 * I would like to take this space to thank the wonderful contributors to the following projects:
 * - jQuery {@link http://jquery.com/}
 * - Smarty {@link http://www.smarty.net/}
 * - JSmarty {@link http://code.google.com/p/jsmarty/}
 * - PHP.JS {@link http://kevin.vanzonneveld.net/techblog/category/php2js/}
 * - DateJS {@link http://code.google.com/p/datejs/}
 *
 **
 ***
 * CHANGELOG
 **
 * v0.3.0-dev, April 04, 2008
 * - Updated $.Smarty.varloc, works a bit better, but also more limited (shouldn't be a problem though)
 * - Added onchange, so $.Smarty.onchange('something.something', function(old_value, new_value){});
 *   - This is extremely important for AJAX/Web2.0 work.
 * 
 * v0.2.1-dev, March 20, 2008
 * - Fixed:
 *   - single char attribute regex problem
 *   - multi line comments
 * - Added: date_format, default, fsize_format, 
 * - Includes: php2.js, DateJS
 * 
 * v0.2.0-dev, February 19, 2008
 * - Initial Release
 * 
 */

// Start of our jQuery Plugin
(function($)
{	// Create our Plugin function, with $ as the argument (we pass the jQuery object over later)
	// More info: http://docs.jquery.com/Plugins/Authoring#Custom_Alias
	
	// Declare our class
	$.SmartyClass = function ( )
	{	// This is the handler for our constructor
	};

	// Extend jQuery elements for Lightbox
	String.prototype.populate = $.fn.populate = function ( options )
	{	// Init a el for Lightbox
		// Eg. $('#gallery a').lightbox();
		
		// If need be: Instantiate $.LightboxClass to $.Lightbox
		$.Smarty = $.Smarty || new $.SmartyClass();
		
		// Establish options
		options = $.extend({data:null}, options);
		
		// Call
		var result;
		if ( typeof this.substring !== 'undefined' )
		{	// Within a string 
			result = $.Smarty.populate(this);
		}
		else
		{	// Within a object
			$.each($(this), function(){
				var $this = $(this);
				return $this.html($.Smarty.populate($(this).html()));
			});
			result = this;
		}
		
		// Done
		return result;
	};
	
	// Define our class
	$.extend($.SmartyClass.prototype,
	{	// Our Plugin definition
		
		// -----------------
		// Data
		
		data: {
			'build':'0.3.0-dev (April 04, 2008)'
		},
		
		config: {
			// I don't see the use for this currently
		},
		
		templates: {
			
		},
		
		onchange_funcs: {
			
		},
		
		// -----------------
		// Locations
		
		base_url:		'',
		template_url:	'templates/',
		
		// -----------------
		// Config
		
		//ldelim:			'%{',
		//rdelim:			'}%',
		// {([^\s'"}|:]*)(?:[|:]?("[^"\\]*(?:\\.[^"\\]*)*"|'[^'\\]*(?:\\.[^'\\]*)*'|[^\s'"}]+)\s*)*}(?:(.+?){\/\1})?
		// {([^\s'"}]*)\s*((?:(?:"[^"\\]*(?:\\.[^"\\]*)*"|'[^'\\]*(?:\\.[^'\\]*)*'|[^\s'"}]+)\s*)*)}(?:(.+?){\/\1})?
		search: {
			//tags:			/{(?:([^\s'"}]+)[\s}])?(?:((?:(?:"[^"\\]*(?:\\.[^"\\]*)*"|'[^'\\]*(?:\\.[^'\\]*)*'|[^\s'"}]+)\s*?)+)})?(?:(.+?){\/\1})?/,
			tags:			/{((?:"[^"\\]*(?:\\.[^"\\]*)*"|'[^'\\]*(?:\\.[^'\\]*)*'|[^\s'"}]+)*)\s*((?:(?:"[^"\\]*(?:\\.[^"\\]*)*"|'[^'\\]*(?:\\.[^'\\]*)*'|[^\s'"}]+)\s*)*)}(?:(.+?){\/\1})?/,
			tags_g:			/{((?:"[^"\\]*(?:\\.[^"\\]*)*"|'[^'\\]*(?:\\.[^'\\]*)*'|[^\s'"}]+)*)\s*((?:(?:"[^"\\]*(?:\\.[^"\\]*)*"|'[^'\\]*(?:\\.[^'\\]*)*'|[^\s'"}]+)\s*)*)}(?:(.+?){\/\1})?/g,
			attributes:		/(?:[\s]*(?:([^=\s]+?)=)?((?:"[^"\\]*(?:\\.[^"\\]*)*"|'[^'\\]*(?:\\.[^'\\]*)*'|[^\s'"]+)+))+?/,
			attributes_g:	/(?:[\s]*(?:([^=\s]+?)=)?((?:"[^"\\]*(?:\\.[^"\\]*)*"|'[^'\\]*(?:\\.[^'\\]*)*'|[^\s'"]+)+))+?/g,
			modifiers:		/(?:[|:]("[^"\\]*(?:\\.[^"\\]*)*"|'[^'\\]*(?:\\.[^'\\]*)*'|[^|:]+))+?/,
			modifiers_g:	/(?:[|:]("[^"\\]*(?:\\.[^"\\]*)*"|'[^'\\]*(?:\\.[^'\\]*)*'|[^|:]+))+?/g
		},
		
		operators: {
	        eq: '==',
	        ne: '!=',
	        neq: '!=',
	        gt: '>',
	        lt: '<',
	        ge: '>=',
	        gte: '>=',
	        le: '<=',
	        lte: '<=',
	        // not: '!',
	        and: '&&',
	        or: '||',
	        mod: '%',
			
			'==':'==',
			'===':'===',
			'!=':'!=',
			'>':'>',
			'<':'<',
			'>=':'>=',
			'<=':'<=',
			'!':'!',
			'%':'%',
			
			'(':'(',
			')':')'
		},
		
		// -----------------
		// Plugins
		
		modifiers: {
			capitalize: function(value)
			{	// Captilize the value
				var result = ucwords(value);
				return result;
			},
			cat: function(value, cat)
			{	// Catenate  the value
				// Process
				return value+''+cat;
			},
			count_characters: function(value, include_spaces)
			{	//
				// Process
			    if (include_spaces)
			       return value.length;
				return value.match(/[^\s]/g).length;
			},
			count_paragraphs: function(value)
			{	//
				// count \r or \n characters
			    return value.match(/[\r\n]+/g).length;
			},
			count_sentences: function(value)
			{	//
				// find periods with a word before but not after.
			    return value.match(/[^\s]\.(?!\w)/g).length;
			},
			count_words: function(value)
			{	//
			    // count matches that contain alphanumerics
			    return value.match(/[a-zA-Z0-9\\x80-\\xff]+/g).length;
			},
			date_format: function(value, format, default_date)
			{	/**
				 * @author   Benjamin "balupton" Lupton, shogo < shogo4405 at gmail dot com>
				 * @see      http://smarty.php.net/manual/en/language.modifier.date.format.php
				 */
				if( !value && !default_date ) { return '!CHECK THE SYNTAX FOR [date_format]!'; };
				return strftime((format || '%b %e %Y'), (value || default_date));
			},
			'default': function (value, default_value)
			{	//
				return value || default_value;
			},
			fsize_format: function (size, format, precision)
			{
				// Defaults
				format = format || '';
				precision = precision || 2;
				// Sizes
			    sizes = {
					'TB':1099511627776,
					'GB':1073741824,
					'MB':1048576,
					'KB':1024,
					'B':1
				}
			    // Get "human" filesize
				var result = '';
			    $.each(sizes, function ( unit, bytes ) {
			        if ( size > bytes || unit == strtoupper(format) ) {
			            result = number_format(size / bytes, precision)+' '+unit;
						return false; // break;
			        }
			    });
				// Return
				return result;
			}
		},
			
		functions: {
			'*': function(content, attribute)
			{	// Comment
				return content.populate();
			},
			assign: function ( content, attributes )
			{	// Assign a variable
				// console.log('assign', [content, attributes])
				// Check
				if ( typeof attributes['var'] === 'undefined' || typeof attributes['value'] === 'undefined' )
				{	// Error
					return '!CHECK THE SYNTAX FOR [assign]!';
				}
				// Assign
				var value = attributes['value'];
				if ( value === '[]' )
				{	// Make an object
					value = {};
				}
				else
				{	// Not array, so escape
					// value = '"'+$.Smarty.escape(attributes['value'])+'"';
				}
				var key = attributes['var'];
				$.Smarty.assign(key, value);
				// Return
				return content.populate();
			},
			capture: function(content, attributes)
			{	// {capture} is used to collect the output of the template between the tags into a variable instead of displaying it.
				return content.populate();
			},
			'if': function(content, attributes)
			{	// Include and populate a template
				
				// Evaluate the IF
				// PHP functions have already been defined by php.js
				// Operators have already been converted by core
				
				/*
				// Arrayify
				var a = [];
				for ( i in attributes )
				{	// Push values from object to array
					a.push(attributes[i]);
				}
				attributes = a; delete a;
				*/
				
				// $.Smarty.debug('IF:', content, attributes);
				
				// Prepare statement
				var statements = '';
				var values = [];
				
				// Build statement
				var attribute, statement, is, left, middle, right;
				function reset()
				{	// ($a / $b) % 2 != 0
					statement = '';
					is = false;
					left = ''; // ($a / $b)
					middle = ''; // % 2
					right = '== 0'; // != 0
				}	reset();
				function add()
				{	//
					statement = is ? '('+statement+left+') '+middle+right : statement;
					statements += statement;
				}
				for ( i in attributes )
				{	// Cycle through attributes
					attribute = attributes[i];
					// Figure out what to do
					switch ( attribute )
					{
						case 'is':
							is = true; // we are a is block
							break;
						case 'not':
							right = right === '== 0' ? '!= 0' : '== 0';
							break;
						case 'div':
							break;
						case 'even':
							middle = '% 2 ';
							break;
						case 'odd':
							right = right === '== 0' ? '!= 0' : '== 0';
							middle = '% 2 ';
							break;
						case 'by':
							left = left+' / ';
							break;
						case '||':
						case '&&':
							add();
							statements += attribute+' ';
							reset();
							break;
						default:
							// $.Smarty.debug(attribute);
							if ( typeof $.Smarty.operators[attribute] !== 'undefined')
							{	// Operator
								statement += attribute+' ';
							}
							else
							{	// Value
								// We should be the last value in a IS statement (so we used a by)
								// OR a normal statement attribute
								values.push(attribute);
								if ( is )
								{
									left += 'values['+(values.length-1)+'] ';
								}
								else
								{
									statement += 'values['+(values.length-1)+'] ';
								}
								// $.Smarty.debug('attribute: ',attribute, values);
							}
							break;
					}
				}	add();
				
				// Evaluate the statement
				// $.Smarty.debug('IF: ['+statements+']', attributes);
				var result = eval(statements);
				
				// Figure out what to do
				if ( result )
				{	// Result is true, so disregard any else and elseif
					var regex = /^(.*){(?:elseif|else)([^}]*)}/;
					var matches = content.match(regex);
					if ( matches !== null )
					{	// We have something to do
						// $.Smarty.debug(content, matches);
						content = matches[1];
					}
				}
				else
				{	// Result is false, so move on to an else or elseif
					var regex = /{(?:elseif|else)([^}]*)}(.*)$/;
					var matches = content.match(regex);
					if ( matches !== null )
					{	// We have something to do
						content = matches[2];
						attributes = $.Smarty.attributes(matches[1]);
						content = $.Smarty.functions['if'](content, attributes);
					}
				}
				
				// Done
				return content.populate();
			},
			include: function(content, attributes)
			{	// Include and populate a template
				var template = attributes.file;
				var template_id = 'smarty_include__'+template.replace(/[^\w_]/g,'_');
				$.Smarty.fetch(template, template_id);
				return '<span id="'+template_id+'"></span><script type="text/javascript">$.Smarty.include("'+template+'","'+template_id+'");</script>';
			},
			literal: function(content, attributes)
			{	// Don't do any processing on the content
				return content;
			},
			js: function(content, attributes)
			{	// Shortcut for js, don't ask my why you would want this?
				return '<script type="text/javascript">'+$content+'</script>';
			},
			section: function(content, attributes)
			{	// Sections
				// Prepare
				var name = attributes.name; // The name of the section
				var loop = attributes.loop; // Value to determine the number of loop iterations
				var start = attributes.start || 0; // The index position that the section will begin looping. If the value is negative, the start position is calculated from the end of the array. For example, if there are seven values in the loop array and start is -2, the start index is 5. Invalid values (values outside of the length of the loop array) are automatically truncated to the closest valid value.
				var step = attributes.step || 1; // The step value that will be used to traverse the loop array. For example, step=2 will loop on index 0,2,4, etc. If step is negative, it will step through the array backwards.
				var max = attributes.max || loop.length; // Sets the maximum number of times the section will loop.
				var show = attributes.show || true; // Determines whether or not to show this section
				// Prepare
				var regex_g = eval('/{.*?\\['+name+'\\].*?}/g');
				var regex = eval('/({.*?\\[)('+name+')(\\].*?})/');
				// Process
				var result = '';
				if ( typeof loop === 'object' )
				{	// Cycle through the object
					for ( var section; start < max ; start += step )
					{	// Traverse
						section = content.replace(regex_g, function(match){
							match = match.match(regex);
							match = match[1]+start+match[3];
							return match;
						});
						result += section.populate();
					}
				}
				// Return
				return result;
			}
		},
		
		// -----------------
		// Functions
		
		fetch: function ( template, template_id /* optional for includes */ )
		{
			// Cache
			if ( typeof $.Smarty.templates[template] !== 'undefined' )
			{	// Already in cache
				if ( $.Smarty.templates[template] === 'fetching' )
				{	// Still fetching
					return false;
				}
				return $.Smarty.templates[template];
			}
			// Fetch
			var template_url = $.Smarty.template_url+template;
			$.get(template_url, function(data) {
				$.Smarty.templates[template] = data;
				//$.Smarty.debug(template, 'fetched');
				if ( typeof template_id !== 'undefined' )
				{
					$.Smarty.include(template, template_id);
				}
			});
			//$.Smarty.debug(template, 'fetching');
			$.Smarty.templates[template] = 'fetching';
			return false;
		},
		
		include: function ( template, template_id )
		{	// Now why do we do this?
			// Because we can not guarantee that the html element is in the DOM by the time the template is fetched
			// So a script tag is added that calls this when the dom element is in the dom
			// Also, the template may not of been fetched yet, even though the el is in the DOM
			// So we then have a callback for when the data is fetched to go here again
			
			//$.Smarty.debug(template, 'check');
			// Fetch template
			var $template = $('#'+template_id);
			var data = $.Smarty.fetch(template,template_id);
			if ( $template.length !== 0 )
			{	// We are ready
				var data = $.Smarty.fetch(template,template_id);
				//$.Smarty.debug(template, 'data', data)
				if ( data )
				{	// Data has been fetch
					data = data.populate(); // populate the data
					$template.next('script').remove();
					$template.after(data);
					$template.remove();
				}
			}
			// Done
			return true;
		},
		
		// -----------------
		// Functions
		
		clearCache: function ( )
		{
			$.Smarty.templates = {};
		},
		
		populate: function(template){ // Populate the html
			template = new String(template);
			template = template.replace(/[\r\n]*/g, '');
			//$.Smarty.debug(template);
			return template.replace($.Smarty.search.tags_g, $.Smarty.tag_handler);
		},
		
		tag_handler: function(tag){ // Handle the tag
			// Explode the Tag
			//$.Smarty.debug("tag1: ",tag);
			tag = tag.match($.Smarty.search.tags);
			if ( !tag ) return ''; // already done
			//$.Smarty.debug("tag2: ",tag);
			// Extract
			var func = tag[1];
			if ( !func )
			{	// We have a modifier instead
				return $.Smarty.value(tag[2]);
			}
			var attributes = $.Smarty.attributes(tag[2]);
			var content = tag[3] || '';
			// Call the function
			content = $.Smarty.call(func, attributes, content);
			return content;
		},
		
		attributes: function ( attributes )
		{	// Fetch the attributes
			if ( !attributes )
			{	// Empty
				return [];
			}
			var attributes = (' '+attributes).match($.Smarty.search.attributes_g);
			// Sort out Attributes
			var attributes_new = {};
			for ( index in attributes )
			{
				var attribute = new String(attributes[index]).match($.Smarty.search.attributes);
				if ( attribute === null )
				{	// Continue
					continue;
				}
				if ( typeof attribute[1] === 'undefined' )
				{	// [ ' "blah"', undefined, '"blah"' ]
					var key = index;
					var value = attribute[0].replace(/^\s+|\s+$/g,''); // trim
				}
				else
				{	// [ ' var="hello"', 'var', '"hello"' ]
					var key = attribute[1];
					var value = attribute[2];
				}
				// Prepare
				// $.Smarty.debug("attribute: ", attribute, key, value)
				value = $.Smarty.value(value);
				// $.Smarty.debug("attribute: ", attribute, key, value)
				// Append
				attributes_new[key] = value;
			}
			attributes = attributes_new; delete attributes_new;
			// Done
			return attributes;
		},
		
		varloc: function ( value, prefix )
		{
			// Stringify value
			value = new String(value);
			// Turn class->var to class.var
			value = value.replace(/\-\>/g, '.');
			// Turn .something into ["something"]
			var parts = value.match(/([^.$['"\]]+)/g);
			value = '';
			for ( var i = 0, n = parts.length; i < n; ++i )
			{
				value += "['"+new String(parts[i])+"']";
			}
			// console.log('varloc:', value);
			// Do we have a prefix
			if ( prefix )
			{	// Just do the same, and prepend
				prefix = $.Smarty.varloc(prefix);
				value = prefix+value;
			}
			// Return
			return value;
		},
		
		assign: function ( key, value, preloc )
		{	// Assign
			
			// Prep
			preloc = preloc || '';
			var loc = $.Smarty.varloc(key, preloc);
			
			// What to do
			if ( typeof value === 'undefined' && typeof key === 'object' )
			{	// No value, so key is an object of data
				// So let's mix it up
				$.each(key, function(i, val){
					$.Smarty.assign(i, val, loc);
				});
			}
			else
			{	// There is a key and a value
				
				// Get loc
				var loc2 = '$.Smarty.data'+loc;
				// Get old value
				var old_value = eval(loc2);
				// Update value
				var call = loc2+' = value';
				// $.Smarty.debug('assign: ', call, value, old_value);
				eval(call);
				// Call changed
				$.Smarty.changed(loc, old_value, value);
			}
			
			// Done
		},
		
		onchange: function ( key, func )
		{	// Add onchange handler for key
			// Get locations
			var loc = $.Smarty.varloc(key);
			var loc2 = '$.Smarty.onchange_funcs'+loc;
			// Create array if need be
			eval(loc2+' = '+loc2+' || []');
			// Push onchange functions
			eval(loc2+'.push(func)');
		},
		
		changed: function ( key, old_value, new_value )
		{	// Trigger onchange functions for key, and pass value
			var loc = $.Smarty.varloc(key);
			try {
				var funcs = eval('$.Smarty.onchange_funcs'+loc);
			} catch (e) {
				return;
			};
			
			// Trigger functions
			if (!funcs) { return; }
			$.each(funcs, function(i, func){
				func(old_value, new_value);
			});
			
			// Now do trigger for object data
			var merged;
			if (typeof old_value === 'object' && typeof new_value === 'object') {
				merged = $.extend({}, old_value, new_value);
			} else if ( typeof old_value === 'object' ) {
				merged = old_value;
			} else if ( typeof new_value === 'object' ) {
				merged = new_value;
			}
			
			// Cycle
			if ( !merged ) { return; }
			$.each(merged, function(i, val){
				console.log('merged');
				var old_value2 = old_value[i];
				var new_value2 = new_value[i];
				var loc2 = $.Smarty.varloc(i, loc);
				$.Smarty.changed(loc2, old_value2, new_value2);
			});
			
			// Done
		},
		
		value: function ( value )
		{	// Have a value or variable
			// Extract parts {$smarty.now|date_format:"%Y/%m/%d"}
			if ( value === '||' )
			{	// Stop the OR from stuffing up our regex
				return value;
			}
			var parts = ('|'+value).match($.Smarty.search.modifiers_g);
			var parts_new = [];
			// $.Smarty.debug(value, parts);
			for (part in parts) { // Cycle
				var value = new String(parts[part]);
				value = value.match($.Smarty.search.modifiers);
				if ( value === null )
				{	// Continue
					continue;
				}	value = value[1];
				// Apply formatting
				var a = value.charAt(0);
				var z = value.charAt(value.length - 1);
				// $.Smarty.debug('part: '+value);
				switch ( true )
				{
					case !isNaN(value):
						// Number
						value = parseInt(value);
						break;
					case (a === '"' && z === '"'):
					case (a === "'" && z === "'"):
						// String
						value = eval(value);
						break;
					case (a === '$'):
						// Variable
						// $.Smarty.debug('value:',value, '$.Smarty.data'+$.Smarty.varloc(value), $.Smarty.data);
						value = eval('$.Smarty.data'+$.Smarty.varloc(value));
						// $.Smarty.debug(value, $.Smarty.data);
						break;
					case (a === '#' && z === "#"):
						// Config
						value = value.substring(1,value.length-1); // trim off #s
						value = eval('$.Smarty.config'+$.Smarty.varloc(value));
						break;
					case (typeof $.Smarty.operators[value] !== 'undefined'):
						// Operator
						// $.Smarty.debug('operator: ',value, $.Smarty.operators[value]);
						value = $.Smarty.operators[value];
						break;
					default:
						// Nothing to do
						// KEEP AS A STRING
						// $.Smarty.debug('value: '+value);
						break;
				}
				// Push
				parts_new.push(value);
			}
			parts = parts_new; delete parts_new;
			value = parts[0];
			// Apply Modifiers
			if ( typeof parts[1] !== 'undefined' )
			{	// Modifiers apply
				var modifier = parts[1];
				var attributes = [];
				for ( var i = 2, n = parts.length; i < n; ++i )
				{	// Push attributes
					attributes.push(parts[i]);
				}
				// Process modifier
				value = $.Smarty.call(modifier, attributes, value);
			}
			// Return value
			return value;
		},
		
		call: function ( func, attributes, content )
		{	// Has a function with attribute and content
			// Has a modifier with attributes and value
			// Are we a function
			//$.Smarty.debug("call1: ", func, attributes, content);
			// Apply Function
			// $.Smarty.debug(func, attributes, content);
			if ( !func )
			{	// Nothing to do
				return '';
			}
			content = content || "";
			content = String(content);
			var call = '$.Smarty.functions[func]';
			var Call = eval(call);
			if ( typeof Call !== 'undefined' )
			{	// Function/Modifier exists, so apply it
				//$.Smarty.debug(call);
				content = Call(content, attributes);
			}
			else
			{
				var call = '$.Smarty.modifiers[func]';
				var Call = eval(call);
				if ( typeof Call !== 'undefined' )
				{	// Function/Modifier exists, so apply it
					call += '("'+content.replace(/"/g, '\"')+'",';
					for ( index in attributes )
					{
						call += 'attributes['+index+'],';
					}
					call = call.substring(0,call.length-1);
					call += ')';
					
					//$.Smarty.debug(call);
					content = eval(call);
				}
				else
				{	// No function for it
					if ( !content )
					{	// No function because we are just a plain variable
						content = $.Smarty.value(func); // so set content as the variable
					}
				}
			}
			
			//$.Smarty.debug("call2: ", func, attributes, content);
			// Return the content
			return content;
		},
		
		escape: function ( value, quote )
		{	// Redundant, include varname instead
			if ( typeof quote === 'undefined' )
			{	quote = '"';	}
			// alert(value);
			return new String(value).replace(eval('/'+quote+'/g'), '\\'+quote);
		},
		
		domReady: function(){ // Populate the DOM
			// return $(document).populate();
		},
		
		
		// --------------------------------------------------
		// Things we don't really care about
		
		debug: function ( options )
		{
			// Can we debug? - Do we have firebug
			var con = null;
			if ( typeof console !== 'undefined' && typeof $.Smarty.debug !== 'undefined' )
			{	con = console;	}
			else if ( typeof window.console !== 'undefined' && typeof window.$.Smarty.debug !== 'undefined')
			{	con = window.console;	}
			
			// Do the log
			if ( con )
			{	// Do we support arguments?
				if ( typeof arguments !== 'undefined' && arguments.length > 1)
				{	con.log(arguments);	return arguments;	}
				else
				{	con.log(options);	return options;		}
			}
		}
	
	}); // We have finished extending/defining our Plugin


	// --------------------------------------------------
	// Finish up
	
	// On document load, Instantiate our class
	$(function() {
		// Instantiate
		$.Smarty = $.Smarty || new $.SmartyClass();
		
		// domReady
		$.Smarty.domReady();
	});
	

// Finished definition

})(jQuery); // We are done with our plugin, so lets call it with jQuery as the argument
