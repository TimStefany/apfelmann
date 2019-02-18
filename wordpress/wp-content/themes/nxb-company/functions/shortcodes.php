<?php

/**
 * Shortcode nxb_theme_uri
 * Returns the uri to the current theme. I.e. "http://domain.com/wp-content/themes/current/theme"
 *
 * @param $atts
 *
 * @return string
 */
function nxb_theme_uri() {
	return get_parent_theme_file_uri();
}

add_shortcode( 'nxb_theme_uri', 'nxb_theme_uri' );



/**
 * Shortcode nxb_cookie_optout
 *
 * for Google Analytics Cookie Opt-Out
 *
 * @return string
 */
//
function nxb_ga_cookie_optout( $atts, $content ) {

	if ( empty( $content ) ) {
		$content = 'Google Analytics deaktivieren';
	}

	return '<a href="javascript:gaOptout()" rel="nofollow">' . $content . '</a>';
}

add_shortcode( 'nxb_cookie_optout', 'nxb_ga_cookie_optout' );
add_shortcode( 'nxb_cookie_optout', 'nxb_ga_cookie_optout' );
