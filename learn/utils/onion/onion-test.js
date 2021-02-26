let resp = null;
const list = [
  { name: 'a', value: 1, label: '我' },
  { name: 'b', value: 22, label: '来' },
  { name: 'b', value: 12, label: '来' },
];

const arr = [
  [
    ['name', 'a'],
    ['value', 1],
    ['label', '我'],
  ],
  [
    ['name', 'b'],
    ['value', 2],
    ['label', '来'],
  ],
];

MapBox(arr).fromPairs().pick(['value', 'name']);

MapBox(list).orderBy(['value'], ['desc']).tap();
MapBox(list).checkTruth('name').tap();

MapBox(list)
  .map((x) => {
    x.value = x.value + 1;
    return x;
  })
  .map((x) => {
    // console.log( x);
    x.name = x.name + '.dd';
    return x;
  })
  .map((x) => {
    // console.log( x);
    x.name = x.name + '.dd';
    return x;
  })
  .fold((x) => {
    const t = x.name + ',' + x.value;

    return x;
  });

const fn1 = (x) => {
  x = x + 'a';
  return x;
};
const fn2 = (x) => {
  x = x + 'b';
  return x;
};
const fn3 = (x) => {
  x = x + 'c';
  return x;
};

MapBox('sss').pipe(fn1, fn2, fn3);
