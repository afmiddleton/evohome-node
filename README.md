# evohome-node

Node client to access the [Total Connect Comfort](https://international.mytotalconnectcomfort.com/Account/Login) RESTful API.

It is derived from [evohome-client](https://github.com/watchforstock/evohome-client) and [evohome-async](https://github.com/zxdavb/evohome-async).

I could have used child_process or python-shell to call the python scripts but rewriting in Node gave me more flexibility for my intended use.

## Installation

`npm install`

Copy `env.sample` as `.env` and update to include your username and password for Total Connect Comfort.
