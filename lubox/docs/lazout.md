  <% page_content = yield %>

<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- Google Tag Manager -->
  <script>
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-TD5R4XS');
  </script>
  <!-- End Google Tag Manager -->

  <link rel="manifest" href="/assets/images/fav/manifest.json">
  <link rel="icon" href="/assets/images/fav.svg">
  <link rel="mask-icon" href="/assets/images/fav.svg" color="#682175">

  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
  <link rel="stylesheet" href="/styles/quickstart.css">


<script src="https://cdn.jsdelivr.net/npm/ua-parser-js/dist/ua-parser.min.js"></script>
<script>
  let os;
  if (localStorage.getItem("user_os")) {
    os = localStorage.getItem("user_os")
  } else {
    const parser = new UAParser();
    os = parser.getResult()?.os.name?.toLowerCase()
    window.localStorage.setItem("user_os", os)
  }
  document.addEventListener("DOMContentLoaded", () => {
    const shortcutEl = document.querySelector("#ac-shortcut p")
    if (os.includes("mac")) {
      shortcutEl.querySelector("i").style.display = "inline";
      shortcutEl.querySelector("span").style.display = "none";
    } else {
      shortcutEl.querySelector("span").style.display = "inline";
      shortcutEl.querySelector("i").style.display = "none";
    }
  });
