# Jest mock optional dependency bug

```sh
git clone git@github.com:SimonSiefke/jest-mock-optional-dependency-bug.git &&
cd jest-mock-optional-dependency-bug &&
npm ci &&
npm test
```

### Output for npm test

```
> jest-mock-optional-dependency-bug@1.0.0 test
> node --experimental-vm-modules ./node_modules/jest/bin/jest.js

 FAIL  test/index.test.js
  ● Test suite failed to run

    Cannot find module 'some-optional-dependency' from 'src/index.js'

      at Resolver._throwModNotFoundError (node_modules/jest-resolve/build/resolver.js:427:11)

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        0.329 s
Ran all test suites.
(node:100004) ExperimentalWarning: VM Modules is an experimental feature and might change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
```
