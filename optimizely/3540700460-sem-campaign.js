/**
 * Experiment ID: 3540700460
 * Description: SEM campaign effectiveness
 * Mana URL: https://mana.mozilla.org/wiki/display/FIREFOX/%5Bbug+1205745%5D+SEM+campaign+effectiveness
 */

// Regexp used for targeting
function snippetRegexp() {
    'use strict';
    return /^.*www\.mozilla\.org\/en\-US\/firefox\/new\/.+utm_source=google.+utm_medium=paidsearch.+utm_campaign=sem2015Q3.*$/;
}

// Variation A
function variationA() {
    'use strict';
    return $(".os_win > .download-link").attr({"href":"https://download.mozilla.org/?product=firefox-41.0.1-SSL-f53&os=win&lang=en-US"});
}