</script>

  <link rel="dns-prefetch" href="//live.luigisbox.com" />
  <link rel="stylesheet" href="https://cdn.luigisbox.com/autocomplete.css" />


  <title><%= discover_title(page_content) || current_page.data.title || "API Documentation" %></title>

  <%# <link href="https://fonts.googleapis.com/css?family=Fira+Mono" rel="stylesheet"> %>

  <style>
    <%= Rouge::Themes::MonokaiSublime.render(:scope => '.highlight') %>

    :root {
      --bs-info-bg-subtle: #682175a8;
      --bs-info-border-subtle: #bbadbd;
      --bs-info-text-emphasis: #fff;
    }

    [data-bs-theme="lbx"] {
        --bs-tertiary-bg: #a57dac;
        --bs-secondary-bg: #bbadbd;
        --bs-light-bg-subtle: #eee7f0;
        --bs-light-rgb: 243, 239, 244;
    }

    html {
      font-size: 15px;
    }

    :target {
      scroll-margin-top: 6rem;
    }

    #navbar-toc .active {
      font-weight: 700;
    }

    .required, .optional {
      display: block;
      font-size: 10px;
      margin: 2px;
    }

    .required {
      color: #09A921;
    }

    .optional {
      color: #ABABAB;
    }

    #navbar-toc .nav-link {
      text-decoration: none;
      color: var(--bs-secondary-color);
      display: block;
      border-left: .125rem solid transparent;
    }

    header {
      border-bottom: 1px solid #682175;
      background-color: #682175;
    }

    #navbar-toc .nav-link.active, #navbar-toc .nav-link:hover {
      border-left-color: var(--bs-code-color);
    }

    .navbar-nav .nav-link.active {
      background-color: var(--bs-secondary-bg);
      border-radius: 10px;
    }

    .navbar-nav .nav-link {
      border-radius: 10px;
    }
    .navbar-dark .navbar-nav .nav-link:hover {
      background-color: var(--bs-tertiary-bg);
      border-radius: 10px;
    }
    .navbar-light .navbar-nav .nav-link:hover {
      background-color: var(--bs-light-bg-subtle);
      border-radius: 10px;
    }

    .lb-sticky-offset {
      top: 85px !important;
    }

    .modal-backdrop {
      z-index: 1040;
    }

    .card, .alert {
      position: inherit;
    }

    .lb-code .nav-link {
      color: var(--bs-secondary-color);
    }
    .lb-code .nav-link.active {
      color: var(--bs-secondary-color);
    }

    h1 {
      font-size: calc(1.375rem + .3vw);
      margin-top: 4rem;
      margin-bottom: 2rem;
    }
    
    h2 {
      font-size: calc(1.325rem + .1vw);
      margin-top: 4rem;
      margin-bottom: 1.5rem;
    }
    h3 {
      font-size: calc(1.3rem + .0vw);
      margin-top: 3rem;
      margin-bottom: 1rem;
    }

    article > h1:nth-child(1) {
      font-size: calc(1.475rem + 1.0vw);
      margin-top: inherit;
      font-weight: 300;
      line-height: 1.2;
    }

    .lb-nav-bl {
      border-left: 1px solid #682175;
    }

    .vh-full {
      height: calc(100vh - 7rem) !important;
    }

    footer.text-bg-dark, footer .text-bg-dark {
      color: #bbb !important;
    }

    .table-airy td {
      padding: 1rem;
    }

    .proscons {
      list-style-type: none;
    }

    .proscons .pro::before {
      content: "✓";
      margin-left: -1.3em;
      width: 1.3em;
      display: inline-block;
      color: green;
    }

    .proscons .cons::before {
      content: "⤫";
      margin-left: -1.3em;
      width: 1.3em;
      display: inline-block;
      color: red;
    }

    .alert-info code, .alert-info a {
      color: #3e172a !important;
    }

    .r-hidden {
      display: none;
    }

    .bg-q-result, .bg-q-result td, .bg-q-result th {
      background: #eee7f0;
    }

    .hr-dashed {
      border-top-style: dashed;
    }

    article li {
      margin-bottom: 1em;
    }

    @media (max-width: 544px) {
      .navbar-brand img {
        height: 30px;
      }
      .navbar-brand {
        margin-right: 0.5rem !important;
      }
      .navbar-nav {
        font-size: 90%;
      }
      .nav-link {
          padding: 0.5rem !important;
      }
      header nav .row {
        padding-left: 0.5rem !important;
        padding-right: 0.5rem !important;
      }
    }

    @media (max-width: 991px) {
      .nav-main {
        padding: 0 !important;
        z-index: 1;
      }
      .nav-main nav {
        padding: 0 !important;
      }
    }

    .g-section {
      display: flex;
      flex-direction: row;
      margin-top: 2rem;
      --bs-link-color-rgb: 104, 33, 117;
    }

    .g-section .g-aside {
      writing-mode: vertical-rl;
      text-orientation: mixed;
      margin-top: 0;
      margin-bottom: 0;
      text-transform: uppercase;
      font-size: 0.75rem;
      font-weight: 300;
      padding-right: 1rem;
      border-right: 1px dashed #682175;
      color: #555455;
    }

    .g-section ol {
      list-style: none;
    }

    .g-section ol li {
      counter-increment: steps;
    }

    .g-section ol li::before {
      content: counter(steps);
      margin-right: 0.5rem;
      background: #bbadbd;
      color: white;
      width: 1.4em;
      height: 1.4em;
      line-height: 1.4em;
      border-radius: 50%;
      display: inline-grid;
      place-items: center;
      font-weight: 300;
    }

    article {
      counter-reset: steps;
    }

    em.g-alternative {
      margin-left: .2rem;
    }

    a.g-alternative {
      margin-left: 1rem;
      color: #939393;
    }

    .carousel-caption-bg {
      border-radius: 10px;
      background: #f3eff4;
      box-shadow: #ddd 10px 10px 10px
    }

    .live-aside, .bad-practice-aside {
      margin-left: auto;
      line-height: 2.8em;
      font-size: 90%;
      font-weight: 300;
      position: relative;
    }

    .live-icon {
      position: absolute;
      left: -1rem;
      top: 19px;
      transform: translateX(-50%) translateY(-50%);
      width: 15px;
      height: 15px;

      &:before {
        content: "";
        position: relative;
        display: block;
        width: 250%;
        height: 250%;
        box-sizing: border-box;
        margin-left: -75%;
        margin-top: -75%;
        border-radius: 45px;
        background-color: #75daad;
        animation: pulse 1.25s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
      }

      &:after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        display: block;
        width: 100%;
        height: 100%;
        background-color: #75daad;
        border-radius: 50px;
        animation: circle 1.25s cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite;
      }
    }
    
    .warning-text {
      color: #C32F27;
      font-weight: 500;
    }

    .success-text {
      color: #256d1b;
      font-weight: 500;
    }

    .good-practice, .bad-practice {
      @media (max-width: 530px) {
        margin-left: 0 !important;
        margin-bottom: 10px !important;
        margin-top: -15px !important;
      }
    }

    .border-good-practice {
      border: 1px solid #256d1bd1;
    }

    .border-bad-practice {
      border: 1px solid #C32F27;
    }

    @keyframes pulse {
      0% {
        transform: scale(0.33);
      }
      80%,
      100% {
        opacity: 0;
      }
    }

    @keyframes circle {
      0% {
        transform: scale(0.8);
      }
      50% {
        transform: scale(1);
      }
      100% {
        transform: scale(0.8);
      }
    }

    header nav .row {
      padding-left: 1rem !important;
      padding-right: 1rem !important;
    }
    </style>

  <style>
    header .row > * {
      padding: 0;
    }
    nav.container-fluid {
      position: relative;
    }
    #ac-wrapper {
      position: relative;
      height: 48px;
      ::-webkit-scrollbar {
        width: 4px; /* Width of the scrollbar */
        height: 4px; /* Width of the scrollbar */
      }

      /* The draggable part of the scrollbar */
      ::-webkit-scrollbar-thumb {
          background: lightgray; /* Color of the scrollbar */
          border-radius: 0px; /* Rounded corners */
      }

      /* The scrollbar on hover */
      ::-webkit-scrollbar-thumb:hover {
          background: #555; /* Darker color on hover */
      }

      /* The track (background) of the scrollbar */
      ::-webkit-scrollbar-track {
          background: #fffff; /* Color of the track */
          border-radius: 10px 0px 10px 0px; /* Rounded corners */
      }
    }
    #lb-search {
      width: 412px;
      background-color: white;
      border-radius: 10px;
      position: absolute;
      top: 0;
      left: 0;
      @media (max-width: 992px) {
        width: 100%;
      }
      &.subtle-shadow-popup {
        -webkit-box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* For WebKit browsers */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Standard */
        border-radius: 8px; /* Optional: softens the popup corners */
      }
      input[type="search"]::-webkit-search-cancel-button {
        display: none;
      }
      form {
        display: flex;
        align-items: center;
        padding: 0px 16px;
        gap: 8px;
        #search-input {
          all: unset; /* Resets all properties to their initial value */
          height: 48px;
          flex-grow: 1;
          font-size: 16px;
        }
        &:focus-within {
          #ac-shortcut {
            display: none;
          }
          #search-input::-webkit-search-cancel-button {
            display: block;
          }
        }
        #search-icon {
          width: 24px;
          height: 24px;
        }
        #ac-shortcut {
          font-size: 12px;
          height: 24px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 0.6px solid #682175;
          color: #682175;
          border-radius: 4px;
          display: flex;
          align-items: center;
          padding: 0px 8px;
          p {
            margin-bottom: 0;
            i, span {
              display: none;
            }
          }
          @media (max-width: 992px) {
            display: none;
          }
        }
      }
      /* AC */
      .luigi-ac {
        position: relative;
        color: #682175;
        -webkit-box-shadow: none;
        border-radius: 0 0 8px 8px;
        box-shadow: none;
        max-height: 75vh;
        * {
          border: none;
        }
        .luigi-ac-main,
        .luigi-ac-others {
          padding: 0 6px;
        }
        .luigi-ac-enter {
          background: #fbe7ff;
          padding: 12px 16px;
          font-size: 14px;
        }
        .luigi-ac-header {
          background: none;
          padding-top: 8px;
          padding-bottom: 4px;
          .luigi-ac-header-inner {
            text-transform: capitalize;
          }
        }
        .luigi-ac-item {
          &:hover {
            background-color: #fdf3ff;
            border-radius: 6px;
          }
        }
        td > i {
          margin-right: 12px;
        }
        .luigi-ac-title {
          font-weight: 400;
          color: #864d91;
          padding-bottom: 2px;
        }
        .luigi-ac-footer {
          display: none;
        }
        .luigi-ac-button-block {
          margin-top: 16px;
          margin-right: -6px;
          margin-left: -6px;
          width: calc(100% + 12px);
          .luigi-ac-button {
            background-color: #682175;
            text-transform: capitalize;
          }
        }
        .luigi-ac-indent {
          display: none;
        }
        .luigi-ac-text {
          padding-left: 38px;
        }
        .luigi-side-line {
          position: absolute;
          width: 0.8px;
          background: #bea0c4;
          left: 17px;
          top: -2px;
          height: 100%;
          height: calc(100% + 4px);
        }
        .luigi-ac-highlight {
          background-color: #fbe7ff;
        }
        /* Wrappers */
        .luigi-ac-_item-wrapper,
        .luigi-ac-sections-wrapper,
        .luigi-ac-examples-wrapper {
          position: relative;
        }
      }
      /* AC POPUP */
      .luigi-ac-query-empty {
        .luigi-ac-enter {
          display: none;
        }
        .luigi-ac-footer {
          display: block;
          background-color: white;
        }
      }
    }
    .w-vw-100 {
      width: 100vw;
    }

    @media (max-width: 576px) {
      #offcanvasNavbar {
        top: 118px !important;
      }
    }

    @media (min-width: 576px) and (max-width: 992px) {
      #offcanvasNavbar {
        top: 131px !important;
      }
    }

    .twocolumns > div > * {
      width: 60%;
      padding-right: 2em;
    }

    .twocolumns blockquote, .twocolumns .lb-code {
      width: 40%;
      float: right;
      clear: both;
      padding-right: 0;
    }

    .col-lg-7.positon-relative {
      position: relative;

      .dropdown-api {
        position: absolute;
        top: 1rem;
        right: 1.5rem;
        width: 93px;

        .btn {
          width: 100%;
          font-size: 14px;
          font-weight: 400;
          background-color: #9B6CA4;
          border: 0;
          border-radius: 6px;
          transition: none;

          &::after {
            margin-left: 10px;
          }

          &.show {
            background-color: #692175;
            border-radius: 6px 6px 0 0;

            &::after {
              border-bottom: .3em solid;
              border-top: 0;
            }
          }
        }
        .dropdown-menu  {
          inset: -3px 0px auto auto !important;
          width: 100%;
          min-width: auto;
          background-color: #692175;
          border: none;
          border-radius: 0 0 6px 6px;

          .dropdown-item {
            color: #fff;
            font-size: 14px;
            font-weight: 200;

            &:first-child {
              &::before {
                content: "";
                display: inline-block;
                position: absolute;
                top: 0;
                border-top: 1px solid #ffffff60;
                width: calc(100% - 36.5px);
              }
            }

            &:hover {
              background-color: #692175;
              font-weight: 400;
            }

            &.active {
              background-color: #692175;
              font-weight: 400;

              &::after {
                content: "\f26a";
                display: inline-block;
                font-family: bootstrap-icons !important;
                font-size: 10px;
                font-style: normal;
                font-weight: normal !important;
                font-variant: normal;
                text-transform: none;
                line-height: 1;
                vertical-align: -.125em;
                margin-left: 10px;
                -webkit-font-smoothing: antialiased;
              }
            }
          }
        }
      }
    }

    .search_examples_basic {
        .lb-search .lb-quick-searches {
          margin-top: 0px;
          @media (min-width: 1900px) {
            margin-top: -58px;
          }
        }
    }
       <style>
    html, body {
      max-width: 100vw;
      overflow-x: hidden;
    }

    @media (max-width: 767px) {
      table {
        display: block;
        width: 100%;
        overflow-x: auto;
        box-sizing: border-box;
      }
}
  </style>
  </style>

  <style>
    .tutorial blockquote {
      font-style: italic;
      font-weight: 300;
    }
  /* Tutorials menu */
    .tutorial-steps-overview {
     .close-steps-overview {
          display: none;
        }
      @media (max-width: 992px) {
        &.open {
          display: block !important;
          width: 400px !important;
          position: fixed !important;
          top: 130px !important;
          right: 0 !important;
          background: white;
          padding-bottom: 30px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .close-steps-overview {
          display: block;
        }
      }
      @media (max-width: 576px) {
        &.open {
          width: 100% !important;
          top: 118px !important;
        }
      }
      .text-theme-color {
        color: #682175;
      }

      .steps-container {
          margin-left: 12px;
          position: relative;
      }

      .progress-empty {
          position: absolute;
          width: 1px;
          background: #cccccc;
          height: 100%;
      }

      .progress-fill {
          position: absolute;
          width: 1px;
          background: #682175;
      }

      .steps-list {
          margin-left: 24px;
      }

      .check-icon {
          color: #682175;
      }
      .heading i {
         margin-top: 4px
      }
    }
    .steps-overview-btn {
      position: fixed;
      bottom: 24px;
      right: 24px;
      width: 160px;
      border-radius: 8px;
      height: 48px;
      background: #682175;
      display: none;
      @media (max-width: 992px) {
        display: flex;
      }
    }
  </style>
  <style>
  /* Feedback Widget Styles */
  .feedback-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .feedback-menu {
    text-align: center;
  }
  
  #feedback {
    text-align: center;
  }
  
  #feedback button {
    background: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: none;
    margin: 0 10px;
  }
  
  #feedback button svg {
    display: block;
  }
  
  #feedback button svg path {
    fill: #000;
    transition: fill 0.3s ease;
  }
  
  #feedback-up.selected svg path {
    fill: green;
  }
  
  #feedback-up:hover svg path {
    fill: green;
  }
  
  #feedback-down.selected svg path {
    fill: red;
  }
  
  #feedback-down:hover svg path {
    fill: red;
  }
  
  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
  
  svg.animate {
    animation: bounce 0.5s ease-out;
  }
  
  #feedback-container {
    transition: opacity 0.5s ease;
  }
  
  #feedback-container.fade-out {
    opacity: 0;
  }
  
  #feedback-container.fade-in {
    opacity: 1;
  }
  
  #feedback-container .button-styles {
    display: inline-block;
    visibility: visible;
    padding: 10px 20px;
    font-size: 16px;
    color: #ffffff;
    background-color: #632276;
    border: 1px solid #0056b3;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease, border-color 0.3s ease;
  }
  
  #feedback-container .button-styles:hover {
    background-color: #a338c2;
  }
  </style>
