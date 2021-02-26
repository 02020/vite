
1 [axios](http://www.jianshu.com/p/df464b26ae58)
[](https://github.com/mzabriskie/axios#using-applicationx-www-form-urlencoded-format)
1 [入门](http://www.zcfy.cc/article/fetching-data-from-a-third-party-api-with-vue-js-and-axios-mdash-sitepoint-2706.html)

```javascript
axios.defaults.headers.post['content-Type'] = 'appliction/x-www-form-urlencoded';

var http = axios.create({
  baseURL: url,
  timeout: 10000,
  transformRequest: [function (data) {
    console.log(querystring.stringify(data))
    return querystring.stringify(data)
  }],
});

axios({
  method: 'post',
  url: url,
  data: querystring.stringify(info)
}).then(function (response) {
  console.log(response);
})
  .catch(function (response) {
    console.log(response);
  });

axios.post(url, querystring.stringify(info))
  .then(function (response) {
    const routeData = response.data;

    console.log(routeData);
  })
  .catch(function (response) {
    console.log(response);
  });


//不会改变指针
 axios.get(url).then((response) => {
        this.results = response.data.results;
      }).catch( error => { console.log(error); });






```
