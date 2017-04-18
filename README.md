# node_mysql_ssl

```
node-mysql_mysql@0.0.1 ~/code/node_mysql_ssl
└─┬ mysql@2.13.0
  ├── bignumber.js@3.1.2
  ├─┬ readable-stream@1.1.14
  │ ├── core-util-is@1.0.2
  │ ├── inherits@2.0.3
  │ ├── isarray@0.0.1
  │ └── string_decoder@0.10.31
  └── sqlstring@2.2.0
```

```
$npm -v
4.1.2
$ node -v
v7.7.2
$ node node_mysql_ssl.js
Error while performing Query., err: Error: MySQL server is requesting the old and insecure pre-4.1 auth mechanism.Upgrade the user password or use the {insecureAuth: true} option.
```