<?php
/**
 * Created by PhpStorm.
 * User: marvin
 * Date: 03.09.18
 * Time: 23:46
 */

/**
 * @param string   $field     ACF field
 * @param int|null $startPost ID of the starting post
 *
 * @return mixed|null
 */
function nxb_acf_recursive( $field, $startPost = null ) {

	// Return, if ACF is not loaded
	if (!function_exists('get_field')) {
		return null;
	}

	if ( $startPost === null ) {
		$startPost = get_the_ID();
	}
	// Try to get current ACF
	$result = get_field( $field, $startPost );
	if ( ! empty( $result ) ) {
		return $result;
	}

	// Try to get parent field
	$parentId = wp_get_post_parent_id( $startPost );
	if ( $parentId ) {
		$parentResult = nxb_acf_recursive( $field, $parentId );
		if ( $parentResult !== null ) {
			return $parentResult;
		}
	}

	return null;
}
