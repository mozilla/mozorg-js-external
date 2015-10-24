/**
 * Experiment ID: 3561050137
 * Description: Firstrun signup alternative
 * Mana URL: https://mana.mozilla.org/wiki/display/FIREFOX/Firstrun+signup+alternative
 */

// Regexp used for targeting
function snippetRegexp() {
    'use strict';
    return /^https:\/\/www\.mozilla\.org\/en-US\/firefox\/41\.[^\/]+\/firstrun\/$/;
}

// Variation A
function variationA() {
    // None
}

// Variation B
function variationB() {
    'use strict';
    $('.leftcol').append('<a id="no-thanks" href="about:home">No thanks</a>');
}
