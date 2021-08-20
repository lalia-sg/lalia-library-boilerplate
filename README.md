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

```
const { sum } = require('sum');

// TODO: DEMONSTRATE API
```


## Generate new token

https://github.com/settings/tokens

Check `repo Full control of private repositories`
Check `read:packages Download packages from GitHub Package Registry`

npm login --registry=https://npm.pkg.github.com
npm logout