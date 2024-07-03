---
title: 工作项目
date: 2022-05-12
categories:
  - 工作
tags:
  - 项目
hidden: true
index: false
---

# 工作项目

## 中交兴路(实习)
*   柴油联名卡
    *   beans  对外提供的对象模型(卡、充值、用户)
    *   common 过滤、工具、常量
    *   db-common 数据库操作

项目介绍：整体项目分为bussiness业务和fintech金融俩部分。利用ssm架构搭建的，数据库采用mysql存储数据，利用redis存储缓存信息。我做的业务方向，beans第三方对象传输，common公共工具，db-common数据库操作信息。油卡主要分为用户服务调用用户中心接口进行登录验证，卡申请业务，有门户和手机端俩种。充值服务于金融业务调接口进行充值交易明细等。文件服务器，用户信息文件上传。网关服务，与第三方进行接口调用。定时服务。统一的http接口，手机端api，门户api，网关api，文件api。


## 亚信科技

*   中国铁塔CRM

## 和融通支付
*   微信公众号 wechatservice（会员部收款器）
    *   技术栈\:SpringBoot v1.4+HttpClient + wechat4j
        *   wechart4j:请求处理成wechatRequest、wechatResponse，进行分发处理事件
            菜单接口，模板接口，客户会话接口、servlet

*   网关 hrt\_secure
    *   技术栈：SpringBoot 2.2+guava+redis+lombok+nacos
        *   nacos：配置服务，监听配置服务的变化
            监听nacos服务->加载配置->请求过来进行适配处理->返回信息

## 宜信

*   谛听-决策平台

