# Android scripts from emulator

You can execute each single file in `./exec/**` but you can simply run `./cli.js` or `npm run emulator`.

## Usage

```bash
./scripts/emulator/cli.js <command>
#or
npm run emulator <command>
```

## Commands

Except `create`, commands is no require argument. You can check actual commands from `./scripts/exec/android`.

### create

If you not specify arguments, it will use default value.

```bash
# check device list `./scripts/exec/android/available_devices.sh`
npm run emulator create --name=<device name> --api=<API version> ---device=<device>
```

### list

```bash
npm run emulator list
```

### update

Update only installed one - `sdkmanager`

```bash
npm run emulator update
```

### open

```bash
npm run emulator open
```

### delete

```bash
npm run emulator delete
```

### uninstall

```bash
npm run emulator uninstall # uninstall app
```

### close

```bash
npm run emulator close
```
