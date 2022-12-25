---
layout: pay

title: pay
date: '2019-05-02'

draft: false
---


{{< pay-work-three-columns >}}

{{< show_desktop >}}

  ## 真係非常多謝

  ## thank you very much

  ## どうもありがとうございます

  ## 非常感謝您

{{< /show_desktop >}}

{{< show_mobile >}}

  ## thank you very much
  ## 真係非常多謝

{{< /show_mobile >}}

<--->

{{< show_desktop >}}
  <div class="qr-img" style="background-image: url('./paycode.jpg'); "></div>

{{< /show_desktop >}}


{{< show_mobile >}}

  <div id="payme-button" class="qr-img" style="background-image: url('./paycode.jpg'); "></div>

  <script>
    document.querySelector('#payme-button').addEventListener('click', (event)   => {
      window.location = "https://payme.hsbc/louiscklaw"
    });
  </script>

{{< /show_mobile >}}

<--->

<div class="qr-img" style="background-image: url('./alipay.jpg'); "></div>

{{< /pay-work-three-columns >}}
