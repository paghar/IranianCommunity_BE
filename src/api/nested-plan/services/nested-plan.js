'use strict';

/**
 * nested-plan service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::nested-plan.nested-plan');
