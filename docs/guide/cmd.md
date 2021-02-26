## redis

1.访问 redis 根目录 cd /usr/local/redis-2.8.19

2.登录 redis：redis-cli -h 127.0.0.1 -p 6379

3.查看所有 key 值：keys \*

4.删除指定索引的值：del key

5.清空整个 Redis 服务器的数据：flushall

6.清空当前库中的所有 key：flushdb

## DNS

```
https://www.jianshu.com/p/0493dcc15d6f

刷新 DNS 缓存 ipconfig /flushdns
```

## 检查端口

```
netstat -aon  列出所有端口
netstat -aon|findstr "6379"
tasklist|findstr "14744"
```

## Nginx

```
查看nginx的版本号：nginx -v
启动nginx：start nginx
快速停止或关闭nginx：nginx -s stop
正常停止或关闭nginx：nginx -s quit
配置文件nginx.conf修改重装载命令：nginx -s reload
tasklist /fi "imagename eq nginx.exe"
```

### 跨域

```
add_header 'Access-Control-Allow-Origin' '*';
add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
add_header 'Access-Control-Allow-Headers' 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range';
add_header 'Access-Control-Expose-Headers' 'Content-Length,Content-Range';
```

## NPM

### 更新

1.npm-check 检查更新

`npm install -g npm-check`
`npm-check`

2.npm-upgrade 更新

`npm install -g npm-upgrade`
`npm-upgrade`

3.更新全局包：
`npm update -g`

4.更新生产环境依赖包：
`npm update --save`

5.更新开发环境依赖包：
`npm update --save-dev`

### 安装依赖

npm install 依赖 --save-dev

1. 安装"npm-check-updates"模块
   `npm install -g npm-check-updates`

### NCU

ncu // 检查更新
ncu -u //执行更新

#### vee-validate

npm install --save -g core-js@^3

npm install vee-validate --save

npm install vue

npm install vee-validate@"<3.0.0" --save

#### 淘宝注册

`npm config set registry https://registry.npm.taobao.org`

`npm config get registry`

#### storybook

npm i --save-dev @storybook/vue @storybook/addon-storysource storybook-readme @storybook/addon-actions @storybook/addon-docs @storybook/addon-knobs @storybook/addon-links @storybook/addon-notes @storybook/addon-options @storybook/addon-storysource @storybook/addons @storybook/storybook-deployer

npm i --save-dev rollup rollup-plugin-babel rollup-plugin-vue @rollup/plugin-alias @rollup/plugin-commonjs @rollup/plugin-node-resolve

npm i --save-dev @rollup/plugin-typescript

### GIT

拉取分支
`git fetch origin dev`



## 保存当前用户账号密码
git config --global credential.helper store

git config --global user.email "你的email"
git config --global user.name "你的名称"
[git-md](http://blog.csdn.net/kaitiren/article/details/38513715)


#### Git 修改.gitignore 如何生效

```
#add .gitignore
#查看状态，是否忽略了指定的文件？
$ git status --ignored #查看状态，包括忽略的文件

#让其对已经跟踪的文件也起作用
$ git rm -r --cached .  #清除缓存 -r 表示递归删除（如果有文件夹的话） . 表示所有文件

#查看一下具体效果
$ git status --ignored
$ git add .           #重新trace file
$ git commit -m "update .gitignore"     #提交和注释

```

```
-- 临时
set GIT_SSL_NO_VERIFY=true git clone

-- 永久
git config --global http.sslVerify false

```

---

```ts
// http response 拦截器
axios.interceptors.response.use(
  (response) => {
    const data = response.data
    switch (data.code) {
      case 401:
        // 未登录 清除已登录状态
        StorageUtils.setStorage('accessToken', '')
        StorageUtils.removeStorage('userInfo')
        router.push('/home')
        // location.reload()
        setTimeout(() => {
          Message.warning({
            content: '您的登录状态已失效，请重新登录',
            duration: 10
          })
        }, 1000)
        break
    }
    return data
  },
  (err) => {
    // 返回状态码不为200时候的错误处理
    Message.error(err.toString())
    return Promise.resolve(err)
  }
)
```
