'use strict';

/**
 * Hotel.js controller
 *
 * @description: A set of functions called "actions" for managing `Hotel`.
 */

const _ = require('lodash');

module.exports = {

  /**
   * Retrieve hotel records.  
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {

    const {enterTime, leftTime, ...props} = ctx.query;
    let data = {}

    // find scenics
    // if(props.city){
    //   const res = await strapi.services.discity.fetch({id: props.city});
    //   data.scenic = res.toJSON().scenics || [];
    // }

    // find hotels
    // 不连表查询
    // const res = await strapi.models.hotel.fetchAll(props);
    // 连表查询
    const hotels = await strapi.services.hotel.fetchAll(props);

    // 去除不需要的属性
    data.hotels = hotels.toJSON().map(v => {
      const {scenic, ...props} = v;

      props.products = [
        {
          name: "携程",
          price: v.price + _.random(1, 100, true).toFixed(2)
        },
        {
          name: "艺龙",
          price: v.price + _.random(1, 100, true).toFixed(2)
        },
        {
          name: "Hotels.com",
          price: v.price + _.random(1, 100, true).toFixed(2)
        }
      ]

      return props;
    });

    return {
      data
    }
  },

  /**
   * Retrieve a hotel record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.hotel.fetch(ctx.params);
  },

  /**
   * Count hotel records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.hotel.count(ctx.query);
  },

  /**
   * Create a/an hotel record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.hotel.add(ctx.request.body);
  },

  /**
   * Update a/an hotel record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.hotel.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an hotel record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.hotel.remove(ctx.params);
  }
};
