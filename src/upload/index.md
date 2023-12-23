---
title: upload to louis
layout: upload.njk
socialImage: /images/upload-social-image.png
description: upload link to louiscklaw/louislabs
---

<style>
  .lds-facebook {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }

  .lds-facebook div {
    display: inline-block;
    position: absolute;
    left: 8px;
    width: 16px;
    background: #000;
    animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  }

  .lds-facebook div:nth-child(1) {
    left: 8px;
    animation-delay: -0.24s;
  }

  .lds-facebook div:nth-child(2) {
    left: 32px;
    animation-delay: -0.12s;
  }

  .lds-facebook div:nth-child(3) {
    left: 56px;
    animation-delay: 0;
  }

  @keyframes lds-facebook {
    0% {
      top: 8px;
      height: 64px;
    }
    50%,
    100% {
      top: 24px;
      height: 32px;
    }
  }
</style>

<div class="lds-facebook"><div></div><div></div><div></div></div>

Redirecting you to upload page
of it doesn't, please click <a href="https://share.louislabs.com">here</a>

將您重新導向到上傳頁面
如果沒有，請點選<a href="https://share.louislabs.com">此處</a>

将您重定向到上传页面
如果没有，请点击<a href="https://share.louislabs.com">此处</a>

<script>
  window.location.replace("https://share.louislabs.com");
</script>
