---
layout: 'redirect_page'

title: connect to Skype...
date: '2019-05-02'
jobDate: 2019

draft: false
---

redirecting you to Skype

<script>
  if ('{{ getenv "LINK_GITHUB" }}' != ''){

    window.location.replace('{{ getenv "LINK_GITHUB" }}');
  }else{
    console.log('"LINK_GITHUB" is empty')
  }
</script>
