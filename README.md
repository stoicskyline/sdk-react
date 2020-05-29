# SDK in NodeJS

Useful for any backend or frontend JavaScript or TypeScript project.

## Installation

```shell script
yarn add @jorgechen/sdk-js
```

## Maintain

Compile and commit changes:

```sh
yarn build
git add --all  
```

To locally develop the package, install Yalc:

```shell script
yarn global add yalc
```

Then we can publish this package locally: 

```shell script
cd sdk-js/
yalc publish
```

In the implementing project:
```shell script
yalc add @jorgechen/sdk
```


## Publishing

NPM package commands:
```shell script
# Edit version in package.json then
yarn pub

# Remove a specific package version
npm unpublish @jorgechen/sdk-js@0.1.0
```
