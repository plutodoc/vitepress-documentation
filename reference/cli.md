# Command Line Interface

## `vitepress build`

Build the VitePress site for production.

### Usage

```bash
vitepress build [root]
```

### Options

| Option | Description |
| -      | -           |
| `--assetsInlineLimit <number>` | Static asset base64 inline threshold in bytes (default: `4096`) (`number`) |
| `--base <path>`                | Public base path (default: `/`) (`string`) |
| `--minify [minifier]`          | Enable/disable minification, or specify minifier to use (default: `"esbuild"`) (`boolean \| "terser" \| "esbuild"`) |
| `--mpa` (experimental)         | Build in [MPA mode](../guide/mpa-mode) without client-side hydration (`boolean`) |
| `--outDir <dir>`               | Output directory (default: `.vitepress/dist`) (`string`) |
| `--target <target>`            | Transpile target (default: `"modules"`) (`string`) |

## `vitepress dev`

Start VitePress dev server using designated directory as root. Defaults to current directory.
The `dev` command can also be omitted when running in current directory.

### Usage

```bash
# start in current directory, omitting `dev`
vitepress

# start in sub directory
vitepress dev [root]
```

### Options

| Option | Description |
| -      | -           |
| `--base <path>` | Public base path (default: `/`) (`string`) |
| `--cors`        | Enable CORS |
| `--force`       | Force the optimizer to ignore the cache and re-bundle (`boolean`) |
| `--open [path]` | Open browser on startup (`boolean \| string`) |
| `--port <port>` | Specify port (`number`) |
| `--strictPort`  | Exit if specified port is already in use (`boolean`) |

## `vitepress init`

Start the [Setup Wizard](../guide/getting-started#setup-wizard) in current directory.

### Usage

```bash
vitepress init
```

## `vitepress preview`

Locally preview the production build.

### Usage

```bash
vitepress preview [root]
```

### Options

| Option | Description |
| -      | -           |
| `--base <path>` | Public base path (default: `/`) (`string`) |
| `--port <port>` | Specify port (`number`) |
