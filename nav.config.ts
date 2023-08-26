import { IConfig } from './src/types'

const c: IConfig = {
  // [Mondatory], Please replace following Github url with your own Github address which you forked in. 
  gitRepoUrl: 'https://github.com/gonmmarques/nav',

  // Deployment branch name
  branch: 'main',

  // If routing is hash mode. if it deployed into github pages or using Vercel, it has to be set to true
  hashMode: true,

  // is it displaying the Github icon on top right corner of the web page
  showGithub: true,

  // what is your website address. It is good for your SEO
  homeUrl: 'https://nav.51sec.org',

  // Web Site Tiltle
  title: '51Sec Navigation - a directory for yourself to collect all interesting things on the Internet',

  // Web Site description
  description: '51Sec Navigation - Featured and useful navigation websites - English',

  // Web Site Keyword
  keywords: 'Navigation, front-end resources, community sites, designers, practical tools, learning resources, operations, network, security',

  // Default Theme: Light | Sim | Side | App | Shortcut
  theme: 'Side',

  // The content at the bottom of the website, copyright information, record number, can be HTML
  footerContent: `
    <div><center><table><tbody>    <tr>
    <td><div style="font-weight: bold;">Total collected \${total} websites.  
    Copyright ©2018-2023 <a href="https://www.51sec.org" target="_blank">51Sec</a>.  
    All Rights Reserved. </div></td>
    </tr></tbody></table></center></div>
    <!-- Ezoic - bottom_of_page 129 - bottom_of_page -->
    <div id="ezoic-pub-ad-placeholder-129"> 
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5660349373091698" crossorigin="anonymous">
    </script>  
</div>
<!-- End Ezoic - bottom_of_page 129 - bottom_of_page -->
  `,

  // Alibaba icon https://www.iconfont.cn/
  // IT will be used to show side theme's topic one level and second level menu icons Side 主题一级、二级菜单图标展示
  iconfontUrl: '//at.alicdn.com/t/font_2522843_wl70o31sy6.js',

  // Baidu statistics
  // https://tongji.baidu.com/web/welcome/login
  //baiduStatisticsUrl: 'https://hm.baidu.com/hm.js?4582be7af7e7c95ef75351e07c6c32ba',

  //CNZZ statisitics
  //https://www.cnzz.com/o_index.php
  //cnzzStatisticsUrl: 'https://new.cnzz.com/v1/login.php?siteid=1280434453',

  // Sim Theme Configuration
  simThemeConfig: {
    // Post Image
    posterImageUrls: [
      'https://cdn.jsdelivr.net/gh/51sec/nav@image/sim-wallpaper.jpg'
    ],
    description: 'Here collected total <b>${total}</b> websites, helping your work, living and studying'
  }
}

export default c
