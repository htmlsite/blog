import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: '归档',
      icon: 'mdi:archive',
      link: '/article/'
    },
    // {
    //   text: "如何使用",
    //   icon: "laptop-code",
    //   prefix: "demo/",
    //   link: "demo/",
    //   children: "structure",
    // },
    // {
    //   text: "文章",
    //   icon: "book",
    //   prefix: "posts/",
    //   children: "structure",
    // },
    // "intro",
    // {
    //   text: "幻灯片",
    //   icon: "person-chalkboard",
    //   link: "https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html",
    // },
      {
      text: "工作",
      icon: "mdi:note",
      link: "/work/",
    },
    {
      text: "笔记",
      icon: "mdi:note",
      link: "/note/",
    },
    {
      text: "其它",
      icon: "mdi:note",
      link: "/other/",
    }
  ],
});
