# CAP Tips & Tricks


## CLOUD FOUNDRY

### Debug CF App in VS Code

```shell
# set space to allow ssh (one-time)
> cf allow-space-ssh <space-name>

# set app to enable ssh (one-time)
> cf enable-ssh <app-name>
# restage app (one-time)
> cf restage <app-name>

# ssh to app
> cf ssh <app-name>
# list PIDs and look for node app's PID
$ ps aux
# enable remote debugging
$ kill -s SIGUSR1 <pid>
# exit ssh
$ exit

# start tunnel debugging and forward it to local port
cf ssh <app-name> -N -T -L 9229:127.0.0.1:9229

# start debugging in VS Code
```

- VS Code debugger settings

```javascript
{
	"type": "node",
	"request": "attach",
	"name": "Attach cloud app ",
	"address": "localhost",
	"port": 9229,
	"localRoot": "${workspaceFolder}",
	"remoteRoot": "/home/vcap/app"
}
```