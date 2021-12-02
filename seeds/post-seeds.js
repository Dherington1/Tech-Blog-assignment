const { Post } = require('../models');

const postdata = [
  {
    title: 'How to buy crypto on binance.',
    post_url: 'Downlod Binance.US, connect your bank acount then send money to Binance. Buy like if you were on robinhood',
    user_id: 10
  },
  {
    title: 'Where to buy $UFO',
    post_url: 'buy USDT on binance or coinbase. Send to hotbit.io and purchase with like a normal coin.',
    user_id: 8
  },
 
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;

{/* <a href="{{post_url}}" target="_blank">{{title}}</a> */}
{/* <span>({{format_url post_url}})</span> */}
