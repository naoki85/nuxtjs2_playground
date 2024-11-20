module.exports = {
  apps: [
    {
      name: 'my-blog-nuxt',
      script: 'yarn run start',
      // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
      // args: 'run start',
      instances: 1,
      autorestart: true,
      watch: false
      // max_memory_restart: '1G'
      // env: {
      //   NODE_ENV: 'development'
      // },
      // env_production: {
      //   NODE_ENV: 'production'
      // }
    }
  ],
  deploy: {
    production: {
      user: 'naoki_yoneyama',
      host: '13.231.79.158',
      ref: 'origin/master',
      repo: 'git@github.com:naoki85/my_blog_nuxt.git',
      path: '/home/naoki_yoneyama/my_blog_nuxt',
      'post-deploy':
        'yarn install && yarn build && yarn run pm2 startOrRestart ecosystem.config.js'
    }
  }
}