</head>

<body data-bs-spy="scroll" data-bs-target="#navbar-toc" class="<%= page_classes %>"  data-url="<%= current_page.url %>">
  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TD5R4XS"
    height="0" width="0" style="display:none;visibility:hidden"></iframe>
  </noscript>
  <!-- End Google Tag Manager (noscript) -->
  <header class="navbar navbar-expand-lg navbar-dark shadow sticky-top" data-bs-theme="lbx">
    <nav class="container-fluid justify-content-start">
      <div class="row align-items-center w-vw-100">
        <!-- Logo -->
        <div class="col-auto pe-0">
          <a class="navbar-brand d-block me-2" href="/">
            <img src="/assets/images/logo.svg" class="d-none d-md-block" />
            <img src="/assets/images/logo-sm.svg" class="d-block d-md-none" />
          </a>
        </div>

        <!-- Nav items -->
        <div class="col-auto p-0 p-sm-2">
          <ul class="navbar-nav flex-row">
            <li class="nav-item">
              <a class="nav-link fw-semibold text-white p-2" href="/"><i class="bi-book me-2 d-none d-sm-inline-block"></i>Docs</a>
            </li>
            <li class="nav-item">
              <a class="nav-link fw-semibold text-white p-2" href="/examples.html"><i class="bi-box-seam-fill me-2 d-none d-sm-inline-block"></i>Examples</a>
            </li>
            <li class="nav-item">
              <a class="nav-link fw-semibold text-white p-2" href="/lbx.html"><i class="bi-bandaid me-2 d-none d-sm-inline-block"></i>LBX Integration</a>
            </li>
          </ul>
        </div>

        <!-- Search bar (Element X) -->
        <div class="col-12 col-lg-auto order-last mt-3 mt-lg-0 pe-0 ps-lg-2">
          <div id="ac-wrapper">
            <div id="lb-search" class="subtle-shadow-popup">
              <form action="/search/searchPage.html">
                <div id="search-icon" class="d-flex align-items-center justify-content-center">
                  <i class="bi bi-search fs-5"></i>
                </div>
                <input type="search" name="q" id="search-input" class="" placeholder="Search in documentation" />
                <div id="ac-shortcut">
                  <p><i class="bi bi-command"></i> <span>ctrl +</span> k</p>
                </div>
              </form>
            </div>
          </div>
        </div>

        <!-- Toggler button -->
        <div class="col-auto ms-auto d-lg-none pe-0">
          <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    </nav>
  </header>

