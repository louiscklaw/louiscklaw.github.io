---
layout: 'redirect_page'

title: connect to discord...
date: '2019-05-02'
jobDate: 2019

draft: false
---

redirecting you to Skype 

<script>
  if ('{{ getenv "SKYPE_LINK" }}' != ''){

    window.location.replace('{{ getenv "SKYPE_LINK" }}');
  }else{
    console.log('"SKYPE_LINK" is empty')
  }
</script>

