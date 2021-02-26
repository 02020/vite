const list = [
  { name: 'a', value: 1, label: '我' },
  { name: 'b', value: 22, label: '来' },
  { name: 'b', value: 12, label: '了' },
  { name: 'b', value: 12, label: '!' },
];

export default (MapBox) => {
  let resp = null;
  // resp = MapBox(arr).fromPairs().pick(['value', 'name']).tap();
  resp = MapBox(list).pick(['label']).tap();

  resp = MapBox(list).keysMap(['name', 'value','label'], ['n', 'v']).tap();
  // [ { "n": "a", "v": 1 }, { "n": "b", "v": 22 }, { "n": "b", "v": 12 }, { "n": "b", "v": 12 } ]

// 增加key :value (fn)


  return resp;
};