<div class="container-fluid border-bottom">
  <div class="row">
    <aside class="col-lg-2 pb-5 bg-light nav-main" data-bs-theme="lbx">
      <nav class="navbar navbar-light navbar-expand-lg overflow-y-scroll position-sticky lb-sticky-offset">
        <div class="offcanvas offcanvas-start" id="offcanvasNavbar">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Navigation</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav flex-column vh-full" data-bs-theme="lbx">
              <% if current_page.path == "lbx.html" || current_page.path.start_with?('lbx/') %>
                <% main_menu = data.lbx %>
              <% else %>
                <% main_menu = data.menu %>
              <% end %>
              <% main_menu.menu.each do |data| %>
                <li class="nav-item">
                  <a class="nav-link fw-semibold py-1 <%= current_page.url == data.link ? 'active' : ''%>" href="<%= data.link %>"><i class="me-1 bi-<%= data.icon %>"></i><%= data.title %></a>
                </li>
                <% if data.children %>
                  <ul class="navbar-nav ms-3 flex-column lb-nav-bl">
                    <% data.children&.each do |child| %>
                      <li class="nav-item">
                        <a class="nav-link py-1 ms-2 <%= current_page.url == child.link ? 'active' : ''%>" href="<%= child.link %>"><%= child.title %></a>
                      </li>
                    <% end %>
                  </ul>
                <% end %>
              <% end %>
            </ul>
          </div>
        </div>
      </nav>
    </aside>

    <% article_class = current_page.data.stretch ? 'col-lg-10' : 'col-lg-7' %>
    <% article_class = current_page.data.twocolumns ? 'col-lg-10 twocolumns' : article_class %>
    <% article_class = current_page.data.tutorial ? "#{article_class} tutorial" : article_class %>

    <article class="<%= article_class %> py-3 pb-5 px-4 positon-relative">

    
    <%= page_content %>
    <hr>

    <!-- Feedback section and associated styles -->
    <div class="feedback-wrapper">
      <div class="feedback-menu">
          <h3>Was this page helpful?</h3>
          <div id="feedback">
            <div id="feedback-container">
              <button id="feedback-up" aria-label="Thumbs Up">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M2 21h4V9H2v12zm20-11h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 2 7.59 8.59C7.22 8.95 7 9.45 7 10v8c0 .55.45 1 1 1h9c.82 0 1.54-.5 1.85-1.22l3.02-7.05c.09-.23.13-.47.13-.73v-1z"/>
                </svg>
              </button>
            
              <button id="feedback-down" aria-label="Thumbs Down">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M22 3h-4v12h4V3zm-20 11h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 22l6.58-6.59c.37-.36.59-.86.59-1.41V6c0-.55-.45-1-1-1H7c-.82 0-1.54.5-1.85 1.22L2.13 14.27C2.04 14.5 2 14.74 2 15v-1z"/>
                </svg>
              </button>
            </div>
          </div>
      </div>
    </div>
    
    
    <% if current_page.path.start_with?('autocomplete/examples') %>
    <%= partial 'includes/examples', locals: {tree: data.examples.autocomplete} %>
    <% end %>
    <% if current_page.path.start_with?('recommendations/examples') %>
    <%= partial 'includes/examples', locals: {tree: data.examples.recommender} %>
    <% end %>
    </article>

    <% if current_page.path.start_with?('autocomplete/examples') %>
      <%= partial 'layouts/examples_menu', locals: {menu: 'autocomplete'} %>
    <% end %>
    <% if current_page.path.start_with?('recommendations/examples') %>
      <%= partial 'layouts/examples_menu', locals: {menu: 'recommender'} %>
    <% end %>

    <% if !current_page.data.tutorial && !current_page.data.stretch && (toc_data(page_content).size > 1 || (toc_data(page_content).size == 1 && toc_data(page_content)[0][:children].any?)) %>
      <aside id="navbar-toc" class="col-lg-3 pe-4 overflow-y-scroll position-sticky vh-full lb-sticky-offset d-none d-lg-block">
        <strong class="d-none d-md-block h6 my-2 ms-3">On this page</strong>
        <hr class="d-none d-md-block my-2 ms-3">

        <ul class="nav flex-column">
          <% toc_data(page_content).each do |h1| %>
  <li class="nav-item">
    <a href="#<%= h1[:id] %>" class="nav-link py-1" data-title="<%= h1[:title] %>">
      <%= h1[:content] %>
      <% if h1[:http_method] %>
        <span class="badge text-bg-light float-end"><%= h1[:http_method] %></span>
      <% end %>
    </a>
    <% if h1[:children].length > 0 %>
      <ul class="nav flex-column ms-4">
        <% h1[:children].each do |h2| %>
          <li class="nav-item">
            <a href="#<%= h2[:id] %>" class="nav-link py-1" data-title="<%= h2[:title] %>">
              <%= h2[:content] %>
              <% if h2[:http_method] %>
                <span class="badge text-bg-light float-end"><%= h2[:http_method] %></span>
              <% end %>
            </a>
            <% if h2[:children] && h2[:children].length > 0 %>
              <ul class="nav flex-column ms-4">
                <% h2[:children].each do |h3| %>
                  <li class="nav-item">
                    <a href="#<%= h3[:id] %>" class="nav-link py-1" data-title="<%= h3[:title] %>">
                      <%= h3[:content] %>
                      <% if h3[:http_method] %>
                        <span class="badge text-bg-light float-end"><%= h3[:http_method] %></span>
                      <% end %>
                    </a>
                  </li>
                <% end %>
              </ul>
            <% end %>
          </li>
        <% end %>
      </ul>
    <% end %>
  </li>
