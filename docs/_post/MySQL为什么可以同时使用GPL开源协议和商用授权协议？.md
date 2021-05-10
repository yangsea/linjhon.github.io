---
title: MySQL为什么可以同时使用GPL开源协议和商用授权协议？
date: 2021-05-10 16:33:45
author: 匿名
tags:
  - 转载
  - MySQL
---

:::tip
我们都知道 `MySQL` 是开源数据库，用的是 `GPLv2` 开源许可协议，大家都可以随便拿来用。当然，很多人也都知道 `MySQL` 其实是采用了双授权模式，社区开源版本用的是 `GPL` ，但其实 `Oracle` 还给了 `MySQL` 一份商用授权协议。这篇文章我们就来讨论一下 `MySQL` 采用双授权的合法性和在什么情况下使用 `MySQL` 需要 `Oracle` 的商业授权。
:::

<!-- more -->

## 为什么说 Oracle 拥有 MySQL：对开源软件版权的认识

首先在这里说明一下开源软件的版权问题，我们知道只要是软件肯定都有版权，对于开源软件也不例外。很多人认为既然作者把软件开源了，那就是放弃版权了，所以其他人就可以随便拿来用，这种理解是错误的。我们前面的文章说过软件的许可协议就是软件作者规定使用者可以怎么来用这个软件的，我们之所以可以按 `GPL` 的规定来使用开源软件，其实是软件作者赋予我们的权利。为什么作者可以赋予我们这个权利，那是因为开源软件作者有这个软件的版权。

这样也就可以解开一些人的疑问了，为什么经常听说 `MySQL` 等开源软件经常被这个收购那个收购的，不是开源吗，收的啥？其实收的除了那些开发人员外，主要还是版权。具体到 `MySQL` ，从 `MySQL AB`，到 `Sun`，到最后被 `Oracle` 收购，那 `Oracle` 自然就有 `MySQL` 的版权，也就是 `MySQL` 的主人。

## 双许可证模式

`MySQL` 采用的是双许可证模式，即开源版本用的是 `GPL` 开源协议，我们知道 `GPL` 协议是很严格的，如果你改了 `GPL` 软件用于分发，那必须是开源的，如果做不到，那你就别用。而 `MySQL` 采用的是，如果你能遵守 `GPL` 协议，那你可以用，但如果你不想遵守 `GPL` 协议，而又想用 `MySQL` 的代码，那你可以向 `MySQL` 购买商业授权。比如你在 `MySQL` 的基础上进行了改进，觉得很好，可以拿来卖钱，不想再开源了，在 `GPL` 下是不行的，但你可以向 `MySQL` 购买商业许可，这样你就可以闭源你的代码了。

可能这里就有疑问了，明明已经在 `GPL` 协议下发布了，为什么 `Oracle` 公司还可以再卖商业授权？这其实还是因为 `Oracle` 拥有版权的原因，不管是 `GPL` 还是商业授权，都是版权所有者对其他人设置的使用规则，而自己要不要遵守是不受约束的。**版权所有者每放出一个版本，都有权决定该版本采用什么样的协议，并不是之前的版本采用了 GPL，之后放出的版本都必须采用 GPL，这个权利是版权法赋予的。** 这也就是 `MySQL` 被收购之后，人们都担心会被 `Oracle` 闭源，因为 `Oracle` 确实有这个权利。

## 什么情况下应该购买 MySQL 的商业授权？

看下 `Oracle` 官网上关于商业授权的描述

:::tip

**Q3: As a commercial OEM, ISV or VAR, when should I purchase a commercial license for MySQL software?**

A: OEMs, ISVs and VARs that want the benefits of embedding commercial binaries of MySQL software in their commercial applications but do not want to be subject to the GPL and do not want to release the source code for their proprietary applications should purchase a commercial license from Oracle. Purchasing a commercial license means that the GPL does not apply, and a commercial license includes the assurances that distributors typically find in commercial distribution agreements.
:::

