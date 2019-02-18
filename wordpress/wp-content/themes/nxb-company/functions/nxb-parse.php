<?php
/**
 * Created by PhpStorm.
 * User: marvin
 * Date: 30.11.17
 * Time: 15:00
 */


/**
 * @param            $file
 * @param array      $arguments
 *
 * @return string
 */
function nxb_parse($file, $arguments = [])
{

    $located = false;

    // Trim .php from filename
    $fileBasename = preg_replace("/^(.*)\.php$/", "$1", $file);

    $fileLocations = [
        $file,
        STYLESHEETPATH . '/' . $fileBasename . '.php',
        STYLESHEETPATH . '/' . $fileBasename,
        TEMPLATEPATH . '/' . $fileBasename . '.php',
        TEMPLATEPATH . '/' . $fileBasename,
    ];

    // Try to find template in several dirs
    foreach ($fileLocations as $location) {
        if (file_exists($location)) {
            $located = $location;
            break;
        }
    }

    if ($located === false) {
        return '';
    }

    $arguments = (array) $arguments;

    foreach ($arguments as $variableName => $variableValue) {
        $$variableName = $variableValue;
    }
    ob_start();
    include $located;
    $return = ob_get_contents();
    ob_end_clean();

    return $return;
}