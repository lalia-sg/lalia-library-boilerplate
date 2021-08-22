# `Lalia Library Boilerplate`

> Use this template to setup your library code

1. Add the template repository as a remote.

    ```bash
    git remote add template https://github.com/lalia-sg/lalia-library-boilerplate.git
    ```

2. Fetch existing contents of template

    ```bash
    git fetch template
    ```

3. Create template branch to keep track of template changes

    ```bash
    git branch template template/master
    ```

4. After you make new commits to the template repository, you can fetch those changes.

    ```bash
    git fetch template
    ```

5. Merge template branch into master

    ```bash
    git merge template --allow-unrelated-histories
    ```

## Usage

```ts
const { sum } = require('sum');

// TODO: DEMONSTRATE API
```

## Tooling

Transpile with Babel
Bundle with Rollup
Generate type declarations with tsc
Bundle type declarations with api-extractor
Generate docs with api-documenter
Manage releases with semantic-release

## Semantic Release

https://github.com/semantic-release/semantic-release/blob/master/docs/recipes/github-actions.md
https://github.com/semantic-release/git

## Generate new token

https://github.com/settings/tokens

Check `repo Full control of private repositories`
Check `read:packages Download packages from GitHub Package Registry`

npm login --scope=@lalia-sg --registry=https://npm.pkg.github.com
npm logout
