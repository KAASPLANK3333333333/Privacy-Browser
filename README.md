# Privacy Browser

## Overview

This repository holds the build tools needed to build the Privacy Browser desktop browser for macOS, Windows, and Linux. This is a privacy-focused web browser that prioritizes user privacy and security.

## Features

- Privacy-focused browsing
- Ad and tracker blocking
- Enhanced security features

## Contributing

Please see the [contributing guidelines](./CONTRIBUTING.md).

## Support

For support, please check the documentation or create an issue in the repository.

## Development

Follow the instructions for your platform:

- [macOS Development](https://github.com/user/privacy-browser/wiki/macOS-Development)
- [Windows Development](https://github.com/user/privacy-browser/wiki/Windows-Development)
- [Linux Development](https://github.com/user/privacy-browser/wiki/Linux-Development)

## Building the Browser

Once you have the prerequisites installed, you can get the code and initialize the build environment.

```bash
git clone https://github.com/user/privacy-browser.git
cd privacy-browser
npm install
npm run init
```

## Build Instructions

The default build type is component.

```
# start the component build compile
npm run build
```

To do a release build:

```
# start the release compile
npm run build Release
```

## Running the Browser

To start the build:

`npm start [Release|Component|Debug]`

## Updating the Browser

`npm run sync -- [--force] [--init] [ref]`

## Development Guidelines

- [Security rules from Chromium](https://chromium.googlesource.com/chromium/src/+/refs/heads/main/docs/security/rules.md)
- [IPC review guidelines](https://chromium.googlesource.com/chromium/src/+/HEAD/docs/security/ipc-reviews.md)
- [General development best practices](https://github.com/user/privacy-browser/wiki/Development-Best-Practices)
