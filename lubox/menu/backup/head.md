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
  if (localStorage.getItem("user_os")){
    os = localStorage.getItem("user_os")
  } else {
    const parser = new UAParser();
    os = parser.getResult()?.os.name?.toLowerCase()
    window.localStorage.setItem("user_os", os)
  }
  document.addEventListener("DOMContentLoaded", () => {
    const shortcutEl = document.querySelector("#ac-shortcut p")
    if (os && os.includes("mac")) {
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

  <link href="https://fonts.googleapis.com/css?family=Fira+Mono" rel="stylesheet">

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
    
    .navbar-nav .d-flex .nav-link.active {
  background-color: transparent;
}

.navbar-nav .d-flex .nav-link:hover {
  background-color: rgba(0, 0, 0, 0.05);
}
@keyframes colorPulse {
  0%   { color: #682175;transform: scale(1); }   /* your main purple */
  50%  { color: #9a4ca5;transform: scale(1.5); }   /* lighter purple */
  100% { color: #682175;transform: scale(1); }
}

.navbar-nav .d-flex .nav-link i[class*="bi-"] {
  transition: color 0.3s ease;
}

.navbar-nav .d-flex .nav-link.active i[class*="bi-"],
.navbar-nav .d-flex .nav-link.hub-active i[class*="bi-"] {
  animation: colorPulse 1s ease-in-out infinite;
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