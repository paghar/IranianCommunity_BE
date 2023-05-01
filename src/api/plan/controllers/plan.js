'use strict';

/**
 * plan controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::plan.plan", ({ strapi }) => ({
  async findOne(ctx) {
    const { slug } = ctx.params;

    const query = {
      filters: { slug },
      ...ctx.query,
    };

    const plan = await strapi.entityService.findMany("api::plan.plan", query);

    const sanitizedEntity = await this.sanitizeOutput(plan);

    return this.transformResponse(sanitizedEntity[0]);
  },
}));
