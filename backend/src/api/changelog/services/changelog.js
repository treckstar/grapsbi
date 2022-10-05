'use strict';

/**
 * changelog service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::changelog.changelog');
