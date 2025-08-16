# Mochify driver for Playwright

Run tests in [Playwright][web].

Use this driver with the [Mochify CLI][cli] to run Mocha tests in jsdom, a headless web browser emulator for testing. See [Mochify][mochify-docs] if you are looking for Mochify drivers for other browser testing environments.

[web]: https://playwright.dev
[mochify-docs]: https://github.com/mochify-js
[cli]: https://github.com/mochify-js/cli

## Usage

Install the package from npm:

```
npm i @mochify/driver-playwright -D
```

and pass it to the CLI:

```
mochify --driver playwright ...
```

## Driver options

The driver allows the following options to be set:

- **`stderr`**: Defines the stream the test output will be written to. Defaults to `process.stderr`

- **`engine`**: The browser engine to use. Right now, Playwright supports `chromium`, `firefox`and `webkit`. Defaults to `firefox`.

- **`url`**: Run tests in the context of the given URL. Defaults to an empty document served using the `file:` scheme.

## Passing through launch options to Playwright

In addition to the driver options documented above, `driver-playwright` allows you to pass through all of Playwright's other `launchOptions` using the defaults as [described here][launch-options].

[launch-options]: https://playwright.dev/docs/api/class-browsertype#browser-type-launch
