



<!DOCTYPE html>
<html lang="en" class="">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>FitVids.js/jquery.fitvids.js at master · davatron5000/FitVids.js · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="davatron5000/FitVids.js" name="twitter:title" /><meta content="FitVids.js - A lightweight, easy-to-use jQuery plugin for fluid width video embeds." name="twitter:description" /><meta content="https://avatars2.githubusercontent.com/u/42218?v=2&amp;s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars2.githubusercontent.com/u/42218?v=2&amp;s=400" property="og:image" /><meta content="davatron5000/FitVids.js" property="og:title" /><meta content="https://github.com/davatron5000/FitVids.js" property="og:url" /><meta content="FitVids.js - A lightweight, easy-to-use jQuery plugin for fluid width video embeds." property="og:description" />

      <meta name="browser-stats-url" content="/_stats">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    
    <meta name="pjax-timeout" content="1000">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="AD08D526:22DC:158AB53:54493F19" name="octolytics-dimension-request_id" />
    
    <meta content="Rails, view, blob#show" name="analytics-event" />

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="EHnuHfukcauwq7aRo6vFKsvichfZOLuEm7SHzX0YIjqOAFdqUyud9rNcTyVJewbXR8kvfHk/83bjsX1szi4KNg==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-241b40b325e5c684c18fc7f1a0127c0baeece0a3ec2a3dc5bfd1dcc6b0279e46.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://assets-cdn.github.com/assets/github2-8afd77674b7a022523a4b34c73745976faac0598aa9ed5bf6f4713a51f8c44f6.css" media="all" rel="stylesheet" type="text/css" />
    
    


    <meta http-equiv="x-pjax-version" content="dd5ff626aa9c07cbb75772f27613daca">

      
  <meta name="description" content="FitVids.js - A lightweight, easy-to-use jQuery plugin for fluid width video embeds.">
  <meta name="go-import" content="github.com/davatron5000/FitVids.js git https://github.com/davatron5000/FitVids.js.git">

  <meta content="42218" name="octolytics-dimension-user_id" /><meta content="davatron5000" name="octolytics-dimension-user_login" /><meta content="2310615" name="octolytics-dimension-repository_id" /><meta content="davatron5000/FitVids.js" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="2310615" name="octolytics-dimension-repository_network_root_id" /><meta content="davatron5000/FitVids.js" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/davatron5000/FitVids.js/commits/master.atom" rel="alternate" title="Recent Commits to FitVids.js:master" type="application/atom+xml">

  </head>


  <body class="logged_out  env-production  vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      
      <div class="header header-logged-out" role="banner">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/" ga-data-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions" role="navigation">
        <a class="button primary" href="/join" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
      <a class="button signin" href="/login?return_to=%2Fdavatron5000%2FFitVids.js%2Fblob%2Fmaster%2Fjquery.fitvids.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
    </div>

    <div class="site-search repo-scope js-site-search" role="search">
      <form accept-charset="UTF-8" action="/davatron5000/FitVids.js/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/davatron5000/FitVids.js/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <input type="text"
    class="js-site-search-field is-clearable"
    data-hotkey="s"
    name="q"
    placeholder="Search"
    data-global-scope-placeholder="Search GitHub"
    data-repo-scope-placeholder="Search"
    tabindex="1"
    autocapitalize="off">
  <div class="scope-badge">This repository</div>
</form>
    </div>

      <ul class="header-nav left" role="navigation">
          <li class="header-nav-item">
            <a class="header-nav-link" href="/explore" data-ga-click="(Logged out) Header, go to explore, text:explore">Explore</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/features" data-ga-click="(Logged out) Header, go to features, text:features">Features</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://enterprise.github.com/" data-ga-click="(Logged out) Header, go to enterprise, text:enterprise">Enterprise</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/blog" data-ga-click="(Logged out) Header, go to blog, text:blog">Blog</a>
          </li>
      </ul>

  </div>
