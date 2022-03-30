module.export = {
  apps: [
    {
      script: "bin/www",
      watch: ".",
    },
  ],

  deploy: {
    production: {
      user: "admin",
      host: "10.10.50.24",
      ref: "origin/master",
      repo: "https://github.com/mohamedHassnie/Fronten-chrom.git",
      path: "/home/admin/Fronten-chrom",
      "pre-deploy-local": "",
      "post-deploy":
        "npm install &&  pm2 reload ecosystem.config.js --env production",
      "pre-setup": "",
    },
  },
};