翻译一下，原始设备制造商，独立软件供应商和增值经销商希望将 `MySQL` 软件的商业二进制文件嵌入其商业应用程序中，但不希望受到 `GPL` 的限制，并且不想为其专有应用程序发布源代码，则应购买 `Oracle` 的商业许可证。购买商业许可证意味着 `GPL` 不适用，商业许可证包括分销商通常在商业分销协议中的条款。

也就是说，如果你想把 `MySQL` 加入到你的商业软件中，那就得买 `Oracle` 的商业许可，这个许可和普通的商业许可没有什么区别。

## 购买 MySQL 官网上的企业版就是购买商业许可吗？

我们知道 `MySQL` 分好多版本，官网上除了社区版外，还有企业版、标准版、经典版等需要付费的版本，甚至有 `MySQL` 的业务员说你要想商业应用就必须买付费版本，这个说法其实是错误的，要不就是业务员本身不懂，要不就是他们在忽悠你。

`GPL` 协议明确说了开源软件是可以用于商业目的，只要遵守 `GPL` 协议就可以了，只要你不是去卖这个软件，哪怕用在你的生产环境上，也是不用付费的。而 `GPL` 规定的开源软件收费模式就是为分发这个软件或者提供技术服务收费。就是我为了把这个软件发给你，可能要建个网站，或者可能得让员工给你发个邮件，为这种劳动可以收费，也可以是我为你提供技术服务，帮你维护软件而收费。`MySQL` 官网上的那些付费版本，其实就是在卖技术服务，并不是在卖版权。比如 `MySQL` 企业版提供的服务，高可用、集群、防火墙、审计、备份等等，这些都是维护 `MySQL` 服务器的技术，本身并不属于 `MySQL`。这些服务，换作其他公司，比如阿里云，也是可以提供的，也可以向你收费。

所以说 `MySQL` 的商业许可和 `Oracle` 官网上的付费版本并不是一回事，即使是在生产环境上我们也可以大胆的用 `MySQL` ，完全合法。但如果你基于 `MySQL` 开发了个新软件出售，又想闭源，那就必须经过 `Oracle` 同意了。

## MariaDB 是怎么回事？会有被闭源的风险吗？

这里得说一下 `MySQL` 之父 `Monty` ，他是 `MySQL` 第一行代码的作者，后来成立了 `MySQL AB` 对 `MySQL` 进行商业化运作，也是他给 `MySQL` 定的双许可模式。2008 年的时候 `MySQL` 被 `Sun` 收购，仅接着 2009 年又被 `Oracle` `收购。Monty` 没有加入 `Sun` ，而是又创立了一个新公司 `Monty Program AB`，在 `MySQL` 代码的基础上发布了新的分支，就称为 `MariaDB` 。发布 `MariaDB` 的原因，`Monty` 说是因为想要一个永远保持开源的 `MySQL` 替代品。吸取了 `MySQL` 的教训，`Money` 将 `MariaDB` 的版权交给了 `MariaDB` 基金会，一个非盈利性组织，以保持 `MariaDB` 能够永远开源。

这里要说明的是，`MariaDB` 在 `MySQL` 的基础上开发是完全没问题的，因为 `MariaDB` 也是开源的，相当于是在遵守 `GPL` 的基础上使用 `MySQL`，即使往后 `Oracle` 将 `MySQL` 闭源了，也不会影响之前版本的 `GPL` 协议。就像你房子已经卖出去了，过一年之后涨价了，你也没有权利把房子要回来再按新价格卖一遍了。

还有一点是，`MariaDB` 既然是在 `MySQL` 基础上开发的，那就必然是 `GPL` 开源许可证了，在没有 `Oracle` 商业授权的情况下，其实是没有权利闭源的。

## 结语

版权所有者拥有完全的权利，使得他们在发布软件的时候可以按自己意愿决定别人怎么使用，所以 `Oracle` 可以让你使用的时候遵守 `GPL` ，也可以同意你不遵守 `GPL` ，甚至可以把 `MySQL` 闭源。其实商业公司把持开源软件的版权多少是有些耍流氓的，因为开源软件的版权是属于所有代码贡献者的，`Oracle` 为了规避法律风险，在与代码贡献者的协议里明确要求 `Oracle` 是代码版权的共同所有者，也是尽力了。。。
