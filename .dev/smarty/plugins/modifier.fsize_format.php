<?php
/*
* Smarty plugin
* -------------------------------------------------------------
* Type:    modifier
* Name:    fsize_format
* Version:    0.1
* Date:    2003-02-21
* Author:    Joscha Feth, joscha@feth.com
* Purpose: formats a filesize (in bytes) to human-readable format
* Usage:    In the template, use
            {$filesize|fsize_format}    =>    123.45 B|KB|MB|GB|TB
            or
            {$filesize|fsize_format:"MB"}    =>    123.45 MB
            or
            {$filesize|fsize_format:"TB":4}    =>    0.0012 TB
* Params:    
            int        size        the filesize in bytes
            string    format        the format, the output shall be: B, KB, MB, GB or TB
            int        precision    the rounding precision    
* Install: Drop into the plugin directory
* -------------------------------------------------------------
*/
function smarty_modifier_fsize_format($size,$format = '',$precision = 2)
{

    //~ file measurements, could be calculated on the fly, but its faster like that
     $sizes = array();
    $sizes["TB"]    =    1099511627776;
    $sizes["GB"]    =    1073741824;
    $sizes["MB"]    =    1048576;        
    $sizes["KB"]    =    1024;
    $sizes["B"]    =    1;
    
    //~ get "human" filesize
    foreach($sizes    AS    $unit => $bytes) {
        if($size > $bytes || $unit == strtoupper($format)) {
            //~ return formatted size
            return    number_format($size / $bytes,$precision)." ".$unit;
        } //~ end if
    } //~ end foreach
} //~ end function
?>
