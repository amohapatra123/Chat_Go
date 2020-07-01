# component

> Awesome UI Library made with &lt;3 by CompareKaro & Anshuman Mohapatra

[![NPM](https://img.shields.io/npm/v/component.svg)](https://www.npmjs.com/package/component) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
yarn workspace workspace-name add component
lerna add component --scope=workspace-name
```

## Usage

```jsx
import React, { Component } from 'react';

import { ComponentName } from 'component';
import ComponentName from 'component/dist/ComponentName';
// In the Index File only
import 'component/dist/index.css';

class Example extends Component {
  render() {
    return <MyComponent />;
  }
}
```

## License

MIT © [CompareKaro](https://github.com/CompareKaro/comparekaro-fe.git)
