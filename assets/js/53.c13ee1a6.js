(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{556:function(a,s,t){"use strict";t.r(s);var e=t(7),l=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h3",{attrs:{id:"防火墙"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#防火墙"}},[a._v("#")]),a._v(" 防火墙")]),a._v(" "),t("p",[a._v("关闭防火墙")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("sudo systemctl stop firewalld.service\n")])])]),t("p",[a._v("关闭开机启动")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("sudo systemctl disable firewalld.service \n")])])]),t("p",[a._v("开启开机启动")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("sudo systemctl enable firewalld.service \n")])])]),t("p",[a._v("查看是否开机启动")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("sudo systemctl list-unit-files | grep firewalld \n")])])]),t("h3",{attrs:{id:"yum"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#yum"}},[a._v("#")]),a._v(" yum")]),a._v(" "),t("p",[a._v("查找 yum 软件包")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("yum search XXX \n")])])]),t("p",[a._v("列出所有可安装的软件包")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("yum list XXX \n")])])]),t("p",[a._v("列出所有已安装的软件包")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("yum list installed \n")])])]),t("p",[a._v("列出安装的 tomcat 的位置")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("rpm -ql tomcat \n")])])]),t("p",[a._v("yum 是否安装 tomcat 及版本")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("rpm -qa| grep tomcat \n")])])]),t("p",[a._v("删除安装的软件包")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("rpm -e--nodeps XXX \n")])])]),t("h3",{attrs:{id:"通用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#通用"}},[a._v("#")]),a._v(" 通用")]),a._v(" "),t("p",[a._v("关机")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("shutdown -h now \n")])])]),t("p",[a._v("重启")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("reboot \n")])])])])}),[],!1,null,null,null);s.default=l.exports}}]);