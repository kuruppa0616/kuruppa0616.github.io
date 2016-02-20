---
layout: post
title: "僕の通知bot、@krp_kuについて"
date: 2016-02-19
category: other
---
こんにちはおやすみなさい  

### [@krp_ku](https://twitter.com/krp_ku)について  
<a class="twitter-timeline" href="https://twitter.com/krp_ku" data-widget-id="700594239520923649">@krp_kuさんのツイート</a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>

(フォロワーの殆どがスパム系botなことで有名 )  
俺がよく見ているサイトの更新情報を自動でつぶやくというよくあるbot  
そのサイトのツイッターアカウントをフォローしとけって話だけどアカウントがないサイトもあるし、  
フォロー欄がそれらで埋まるのが個人的に嫌なので作成


### どうやって動かしてるの
[IFTTT](https://ifttt.com)を使ってるの  
IFTTTってのはTwitterとかGmailとか大量のwebサービスを連携させることが出来る凄いサービス  
例えばGmailで新しいメールを受信するとTwitterでつぶやくみたいなのを簡単に組むことが出来る  
そして**無★料**  
俺は明日の天気を22時に今日の天気を7時にメールに送ってくるというのも組んである  
<br>

そしてこの通知アカウントはfeedとTwitterを連携させてある  
**feed取得→つぶやく**  
こんな感じ 超簡単  
難点はfeedの取得が一定時間ごとにまとめて行われるということ  
これにより大量の更新でTLが埋まってしまう  
まぁこれはIFTTTの仕様だし、しゃーないってことで諦めてる  
そのうち自力でPHPあたりで組んで動かしたい
<br>

注意点は多くのfeedを登録してしまうとそれに比例してツイート数が増える  
これによりTwitterに不正行為判定を食らって凍結されてしまうことがある  
（ツイ稼ぎに使っていた友人がされていた）  
普通に使う分には問題ないはず  

### 取得サイト一覧  
2016/02/19現在
<ul>
	<li>ライブドアニュース(IT経済)</li>
	<li>スコッパー速報</li>
	<li>3D人-3dnchu-</li>
	<li>ApkMirror</li>
	<li>窓の杜</li>
	<li>ジサクテック</li>
	<li>juggly</li>
	<li>オレ的ゲーム速報＠刃</li>
	<li>ITmedia News</li>
	<li>GIGAZINE</li>
	<li>電撃オンライン</li>
	<li>4Gamer.net</li>
	<li>Game*Spark</li>
	<li>ガジェット2ch</li>
	<li>ラノベの杜</li>
	<li>GIMP2の使い方</li>
	<li>IT速報</li>
	<li>或るプログラマの一生</li>
	<li>rigayaの日記兼メモ帳</li>
</ul>
増やしたり減らしたり勝手にしていく予定
