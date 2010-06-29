function strftime(format, time)
{	// We are converting a PHP date format to a Datejs format
	format = Date.normalizeFormat(format);
	return new Date(Date.parse(time)).toString(format);
}

function strtotime(str){
	return Date.parse(str);
}