<% end %>
        </ul>
      </aside>
    <% end %>

    <% if current_page.path.start_with?('tutorials/') %>
      <%= partial 'layouts/tutorial_steps_overview' %>  
    <% end %>
  </div>
</div>

<div class="container-fluid bg-dark">
  <footer class="py-3 container text-bg-dark">
    <div class="row mt-5">
      <div class="col-md-6">
        <a href="/" class="mb-3 mb-md-0 text-decoration-none">
          <img src="/assets/images/logo.svg" height="64"/>
        </a>
        <p class="my-3 mb-md-0">© 2016—2025 Luigi's Box</p>
      </div>
      <div class="col-md-3">
        <h5>System status</h5>
        <iframe src="https://www.luigisboxstatus.com/badge?theme=dark" width="250" height="30" frameborder="0" scrolling="no"></iframe>
      </div>
      <div class="col-md-3">
        <h5>Resources</h5>
        <ul class="list-unstyled">
          <li class="mb-2"><a href="https://www.luigisbox.com" class="text-bg-dark">Website</a></li>
          <li class="mb-2"><a href="https://help.luigisbox.com" class="text-bg-dark">Knowledge base</a></li>
          <li class="mb-2"><a href="mailto:support@luigisbox.com" class="text-bg-dark">Contact our support</a></li>
        </ul>
      </div>
    </div>
  </footer>
