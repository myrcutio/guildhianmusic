# guildhianmusic

notes for deploying using aws-vault and a profile:
Dependencies:
 * terraform 0.12.12
 * aws-vault
 * Node > 10

```shell script
aws-vault exec benny
make clean all deploy-jamesbalentine
```