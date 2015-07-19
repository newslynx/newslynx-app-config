Newslynx App Config
===================

> A secondary way to load configuration for NewsLynx app.

This configuration setup is used for the Electron app so it can avoid having a `config.yaml` file in `~/.newslynx/config.yaml`. Generally you would omit `api_url` key and the user would be prompted when they run the program.

Sample configuration for [`config.js`](config.js).

````json
module.exports = {
  "api_version": "v1",
  "newslynx_app_secret_key": "chicken-burrito-grande",
  "https": false,
  "api_url": "https://localhost:5000"
}
````