---
layout: 'redirect_page'

title: connect to GITHUB...
date: '2019-05-02'
jobDate: 2019

draft: false
---

redirecting you to GITHUB 

<script>
  if ('{{ getenv "GITHUB_LINK" }}' != ''){

    window.location.replace('{{ getenv "GITHUB_LINK" }}');
  }else{
    console.log('"GITHUB_LINK" is empty')
  }
</script>

