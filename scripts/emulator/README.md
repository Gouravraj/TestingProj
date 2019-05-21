# Android scripts from emulator

You can execute each single file in ‘./commands’ but you can simply run `./cli.js`.

## Usage

```bash
npm run emulator <command> # or execute `./scripts/emulator/cli.js`
```

- Create virtual device

```bash
npm run emulator create --name=<device name> --device=<base device>
```

with specific API version,

```bash
npm run emulator create --name=TonyStark --device=Nexus6P --api=27
```

- List created device(s)

```bash
npm run emulator list
```

- Update SDK

```bash
npm run emulator update
```

- open virtual device

```bash
npm run emulator open
```

Virtual device(s) list will display, then pick the number.

- delete virtual device

Same as `open` command

- uninstall package from emulator

```bash
npm run emulator uninstall
```
