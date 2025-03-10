const blogs = [
  {
    id: 1,
    title: "前端工程化入门",
    content:
      "前端工程化是前端开发中的一个重要概念，它涉及到代码的组织、构建工具的使用、代码规范的制定等多个方面。通过学习前端工程化，可以提高开发效率和代码质量。",
    author: "张三",
    image:
      "https://minder-bucket.oss-cn-nanjing.aliyuncs.com/%E5%AE%9E%E8%AE%AD/av1.jpg",
    views: 1200,
    favorites: 200,
    likes: 300,
    tags: ["前端工程化", "入门", "构建工具"],
  },
  {
    id: 2,
    title: "Webpack 从零到精通",
    content:
      "Webpack 是前端工程化中不可或缺的构建工具。本文将从基础概念讲起，逐步深入到高级配置，帮助你掌握 Webpack 的核心功能。",
    author: "李四",
    image:
      "https://minder-bucket.oss-cn-nanjing.aliyuncs.com/%E5%AE%9E%E8%AE%AD/av1.jpg",
    views: 1500,
    favorites: 250,
    likes: 400,
    tags: ["Webpack", "构建工具", "前端工程化"],
  },
  {
    id: 3,
    title: "前端代码规范的重要性",
    content:
      "代码规范是前端工程化的基石。良好的代码规范可以提高代码的可读性、可维护性，并减少团队协作中的沟通成本。",
    author: "王五",
    image:
      "https://minder-bucket.oss-cn-nanjing.aliyuncs.com/%E5%AE%9E%E8%AE%AD/av1.jpg",
    views: 1000,
    favorites: 150,
    likes: 250,
    tags: ["代码规范", "前端工程化", "团队协作"],
  },
  {
    id: 4,
    title: "如何选择合适的前端构建工具",
    content:
      "在前端工程化中，选择合适的构建工具至关重要。本文将对比 Webpack、Rollup、Parcel 等常见构建工具的优缺点，帮助你做出选择。",
    author: "赵六",
    image:
      "https://minder-bucket.oss-cn-nanjing.aliyuncs.com/%E5%AE%9E%E8%AE%AD/av2.jpg",
    views: 1800,
    favorites: 300,
    likes: 450,
    tags: ["构建工具", "前端工程化", "Webpack", "Rollup", "Parcel"],
  },
  {
    id: 5,
    title: "前端工程化的最佳实践",
    content:
      "前端工程化不仅仅是工具的使用，更是一种开发理念。本文将分享一些前端工程化的最佳实践，帮助你提升开发效率。",
    author: "孙七",
    image:
      "https://minder-bucket.oss-cn-nanjing.aliyuncs.com/%E5%AE%9E%E8%AE%AD/av2.jpg",
    views: 2000,
    favorites: 350,
    likes: 500,
    tags: ["前端工程化", "最佳实践", "开发效率"],
  },
  {
    id: 6,
    title: "前端性能优化技巧",
    content:
      "性能优化是前端工程化的重要组成部分。本文将介绍一些常见的前端性能优化技巧，如代码分割、懒加载、缓存策略等。",
    author: "周八",
    image:
      "https://minder-bucket.oss-cn-nanjing.aliyuncs.com/%E5%AE%9E%E8%AE%AD/av2.jpg",
    views: 1600,
    favorites: 280,
    likes: 420,
    tags: ["前端性能优化", "代码分割", "懒加载", "缓存策略"],
  },
  {
    id: 7,
    title: "前端工程化中的版本管理",
    content:
      "版本管理是前端工程化中不可或缺的一环。通过合理使用 Git 等版本管理工具，可以有效管理代码变更，提升团队协作效率。",
    author: "吴九",
    image:
      "https://minder-bucket.oss-cn-nanjing.aliyuncs.com/%E5%AE%9E%E8%AE%AD/av3.jpg",
    views: 1400,
    favorites: 220,
    likes: 360,
    tags: ["版本管理", "Git", "前端工程化"],
  },
  {
    id: 8,
    title: "前端工程化与自动化测试",
    content:
      "自动化测试是前端工程化的重要组成部分。通过引入自动化测试工具，如 Jest 和 Mocha，可以有效提升代码质量。",
    author: "郑十",
    image:
      "https://minder-bucket.oss-cn-nanjing.aliyuncs.com/%E5%AE%9E%E8%AE%AD/av3.jpg",
    views: 1300,
    favorites: 180,
    likes: 300,
    tags: ["自动化测试", "Jest", "Mocha", "前端工程化"],
  },
  {
    id: 9,
    title: "前端工程化中的代码复用",
    content:
      "代码复用是前端工程化的核心目标之一。通过合理设计组件和模块，可以有效减少重复代码，提升开发效率。",
    author: "钱十一",
    image:
      "https://minder-bucket.oss-cn-nanjing.aliyuncs.com/%E5%AE%9E%E8%AE%AD/av3.jpg",
    views: 1700,
    favorites: 240,
    likes: 380,
    tags: ["代码复用", "组件化", "模块化", "前端工程化"],
  },
  {
    id: 10,
    title: "前端工程化与跨浏览器兼容",
    content:
      "跨浏览器兼容是前端开发中的一个重要问题。通过合理使用 Polyfill 和 Babel 等工具，可以有效解决兼容性问题。",
    author: "孔十二",
    image:
      "https://minder-bucket.oss-cn-nanjing.aliyuncs.com/%E5%AE%9E%E8%AE%AD/av4.jpg",
    views: 1900,
    favorites: 320,
    likes: 480,
    tags: ["跨浏览器兼容", "Polyfill", "Babel", "前端工程化"],
  },
  {
    id: 11,
    title: "前端工程化中的持续集成与持续部署",
    content:
      "持续集成和持续部署是前端工程化的高级实践。通过引入 CI/CD 工具，如 Jenkins 和 GitHub Actions，可以实现代码的自动化部署。",
    author: "孟十三",
    image:
      "https://minder-bucket.oss-cn-nanjing.aliyuncs.com/%E5%AE%9E%E8%AE%AD/av4.jpg",
    views: 2100,
    favorites: 360,
    likes: 520,
    tags: [
      "持续集成",
      "持续部署",
      "CI/CD",
      "Jenkins",
      "GitHub Actions",
      "前端工程化",
    ],
  },
  {
    id: 12,
    title: "前端工程化中的代码质量监控",
    content:
      "代码质量监控是前端工程化的重要组成部分。通过使用 ESLint 和 Prettier 等工具，可以有效提升代码质量。",
    author: "沈十四",
    image:
      "https://minder-bucket.oss-cn-nanjing.aliyuncs.com/%E5%AE%9E%E8%AE%AD/av4.jpg",
    views: 1500,
    favorites: 260,
    likes: 400,
    tags: ["代码质量监控", "ESLint", "Prettier", "前端工程化"],
  },
];

export default blogs;