</div>



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">


  <li>
      <a href="/login?return_to=%2Fdavatron5000%2FFitVids.js"
    class="minibutton with-count star-button tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <span class="octicon octicon-star"></span>
    Star
  </a>

    <a class="social-count js-social-count" href="/davatron5000/FitVids.js/stargazers">
      3,367
    </a>

  </li>

    <li>
      <a href="/login?return_to=%2Fdavatron5000%2FFitVids.js"
        class="minibutton with-count js-toggler-target fork-button tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-repo-forked"></span>
        Fork
      </a>
      <a href="/davatron5000/FitVids.js/network" class="social-count">
        839
      </a>
    </li>
</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/davatron5000" class="url fn" itemprop="url" rel="author"><span itemprop="title">davatron5000</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/davatron5000/FitVids.js" class="js-current-repository js-repo-home-link" data-pjax-container-selector="#js-repo-pjax-container">FitVids.js</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            
<div class="sunken-menu vertical-right repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders" role="navigation" data-issue-count-url="/davatron5000/FitVids.js/issues/counts" data-pjax-container-selector="#js-repo-pjax-container">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/davatron5000/FitVids.js" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /davatron5000/FitVids.js">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/davatron5000/FitVids.js/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /davatron5000/FitVids.js/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class="js-issue-replace-counter"></span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/davatron5000/FitVids.js/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g p" data-selected-links="repo_pulls /davatron5000/FitVids.js/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class="js-pull-replace-counter"></span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped tooltipped-w" aria-label="Wiki">
          <a href="/davatron5000/FitVids.js/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g w" data-selected-links="repo_wiki /davatron5000/FitVids.js/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/davatron5000/FitVids.js/pulse/weekly" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /davatron5000/FitVids.js/pulse/weekly">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/davatron5000/FitVids.js/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /davatron5000/FitVids.js/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                
  
<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="https://github.com/davatron5000/FitVids.js.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/davatron5000/FitVids.js.git" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="https://github.com/davatron5000/FitVids.js" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/davatron5000/FitVids.js" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>



                <a href="/davatron5000/FitVids.js/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download the contents of davatron5000/FitVids.js as a zip file"
                   title="Download the contents of davatron5000/FitVids.js as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          

<a href="/davatron5000/FitVids.js/blob/5f5b114a9f332a5b260beb57d7abdd0e0e370a9d/jquery.fitvids.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:88547dc7d7fc57b1078924c7e75870bf -->

<div class="file-navigation">
  
<div class="select-menu js-menu-container js-select-menu left">
  <span class="minibutton select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/davatron5000/FitVids.js/blob/gh-pages/jquery.fitvids.js"
                 data-name="gh-pages"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="gh-pages">gh-pages</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/davatron5000/FitVids.js/blob/master/jquery.fitvids.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/davatron5000/FitVids.js/tree/v1.1.0/jquery.fitvids.js"
                 data-name="v1.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1.0">v1.1.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/davatron5000/FitVids.js/tree/v1.0.3/jquery.fitvids.js"
                 data-name="v1.0.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.3">v1.0.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/davatron5000/FitVids.js/tree/v1.0.2/jquery.fitvids.js"
                 data-name="v1.0.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.2">v1.0.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/davatron5000/FitVids.js/tree/v1.0.1/jquery.fitvids.js"
                 data-name="v1.0.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.1">v1.0.1</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="button-group right">
    <a href="/davatron5000/FitVids.js/find/master"
          class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button class="js-zeroclipboard minibutton zeroclipboard-button"
          data-clipboard-text="jquery.fitvids.js"
          aria-label="Copy to clipboard"
          data-copied-hint="Copied!">
      <span class="octicon octicon-clippy"></span>
    </button>
  </div>

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/davatron5000/FitVids.js" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">FitVids.js</span></a></span></span><span class="separator"> / </span><strong class="final-path">jquery.fitvids.js</strong>
  </div>
