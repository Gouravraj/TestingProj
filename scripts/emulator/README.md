# Android scripts from emulator

You can execute each single file in ‘./commands’ but you can simply run `./cli.js`.

## Usage

```bash
npm run emulator <command> # or execute `./scripts/emulator/cli.js`
```

- Create virtual device

```bash
npm run emulator create
```

with specific name,

```bash
npm run emulator create --name=<device name>
```

with specific API version,

```bash
npm run emulator create --api=<API version>
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

- close the emulator

```bash
npm run emulator close
```

```bash
npm run emulator uninstall
```
