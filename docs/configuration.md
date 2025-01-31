---
id: configuration
title: Configuration
---

To use the SDK in an application, a client must be imported from the `abstract-sdk` NPM package and instantiated with configuration options.

```js
const client = new Abstract.Client({
  // Configuration options...
});
```

## Configuration options

The following options are available when configuring an SDK client.

### `accessToken`

_Default value: `undefined`_

After [generating an access token](/docs/authentication), this option can be used to pass that token to the SDK. This option accepts strings and both synchronous and asynchronous functions that return strings. Note that the SDK will automatically use an access token saved as an `ABSTRACT_TOKEN` environment variable without any additional configuration; this means that the `accessToken` option is only required when `ABSTRACT_TOKEN` is not set.

See [Authentication](/docs/authentication) for more information.

### `apiUrl`

_Default value: `https://api.goabstract.com`_

This option can be used to specify a custom URL that points to an instance of the Abstract HTTP API. This is used when building the request URLs used by the [API transport](/docs/transports). This option is useful if HTTP requests should be routed locally or through a proxy server.

### `cliPath`

_Default value: `/Applications/Abstract.app/Contents/Resources/app.asar.unpacked/node_modules/@elasticprojects/abstract-cli/bin/abstract-cli`_

This option can be used to specify a custom file location that points to the Abstract CLI included with the Abstract desktop application. This option is useful if the Abstract desktop application exists at a non-default application path outside of `/Applications`.

### `maxCacheSize`

_Default value: `0`_

Requests for individual assets within the Abstract platform can be cached since their responses are static and don't change over time. For example, a `Commit` retrieved by its `sha` can be safely cached since that `sha` will always point to the same `Commit`.  This option can be used to increase or decrease the size of the internal entity cache. Setting this option to `0` disables caching entirely.

### `previewsUrl`

_Default value: `https://previews.goabstract.com`_

This option can be used to specify a custom URL that points to an instance of the Abstract preview service. This is used when building preview image URLs used by the [API transport](/docs/transports). This option is useful if HTTP requests should be routed locally or through a proxy server.

### `transportMode`

_Default value: `"api"`_

The SDK can be configured to use different data sources - known as "transports" - that each have unique advantages. The `transportMode` option can be used to tell an SDK client to use a specific transport.

See [Transports](/docs/transports) for more information.

### `webUrl`

_Default value: `https://app.goabstract.com`_

This option can be used to specify a custom URL for the Abstract web application. This is used by the [API transport](/docs/transports) when generating URLs that link to specific parts of the web application.
