
<p align="center">
  <a href="https://nav3.cn/?g">
    <img src="src/assets/logo.png" width="130" />
  </a>
  <br />
  <b>Discovery Navigation</b>
  <p align="center">A purely static, powerful navigation website that supports SEO and online editing, I hope you will like it</p>
  <p align="center">Built-in collection of up to 800+ high-quality websites to help you work, study and live</p>
  <p align="center">
    <img src="https://img.shields.io/github/v/release/xjh22222228/nav" />
    <a href="https://github.com/xjh22222228/nav/stargazers"><img src="https://img.shields.io/github/stars/xjh22222228/nav" alt="Stars"/></a>
    <img alt="Angular" src="https://img.shields.io/static/v1.svg?label=&message=Angular11&style=flat-square&color=C82B38">
    <img src="https://img.shields.io/github/license/xjh22222228/nav" />
    <a href="https://hits.dwyl.com/xjh22222228/nav">
      <img src="https://hits.dwyl.com/xjh22222228/nav.svg" />
    </a>
  </p>
</p>

<br />
<br />


## Preview
**Themes**

- [Sim online preview](https://nav3.cn/#/sim)
- [Light online preview](https://nav3.cn/#/light)
- [Side online preview](https://nav3.cn/#/side)
- [App online preview](https://nav3.cn/#/app)

![Preview](https://raw.githubusercontent.com/xjh22222228/public/gh-pages/nav/1.png)
![Preview](https://raw.githubusercontent.com/xjh22222228/public/gh-pages/nav/2.png)
![Preview](https://raw.githubusercontent.com/xjh22222228/public/gh-pages/nav/3.png)
![Preview](https://raw.githubusercontent.com/xjh22222228/public/gh-pages/nav/4.png)
![Preview](https://raw.githubusercontent.com/xjh22222228/public/gh-pages/nav/5.png)






## Features
`Discovery Navigation` The idea is to make it simple and convenient without relying on back-end services, without complicated configuration and database configuration concepts, so it can be used out of the box.

- 🍰 Built-in 800+utility sites.
- 🍰 Support SEO.
- 🍰 It is completely static and provides automatic deployment functions.
- 🍰 The trigeminal tree has a clear structure and clear classification.
- 🍰 Support one website to associate multiple URLs
- 🍰 The coexistence of beauty and simplicity is no longer the era of killing Matt.
- 🍰 Completely open source, easy to customize.
- 🍰 Support multiple browsing modes and innovation.
- 🍰 Support footprint memory.
- 🍰 Support mobile browsing.
- 🍰 Support search query.
- 🍰 Support custom engine search.
- 🍰 A variety of theme switching.
- 🍰 Support dark mode.
- 🍰 Support background management, no need to deploy.
- 🍰 Support import from Chrome bookmarks


## Deploy
Like counting numbers "3 2 1" that simple.

#### WMethod one (gh-pages free)
1、Fork the current project.。

2、[https://github.com/settings/tokens](https://github.com/settings/tokens) apply for a token, check the corresponding permissions, if you don’t understand, select all, copy and save the token。

3、https://github.com/用户名/nav/settings/secrets/actions/new  Create a new application token, name fill in TOKEN (All are uppercase)。

4、打开 https://github.com/用户名/nav/actions click "Green Button"

5、Be sure to modify the project configuration file [nav.config.ts](nav.config.ts)

6、After 5 minutes, open https://用户名.github.io/nav , you will see a very powerful navigation website.

### Method 2 (Free Vercel)
The steps are the same as the first method, except that the fourth step is not needed.

For specific use, follow the steps  [https://github.com/apps/vercel](https://github.com/apps/vercel)



Note: If you want to deploy your own domain name, then the above tutorial is also suitable, as it provides automated deployment, and then through CNAME or Revers Proxy implementation:

```conf
# nginx

server {
    listen       80;
    server_name  www.nav3.cn nav3.cn;

    location / {
        proxy_pass https://xjh22222228.github.io/nav/;
    }
}
```


## Bookmark import
Support importing from Chrome bookmarks (WebKit kernel should be supported~), it will automatically detect navigation that meets the three-level classification, and all others will be set as unclassified:

![](https://raw.githubusercontent.com/xjh22222228/public/gh-pages/nav/import.png)

The browser opens chrome://bookmarks/ to export the bookmarks to get the html file, and then import it from the background of the navigation website.





## Upgrade
Before you upgrade, back up the root directory datafolder and nav.config.ts, after the upgrade can be replaced.

Top right, click Watchthe button first time tracking version upgrade.



## Update log
[CHANGELOG](https://github.com/xjh22222228/nav/releases)






## Development and construction
``` bash
# Download
git clone --depth=1 https://github.com/xjh22222228/nav.git

cd nav

# Installation dependencies
yarn

# Start
yarn start

# Packing 
yarn build
```



## Contribution to Original Author
[点击这里](https://github.com/xjh22222228/nav/tree/master/data)

Thank you for your [contribution](https://github.com/xjh22222228/nav/issues), men.

<a href="https://github.com/YutHelloWorld">
  <img src="https://avatars1.githubusercontent.com/u/20860159?s=460&v=4" width="30px" height="30px" />
</a>
<a href="https://github.com/JJJTHuang">
  <img src="https://avatars3.githubusercontent.com/u/22817432?s=460&v=4" width="30px" height="30px" />
</a>
<a href="https://github.com/Fechin">
  <img src="https://avatars1.githubusercontent.com/u/2541482?s=460&v=4" width="30px" height="30px" />
</a>
<a href="https://github.com/setdiaoyong">
  <img src="https://avatars1.githubusercontent.com/u/62551864?s=460&v=4" width="30px" height="30px" />
</a>






## Suggest to Original Author
If you have any functional suggestions , you can initiate an [issue](https://github.com/xjh22222228/nav/issues) , Thank you.



## Support to Original Author
The project was established in 2018 and has been maintaining and open source until now. After N iterations and optimizations, it would be my honor if the project can help you.

You can invite the author to have a cup of coffee and continue to fight (please note the Github name)~

<img src="https://cdn.jsdelivr.net/gh/xjh22222228/public@gh-pages/img/32.png" width="600">

Thanks for your support：
| Name    | Supported Money              |
| --------------------------------------- |----------- |
| [aiyou9](https://github.com/aiyou9)     | ￥50.00     |
| [lastares](https://github.com/lastares)     | ￥25.00     |
| 路人甲     | ￥50.00     |

