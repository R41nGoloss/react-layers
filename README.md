React Layers [![Build Status](https://travis-ci.org/R41nGoloss/react-layers.svg?branch=master)](https://travis-ci.org/pieterv/react-layers)
============

A library for layering components in React.

Important Notes
---------------

This is an alpha release. The API and organizational structure are subject to
change. Comments and contributions are much appreciated.

Installation
------------

```sh
npm install react-layers
```

This library is written with CommonJS modules. If you are using
browserify, webpack, or similar, you can consume it like anything else
installed from npm.

Modules
--------

- LayerMixin
- Layer
- Portal
- ContainerMixin
- Container

Check out the [`examples`](https://github.com/pieterv/react-layers/tree/master/examples) directory to see how these modules can be used.

Thanks
-------------

This library is highly inspired by the work done on the [react-bootstrap's `OverlayMixin`](https://github.com/react-bootstrap/react-bootstrap/blob/v0.11.1/src/OverlayMixin.js) and the discussion in [react issue #379](https://github.com/facebook/react/issues/379).