</div>

<script>
  function LBInitGlobalAutocomplete() {
    AutoComplete(
      {
        Layout: 'line',
        TrackerId: '459915-554117',
        Locale: 'en',
        TypingSuggestions: true,
        ShowBranding: false,
        Placeholder: '#lb-search',
        AfterRender: function (query, results, emitAnalyticsEventFn) {
          document.querySelector('#lb-search').classList.add('subtle-shadow-popup');
          document.querySelectorAll('.luigi-ac-header td').forEach((header) => {
            header.insertAdjacentHTML('afterbegin', `<i class="bi bi-box "></i>`);
          });
          document.querySelectorAll('.luigi-ac-_item-wrapper, .luigi-ac-sections-wrapper, .luigi-ac-examples-wrapper').forEach((section) => {
            section.insertAdjacentHTML('afterbegin', `<div class="luigi-side-line"></div>`);
          });
        },
        AfterClose: function () {},
        FormatForDisplay: function (result) {
          function capitalize(word) {
            let capitalized = word.charAt(0).toUpperCase() + word.slice(1);
            const exceptionsMapping = {
              Lbx: 'LBX',
              Api: 'API',
            };
            for (const key in exceptionsMapping) {
              capitalized = capitalized.replace(key, exceptionsMapping[key]);
            }
            return capitalized;
          }
          const chevron = `  &#x203A;  `;
          const atts = result.attributes;

          if (result.type === 'sections' || result.type === 'examples') {
            const masterUrl = atts.original_url
            const topLevelCat = masterUrl?.split('/')?.[1].split("#")?.[0]?.replace('.html', '').replaceAll('_', ' ').replace(/[ ]js/, '.js');
            const capitalizedTopLevelCat = capitalize(topLevelCat);
            if (capitalizedTopLevelCat !== atts['title.untouched']) {
              result.attributes.title = `${capitalizedTopLevelCat}${chevron}${result.attributes.title}`;
            }
          }

          return result;
        },
        Translations: {
          en: {
            showAllTitle: 'Show all results',
            types: {
              _item: {
                name: 'Articles',
                recommendHeroName: 'Top Articles',
                heroName: 'Top Articles',
                recommendName: 'Top Categories',
              },
              sections: {
                name: 'Sections',
                recommendHeroName: 'Top Sections',
                heroName: 'Top Sections',
                recommendName: 'Top Sections',
              },
              examples: {
                name: 'Examples',
                recommendHeroName: 'Top Examples',
                heroName: 'Top Examples',
                recommendName: 'Top Examples',
              },
            },
          },
        },
        Types: [
          {
            type: '_item',
            name: 'Items',
            size: 6,
            recommend: {
              size: 4,
            },
          },
          {
            type: 'sections',
            name: 'Sections',
            size: 3,
            recommend: {
              size: 2,
            },
          },
          {
            type: 'examples',
            name: 'Example',
            size: 3,
            recommend: {
              size: 2,
            },
          },
        ],
      },
      '#search-input'
    );
  }

  document.addEventListener('keydown', function (event) {
    // Check if the "Cmd" (or "Ctrl") key and "k" key are pressed
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      document.querySelector('#search-input').click();
      document.querySelector('#search-input').focus();
    }
  });
