/** @format */

import _ from './underscore-183-analysis';
/*

_.keys === Object.keys

*/

const executeTest = function () {
  console.clear();
  console.log('executeTest');

  var demo = [
    { name: 1, type: 2 },
    { name: 2, type: 2 },
    { name: 3, type: 2 },
  ];

  var resp = _.every(demo, function test(x) {
    return x.type == 2;
  });

  demo = {
    key1: 2,
    key2: 2,
  };

  var resp = _.every(demo, function test(value, key) {
    console.log(value, key);
    return value == 2;
  });

  console.log(resp);
  // end
};

export default executeTest;
