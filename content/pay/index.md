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

  <div style="
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  padding-top: 3rem;
  display: none;
  ">
    <div style="font-size: 1.3rem; padding-right: 2rem;">
      Question/問題/質問があります ?
    </div>
    <div style="
      display: flex; 
      flex-direction:row;
      width: 100%;
      justify-content: flex-start;
      align-items: center;
      ">
        <div style="height: 50px; width: 50px; margin-left: 1rem; padding: 0.3rem">
          <a href="//t.me/louislabs">
            <img src="/images/telegram.svg" alt="send louis a message !" />
          </a>
        </div>
        <div style="height: 50px; width: 50px; margin-left: 1rem">
          <a href='{{ getenv "WHATSAPP_NUMBER" }}'>
            <img src="/images/whatsapp.svg" alt="send louis a message !" />
          </a>
        </div>
        <div style="height: 50px; width: 50px; margin-left: 1rem; padding-left: 0.2rem">
          <a href='{{ getenv "DISCORD_LINK" }}'>
            <img src="/images/discord.svg" alt="send louis a message !" />
          </a>
        </div>
    </div>
  </div>

{{< /show_desktop >}}

{{< show_mobile >}}

## thank you very much

## 真係非常多謝

{{< /show_mobile >}}

<--->

{{< show_desktop >}}

  <div 
    class="qr-img" 
    style="background-image: url('./paycode.jpg'); ">
  </div>

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

<--->

<div class="qr-img" style="background-image: url('./tap_n_go.jpg'); "></div>

{{< /pay-work-three-columns >}}