</script>
<script src="https://cdn.luigisbox.com/autocomplete.js" async onload="LBInitGlobalAutocomplete()"></script>

<script>
  function handleSearchInitialization() {
    const path = window.location.pathname;
    if (!path.startsWith("/search/searchPage.html")) {
      return
    }
    LBInitDocumentationSearch()
  }

  function LBInitDocumentationSearch() {
    Luigis.Search({
      TrackerId: '459915-554117',
      Locale: 'en',
      Theme: 'boo',
      Size: 21,
      Facets: ['brand', 'category', 'price_amount'],
      DefaultFilters: {
          type: '_item'
      },
      QuicksearchTypes: ['category', 'brand'],
      UrlParamName: {
        QUERY: 'q',
      },
      OnDone(query, results, emitAnalyticsEventFn) {},
    }, '#search-input', '#search-ui')
  }
</script>
<script>
document.addEventListener("DOMContentLoaded", () => {
  const upButton = document.getElementById("feedback-up");
  const downButton = document.getElementById("feedback-down");
  const feedbackContainer = document.getElementById("feedback-container");

  const FeedbackType = {
    UP: "up",
    DOWN: "down",
  };

  const FeedbackForms = {
    ONSUCCESS_FORM: "https://docs.google.com/forms/d/e/1FAIpQLScsv_-1lx09vDCYdIfP4Q6Gpt3K6WUyqvGXQe3yQN03Z7nm2A/viewform?usp=pp_url&entry.2144526813=SOURCE_URL_PLACEHOLDER",
    ONISSUE_FORM: "https://docs.google.com/forms/d/e/1FAIpQLSfdlN8_MBbvQH8OvJHpv7LRIuM7IVdM9Qn6gqS-bqI5ApP0VA/viewform?usp=pp_url&entry.233291793=SOURCE_URL_PLACEHOLDER",
  };

  const URL_PLACEHOLDER = "SOURCE_URL_PLACEHOLDER";

  function populateUrlWithCurrentPage(baseUrlWithPlaceholder, placeholder) {
    const currentPageUrl = window.location.href;
    return baseUrlWithPlaceholder.replace(placeholder, encodeURIComponent(currentPageUrl));
  }

  function createFeedbackButton(feedbackType) {
    const button = document.createElement("button");
    button.classList.add("button-styles"); // Make sure .button-styles is defined in your CSS

    let baseFormUrl;
    if (feedbackType === FeedbackType.UP) {
      button.textContent = "Help us improve our docs";
      baseFormUrl = FeedbackForms.ONSUCCESS_FORM;
    } else { // FeedbackType.DOWN
      button.textContent = "Report an issue";
      baseFormUrl = FeedbackForms.ONISSUE_FORM;
    }

    // Populate the URL using the helper function
    const targetFormUrl = populateUrlWithCurrentPage(baseFormUrl, URL_PLACEHOLDER);

    button.onclick = () => {
      window.open(targetFormUrl, "_blank");
    };

    return button;
  }

  function handleFeedbackClick(event) {
    const clickedButton = event.currentTarget;
    const otherButton = clickedButton === upButton ? downButton : upButton;

    otherButton.classList.remove("selected");
    clickedButton.classList.add("selected");

    // Animate the clicked button
    const svg = clickedButton.querySelector("svg");
    svg.classList.add("animate");
    svg.addEventListener(
      "animationend",
      () => {
        svg.classList.remove("animate");
      },
      { once: true }
    );

    const feedbackType = clickedButton === upButton ? FeedbackType.UP : FeedbackType.DOWN;

    // Send feedback to Google Analytics

    dataLayer.push({
      'event': "feedback",
      'event_category': "User Feedback",
      'event_label': feedbackType
    });
    
      

    feedbackContainer.classList.add("fade-out");

    setTimeout(() => {
      feedbackContainer.innerHTML = `<p>Your opinion matters to us! 🩵</p>`;

      const button = createFeedbackButton(feedbackType);
      feedbackContainer.appendChild(button);
      feedbackContainer.classList.add("fade-in");
    }, 500); 
  }

  upButton.addEventListener("click", handleFeedbackClick);
  downButton.addEventListener("click", handleFeedbackClick);
});
</script>

<script src="https://cdn.luigisbox.com/search.js" async onload="handleSearchInitialization()"></script>
<script src="https://cdn.luigisbox.com/docs-luigisbox-com.js" async></script>
</body>
</html>
