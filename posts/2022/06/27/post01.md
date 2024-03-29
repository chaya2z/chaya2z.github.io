---
title: '自宅インフラの紹介 ( 2022 )'
created_at: '2022-06-27'
---

趣味でやっている自宅サーバの紹介です。

# トポロジ

![機材一覧](/assets/2022062701/homeinfra-blog-01.png)

小規模なネットワークとして一般的な形だと思います。

後述しますが、SAN として動くサーバとは直接接続しています。

## 置いてる機材

![機材一覧](/assets/2022062701/homeinfra-blog-02.png)

| 番号 | 役割             | 機種名                      |
| ---- | ---------------- |--------------------------|
| 1    | サーバ           | HTE Proliant DL380 Gen8  |
| 2    | サーバ           | HTE Proliant ML310e Gen8 |
| 3    | サーバ           | HTE Proliant ML310e Gen8 |
| 4    | ファイアウォール | NTT BizBox               |
| 5    | L2 スイッチ      | Cisco Catalyst 2960X     |
| 6    | L3 スイッチ      | Cisco Catalyst 3750X     |

# 動かしてるもの

![機材一覧](/assets/2022062701/homeinfra-blog-03.png)

## ESXi

ストレージサーバ、Kubernetes、DNS サーバなどを運用しています。

## SAN

EXSi のデータストア用です。ESXi と直結しています。

## 監視

サーバやネットワーク機器の監視をしています。

## FW ( ファイアウォール )

Sophos Firewall Home Edition をインストールして使っています。無償利用できて、機能も豊富なのでおすすめです。特に L7 でのフィルタリングと VPN 機能はすごいなと思いました。

初期設定だとフィルタリングされすぎてしまうので注意。

## ネットワーク

ルーティングは OSPF を使った動的ルーティングをしています。 フィーチャーセットの問題で L3 スイッチが BGP を喋れないため OSPF を選びました。

VLAN 管理は L3 スイッチにやらせています。ネットワークの分割は 192.168.0.0/16 から VLAN に /24 を切り分けます。例えば、監視用には VLAN4 で 192.168.4.0/24 というネットワークを割り当てる感じです ( つまり、VLAN id と IP アドレスを関連させたかった ) 。

## おわり

特殊なことはしていないので、あまり面白味は無いかもしれませんが、紹介は以上です。
