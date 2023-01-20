const stripe = require('stripe')(process.env.STRIPE_ID)

'use strict';



const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::order.order');

