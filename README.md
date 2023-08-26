
<p align="center">
  <a href="https://nav.51sec.org">
    <img src="https://cdn.jsdelivr.net/gh/51sec/nav@image/logo.png" width="130" />
  </a>
  <br />
  <b>51Sec Discovery Navigation</b>
  <p align="center">A purely static, powerful navigation website that supports SEO and online editing, I hope you will like it. Forked from nav3.cn</p>
  <p align="center">Built-in collection of up to 800+ high-quality websites to help you work, study and live</p>

</p>


<br />

Doc: <a href="https://navdoc.super.site">https://navdoc.super.site</a>
<br />


## Preview
**Themes**

- [Sim online preview](https://nav3.cn/#/sim)
- [Light online preview](https://nav3.cn/#/light)
- [Side online preview](https://nav3.cn/#/side)
- [App online preview](https://nav3.cn/#/app)

![Preview](https://photos.51sec.org/file/test1-51sec/2021/10/chrome_oj3gOMGIiZ.png)
![Preview](https://photos.51sec.org/file/test1-51sec/2021/10/chrome_V2xQL8Is3I.png)
![Preview](https://photos.51sec.org/file/test1-51sec/2021/10/chrome_V2xQL8Is3I.png)
![Preview](https://photos.51sec.org/file/test1-51sec/2021/10/chrome_Q8Y2MTOf3Y.png)
![Preview](https://photos.51sec.org/file/test1-51sec/2021/10/chrome_z5cykLBVRd.png)


<br />

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

<br />

## Deploy
Like counting numbers "3 2 1" that simple.
<br />
#### Method one (gh-pages free)
1. Fork the current project.

2. [https://github.com/settings/tokens](https://github.com/settings/tokens) apply for a token, check the corresponding permissions, if you don’t understand, select all, copy and save the token。

3. https://github.com/<Your User Name>/nav/settings/secrets/actions/new  Create a new application token, name fill in TOKEN (All are uppercase)。

4. Open https://github.com/<Your User Name>/nav/actions click "Green Button"

5. Be sure to modify the project configuration file [nav.config.ts](nav.config.ts), change to your github repository url

6. After 5 minutes, open https://<Your User Name>.github.io/nav , you will see a very powerful navigation website.

7. Customize:

      1. nav.config.ts - change the settings for homeurl, title, description, keywords, default theme, and footerContent. 
    
      2. Remove/replace the my own ads and analytic codes in /src/index.html file
  
          ```conf
              <!-- Remove/replace following codes which are for ads and statistics until before "</head>" -->  
                
              <!-- Global site tag (gtag.js) - Google Analytics -->
              <script async src="https://www.googletagmanager.com/gtag/js?id=G-Y6S10GPN71"></script>
              <script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
              
                gtag('config', 'G-Y6S10GPN71');
              </script>
              
              <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5660349373091698"
                   crossorigin="anonymous">
              </script>  
              
              <!-- Remove/replace above codes -->  
          ```
      3. Tag categories (Manual Update) - /data/tag.json
    
      4. Replace logo from backend dashboard.


### Method 2 (Free Vercel)
The steps are the same as the first method, except that the fourth step is not needed.

For specific use, follow the steps  [https://github.com/apps/vercel](https://github.com/apps/vercel)



Note: If you want to deploy your own domain name, then the above tutorial is also suitable, as it provides automated deployment, and then through CNAME or Revers Proxy implementation:

  
Sample configuration for Nginx:  

```conf
# nginx

server {
    listen       80;
    server_name  nav.51sec.org;

    location / {
        proxy_pass https://51sec.github.io/nav/;
    }
}
```

<br />
## Bookmark import
Support importing from Chrome bookmarks (WebKit kernel should be supported~), it will automatically detect navigation that meets the three-level classification, and all others will be set as unclassified:

![](https://raw.githubusercontent.com/xjh22222228/public/gh-pages/nav/import.png)

The browser opens chrome://bookmarks/ to export the bookmarks to get the html file, and then import it from the background of the navigation website.

## Manual Edit DB.JSON File
All bookmarks are storing at db.json file. You can use JOSN Editor Online(https://jsoneditoronline.org/) to modify it manually.
![Preview](https://photos.51sec.org/file/test1-51sec/2021/10/chrome_EzLImaNB23.png)

## Changed CDN from sevencdn to jsdelivr
index.ts file under 51sec/nav/src/services/

## Original Author
[Click here to original developer's Github page](https://github.com/xjh22222228/nav/tree/master/data)