</div>


  <div class="commit file-history-tease">
    <div class="file-history-tease-header">
        <img alt="Arthur Verschaeve" class="avatar" data-user="6025224" height="24" src="https://avatars2.githubusercontent.com/u/6025224?v=2&amp;s=48" width="24" />
        <span class="author"><a href="/arthurvr" rel="contributor">arthurvr</a></span>
        <time datetime="2014-08-07T13:17:39Z" is="relative-time">Aug 7, 2014</time>
        <div class="commit-title">
            <a href="/davatron5000/FitVids.js/commit/35901a8a35eb7ca7b214772937ef12f30e42afc7" class="message" data-pjax="true" title="switched over to single quotes">switched over to single quotes</a>
        </div>
    </div>

    <div class="participation">
      <p class="quickstat">
        <a href="#blob_contributors_box" rel="facebox">
          <strong>15</strong>
           contributors
        </a>
      </p>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="davatron5000" href="/davatron5000/FitVids.js/commits/master/jquery.fitvids.js?author=davatron5000"><img alt="Dave Rupert" class="avatar" data-user="42218" height="20" src="https://avatars0.githubusercontent.com/u/42218?v=2&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="chriscoyier" href="/davatron5000/FitVids.js/commits/master/jquery.fitvids.js?author=chriscoyier"><img alt="Chris Coyier" class="avatar" data-user="69156" height="20" src="https://avatars3.githubusercontent.com/u/69156?v=2&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="kenhowardpdx" href="/davatron5000/FitVids.js/commits/master/jquery.fitvids.js?author=kenhowardpdx"><img alt="Ken Howard" class="avatar" data-user="1892667" height="20" src="https://avatars1.githubusercontent.com/u/1892667?v=2&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="arthurvr" href="/davatron5000/FitVids.js/commits/master/jquery.fitvids.js?author=arthurvr"><img alt="Arthur Verschaeve" class="avatar" data-user="6025224" height="20" src="https://avatars0.githubusercontent.com/u/6025224?v=2&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="seriouslysean" href="/davatron5000/FitVids.js/commits/master/jquery.fitvids.js?author=seriouslysean"><img alt="Sean Kennedy" class="avatar" data-user="414475" height="20" src="https://avatars2.githubusercontent.com/u/414475?v=2&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="elliotttf" href="/davatron5000/FitVids.js/commits/master/jquery.fitvids.js?author=elliotttf"><img alt="Elliott Foster" class="avatar" data-user="447151" height="20" src="https://avatars2.githubusercontent.com/u/447151?v=2&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="quayzar" href="/davatron5000/FitVids.js/commits/master/jquery.fitvids.js?author=quayzar"><img alt="Ian MacKenzie" class="avatar" data-user="1156664" height="20" src="https://avatars2.githubusercontent.com/u/1156664?v=2&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="JacobBennett" href="/davatron5000/FitVids.js/commits/master/jquery.fitvids.js?author=JacobBennett"><img alt="Jacob Bennett" class="avatar" data-user="1517011" height="20" src="https://avatars0.githubusercontent.com/u/1517011?v=2&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="flynfish" href="/davatron5000/FitVids.js/commits/master/jquery.fitvids.js?author=flynfish"><img alt="Kyle Lamy" class="avatar" data-user="253936" height="20" src="https://avatars0.githubusercontent.com/u/253936?v=2&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="emiluzelac" href="/davatron5000/FitVids.js/commits/master/jquery.fitvids.js?author=emiluzelac"><img alt="Emil Uzelac" class="avatar" data-user="1784526" height="20" src="https://avatars3.githubusercontent.com/u/1784526?v=2&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="freakdesign" href="/davatron5000/FitVids.js/commits/master/jquery.fitvids.js?author=freakdesign"><img alt="Jason Bowman" class="avatar" data-user="1378665" height="20" src="https://avatars0.githubusercontent.com/u/1378665?v=2&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="Krinkle" href="/davatron5000/FitVids.js/commits/master/jquery.fitvids.js?author=Krinkle"><img alt="Timo Tijhof" class="avatar" data-user="156867" height="20" src="https://avatars1.githubusercontent.com/u/156867?v=2&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="sstarr" href="/davatron5000/FitVids.js/commits/master/jquery.fitvids.js?author=sstarr"><img alt="Simon Starr" class="avatar" data-user="18957" height="20" src="https://avatars2.githubusercontent.com/u/18957?v=2&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="mohnish" href="/davatron5000/FitVids.js/commits/master/jquery.fitvids.js?author=mohnish"><img alt="Mohnish Thallavajhula" class="avatar" data-user="138171" height="20" src="https://avatars1.githubusercontent.com/u/138171?v=2&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="adamfairholm" href="/davatron5000/FitVids.js/commits/master/jquery.fitvids.js?author=adamfairholm"><img alt="Adam Fairholm" class="avatar" data-user="298239" height="20" src="https://avatars1.githubusercontent.com/u/298239?v=2&amp;s=40" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Dave Rupert" data-user="42218" height="24" src="https://avatars2.githubusercontent.com/u/42218?v=2&amp;s=48" width="24" />
            <a href="/davatron5000">davatron5000</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Chris Coyier" data-user="69156" height="24" src="https://avatars1.githubusercontent.com/u/69156?v=2&amp;s=48" width="24" />
            <a href="/chriscoyier">chriscoyier</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Ken Howard" data-user="1892667" height="24" src="https://avatars3.githubusercontent.com/u/1892667?v=2&amp;s=48" width="24" />
            <a href="/kenhowardpdx">kenhowardpdx</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Arthur Verschaeve" data-user="6025224" height="24" src="https://avatars2.githubusercontent.com/u/6025224?v=2&amp;s=48" width="24" />
            <a href="/arthurvr">arthurvr</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Sean Kennedy" data-user="414475" height="24" src="https://avatars0.githubusercontent.com/u/414475?v=2&amp;s=48" width="24" />
            <a href="/seriouslysean">seriouslysean</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Elliott Foster" data-user="447151" height="24" src="https://avatars0.githubusercontent.com/u/447151?v=2&amp;s=48" width="24" />
            <a href="/elliotttf">elliotttf</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Ian MacKenzie" data-user="1156664" height="24" src="https://avatars0.githubusercontent.com/u/1156664?v=2&amp;s=48" width="24" />
            <a href="/quayzar">quayzar</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Jacob Bennett" data-user="1517011" height="24" src="https://avatars2.githubusercontent.com/u/1517011?v=2&amp;s=48" width="24" />
            <a href="/JacobBennett">JacobBennett</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Kyle Lamy" data-user="253936" height="24" src="https://avatars2.githubusercontent.com/u/253936?v=2&amp;s=48" width="24" />
            <a href="/flynfish">flynfish</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Emil Uzelac" data-user="1784526" height="24" src="https://avatars1.githubusercontent.com/u/1784526?v=2&amp;s=48" width="24" />
            <a href="/emiluzelac">emiluzelac</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Jason Bowman" data-user="1378665" height="24" src="https://avatars2.githubusercontent.com/u/1378665?v=2&amp;s=48" width="24" />
            <a href="/freakdesign">freakdesign</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Timo Tijhof" data-user="156867" height="24" src="https://avatars3.githubusercontent.com/u/156867?v=2&amp;s=48" width="24" />
            <a href="/Krinkle">Krinkle</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Simon Starr" data-user="18957" height="24" src="https://avatars0.githubusercontent.com/u/18957?v=2&amp;s=48" width="24" />
            <a href="/sstarr">sstarr</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Mohnish Thallavajhula" data-user="138171" height="24" src="https://avatars3.githubusercontent.com/u/138171?v=2&amp;s=48" width="24" />
            <a href="/mohnish">mohnish</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Adam Fairholm" data-user="298239" height="24" src="https://avatars3.githubusercontent.com/u/298239?v=2&amp;s=48" width="24" />
            <a href="/adamfairholm">adamfairholm</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
          <span>84 lines (72 sloc)</span>
          <span class="meta-divider"></span>
        <span>3.261 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
          <a href="/davatron5000/FitVids.js/raw/master/jquery.fitvids.js" class="minibutton " id="raw-url">Raw</a>
            <a href="/davatron5000/FitVids.js/blame/master/jquery.fitvids.js" class="minibutton js-update-url-with-hash">Blame</a>
          <a href="/davatron5000/FitVids.js/commits/master/jquery.fitvids.js" class="minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->


            <a class="octicon-button disabled tooltipped tooltipped-w" href="#"
               aria-label="You must be signed in to make or propose changes"><span class="octicon octicon-pencil"></span></a>

          <a class="octicon-button danger disabled tooltipped tooltipped-w" href="#"
             aria-label="You must be signed in to make or propose changes">
          <span class="octicon octicon-trashcan"></span>
        </a>
      </div><!-- /.actions -->
    </div>
    
  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size-8 js-file-line-container">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code js-file-line"><span class="cm">/*global jQuery */</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code js-file-line"><span class="cm">/*jshint browser:true */</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code js-file-line"><span class="cm">/*!</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code js-file-line"><span class="cm">* FitVids 1.1</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code js-file-line"><span class="cm">*</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code js-file-line"><span class="cm">* Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code js-file-line"><span class="cm">* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code js-file-line"><span class="cm">* Released under the WTFPL license - http://sam.zoy.org/wtfpl/</span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code js-file-line"><span class="cm">*</span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code js-file-line"><span class="cm">*/</span></td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code js-file-line"><span class="p">(</span><span class="kd">function</span><span class="p">(</span> <span class="nx">$</span> <span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code js-file-line">  <span class="s1">&#39;use strict&#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code js-file-line">  <span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">fitVids</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">options</span> <span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code js-file-line">    <span class="kd">var</span> <span class="nx">settings</span> <span class="o">=</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code js-file-line">      <span class="nx">customSelector</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code js-file-line">      <span class="nx">ignore</span><span class="o">:</span> <span class="kc">null</span></td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code js-file-line">    <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code js-file-line">    <span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nb">document</span><span class="p">.</span><span class="nx">getElementById</span><span class="p">(</span><span class="s1">&#39;fit-vids-style&#39;</span><span class="p">))</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code js-file-line">      <span class="c1">// appendStyles: https://github.com/toddmotto/fluidvids/blob/master/dist/fluidvids.js</span></td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code js-file-line">      <span class="kd">var</span> <span class="nx">head</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">head</span> <span class="o">||</span> <span class="nb">document</span><span class="p">.</span><span class="nx">getElementsByTagName</span><span class="p">(</span><span class="s1">&#39;head&#39;</span><span class="p">)[</span><span class="mi">0</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code js-file-line">      <span class="kd">var</span> <span class="nx">css</span> <span class="o">=</span> <span class="s1">&#39;.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}&#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code js-file-line">      <span class="kd">var</span> <span class="nx">div</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s2">&quot;div&quot;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code js-file-line">      <span class="nx">div</span><span class="p">.</span><span class="nx">innerHTML</span> <span class="o">=</span> <span class="s1">&#39;&lt;p&gt;x&lt;/p&gt;&lt;style id=&quot;fit-vids-style&quot;&gt;&#39;</span> <span class="o">+</span> <span class="nx">css</span> <span class="o">+</span> <span class="s1">&#39;&lt;/style&gt;&#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code js-file-line">      <span class="nx">head</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">div</span><span class="p">.</span><span class="nx">childNodes</span><span class="p">[</span><span class="mi">1</span><span class="p">]);</span></td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code js-file-line">    <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code js-file-line">    <span class="k">if</span> <span class="p">(</span> <span class="nx">options</span> <span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code js-file-line">      <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span> <span class="nx">settings</span><span class="p">,</span> <span class="nx">options</span> <span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code js-file-line">    <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code js-file-line">    <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span></td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code js-file-line">      <span class="kd">var</span> <span class="nx">selectors</span> <span class="o">=</span> <span class="p">[</span></td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code js-file-line">        <span class="s1">&#39;iframe[src*=&quot;player.vimeo.com&quot;]&#39;</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code js-file-line">        <span class="s1">&#39;iframe[src*=&quot;youtube.com&quot;]&#39;</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code js-file-line">        <span class="s1">&#39;iframe[src*=&quot;youtube-nocookie.com&quot;]&#39;</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code js-file-line">        <span class="s1">&#39;iframe[src*=&quot;kickstarter.com&quot;][src*=&quot;video.html&quot;]&#39;</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code js-file-line">        <span class="s1">&#39;object&#39;</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code js-file-line">        <span class="s1">&#39;embed&#39;</span></td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code js-file-line">      <span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code js-file-line">      <span class="k">if</span> <span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">customSelector</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code js-file-line">        <span class="nx">selectors</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">customSelector</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code js-file-line">      <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code js-file-line">      <span class="kd">var</span> <span class="nx">ignoreList</span> <span class="o">=</span> <span class="s1">&#39;.fitvidsignore&#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code js-file-line">      <span class="k">if</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">ignore</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code js-file-line">        <span class="nx">ignoreList</span> <span class="o">=</span> <span class="nx">ignoreList</span> <span class="o">+</span> <span class="s1">&#39;, &#39;</span> <span class="o">+</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">ignore</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code js-file-line">      <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code js-file-line">      <span class="kd">var</span> <span class="nx">$allVideos</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">find</span><span class="p">(</span><span class="nx">selectors</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;,&#39;</span><span class="p">));</span></td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code js-file-line">      <span class="nx">$allVideos</span> <span class="o">=</span> <span class="nx">$allVideos</span><span class="p">.</span><span class="nx">not</span><span class="p">(</span><span class="s1">&#39;object object&#39;</span><span class="p">);</span> <span class="c1">// SwfObj conflict patch</span></td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code js-file-line">      <span class="nx">$allVideos</span> <span class="o">=</span> <span class="nx">$allVideos</span><span class="p">.</span><span class="nx">not</span><span class="p">(</span><span class="nx">ignoreList</span><span class="p">);</span> <span class="c1">// Disable FitVids on this video.</span></td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code js-file-line">      <span class="nx">$allVideos</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span></td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code js-file-line">        <span class="kd">var</span> <span class="nx">$this</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code js-file-line">        <span class="k">if</span><span class="p">(</span><span class="nx">$this</span><span class="p">.</span><span class="nx">parents</span><span class="p">(</span><span class="nx">ignoreList</span><span class="p">).</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code js-file-line">          <span class="k">return</span><span class="p">;</span> <span class="c1">// Disable FitVids on this video.</span></td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code js-file-line">        <span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">tagName</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">()</span> <span class="o">===</span> <span class="s1">&#39;embed&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">$this</span><span class="p">.</span><span class="nx">parent</span><span class="p">(</span><span class="s1">&#39;object&#39;</span><span class="p">).</span><span class="nx">length</span> <span class="o">||</span> <span class="nx">$this</span><span class="p">.</span><span class="nx">parent</span><span class="p">(</span><span class="s1">&#39;.fluid-width-video-wrapper&#39;</span><span class="p">).</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span><span class="p">;</span> <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code js-file-line">        <span class="k">if</span> <span class="p">((</span><span class="o">!</span><span class="nx">$this</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s1">&#39;height&#39;</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">$this</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s1">&#39;width&#39;</span><span class="p">))</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nb">isNaN</span><span class="p">(</span><span class="nx">$this</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;height&#39;</span><span class="p">))</span> <span class="o">||</span> <span class="nb">isNaN</span><span class="p">(</span><span class="nx">$this</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;width&#39;</span><span class="p">))))</span></td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code js-file-line">        <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code js-file-line">          <span class="nx">$this</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;height&#39;</span><span class="p">,</span> <span class="mi">9</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code js-file-line">          <span class="nx">$this</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;width&#39;</span><span class="p">,</span> <span class="mi">16</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code js-file-line">        <span class="kd">var</span> <span class="nx">height</span> <span class="o">=</span> <span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">tagName</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">()</span> <span class="o">===</span> <span class="s1">&#39;object&#39;</span> <span class="o">||</span> <span class="p">(</span><span class="nx">$this</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;height&#39;</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nb">isNaN</span><span class="p">(</span><span class="nb">parseInt</span><span class="p">(</span><span class="nx">$this</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;height&#39;</span><span class="p">),</span> <span class="mi">10</span><span class="p">)))</span> <span class="p">)</span> <span class="o">?</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">$this</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;height&#39;</span><span class="p">),</span> <span class="mi">10</span><span class="p">)</span> <span class="o">:</span> <span class="nx">$this</span><span class="p">.</span><span class="nx">height</span><span class="p">(),</span></td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code js-file-line">            <span class="nx">width</span> <span class="o">=</span> <span class="o">!</span><span class="nb">isNaN</span><span class="p">(</span><span class="nb">parseInt</span><span class="p">(</span><span class="nx">$this</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;width&#39;</span><span class="p">),</span> <span class="mi">10</span><span class="p">))</span> <span class="o">?</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">$this</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;width&#39;</span><span class="p">),</span> <span class="mi">10</span><span class="p">)</span> <span class="o">:</span> <span class="nx">$this</span><span class="p">.</span><span class="nx">width</span><span class="p">(),</span></td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code js-file-line">            <span class="nx">aspectRatio</span> <span class="o">=</span> <span class="nx">height</span> <span class="o">/</span> <span class="nx">width</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code js-file-line">        <span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">$this</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;id&#39;</span><span class="p">)){</span></td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code js-file-line">          <span class="kd">var</span> <span class="nx">videoID</span> <span class="o">=</span> <span class="s1">&#39;fitvid&#39;</span> <span class="o">+</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">random</span><span class="p">()</span><span class="o">*</span><span class="mi">999999</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code js-file-line">          <span class="nx">$this</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;id&#39;</span><span class="p">,</span> <span class="nx">videoID</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code js-file-line">        <span class="nx">$this</span><span class="p">.</span><span class="nx">wrap</span><span class="p">(</span><span class="s1">&#39;&lt;div class=&quot;fluid-width-video-wrapper&quot;&gt;&lt;/div&gt;&#39;</span><span class="p">).</span><span class="nx">parent</span><span class="p">(</span><span class="s1">&#39;.fluid-width-video-wrapper&#39;</span><span class="p">).</span><span class="nx">css</span><span class="p">(</span><span class="s1">&#39;padding-top&#39;</span><span class="p">,</span> <span class="p">(</span><span class="nx">aspectRatio</span> <span class="o">*</span> <span class="mi">100</span><span class="p">)</span><span class="o">+</span><span class="s1">&#39;%&#39;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code js-file-line">        <span class="nx">$this</span><span class="p">.</span><span class="nx">removeAttr</span><span class="p">(</span><span class="s1">&#39;height&#39;</span><span class="p">).</span><span class="nx">removeAttr</span><span class="p">(</span><span class="s1">&#39;width&#39;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code js-file-line">      <span class="p">});</span></td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code js-file-line">    <span class="p">});</span></td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code js-file-line">  <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code js-file-line"><span class="c1">// Works with either jQuery or Zepto</span></td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code js-file-line"><span class="p">})(</span> <span class="nb">window</span><span class="p">.</span><span class="nx">jQuery</span> <span class="o">||</span> <span class="nb">window</span><span class="p">.</span><span class="nx">Zepto</span> <span class="p">);</span></td>
      </tr>
</table>

  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="https://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.02476s from github-fe116-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents js-suggester-field" placeholder=""></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x flash-close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-dabc650f8a51dffd1d4376a3522cbda5536e4807e01d2a86ff7e60d8d6ee3029.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-d01013daa80c5a341ba3ddb684f2f26679eb369d67459151d5175a634a9e98a5.js" type="text/javascript"></script>
      
      
  </body>
</html>

