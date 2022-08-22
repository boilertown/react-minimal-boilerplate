<h1 align="center">♨️ React Minimal Boilerplate</h1>

<div align="center">
  <p>
    A React boilerplate with mininal setup to help you quickly kickstart your applications.
  </p>
  <img src="https://img.shields.io/github/license/boilertowns/react-minimal-boilerplate?style=flat-square" alt="MIT license" >
</div>

## Introduction

This setup is simplier than [react-nostalgia-boilerplate](https://github.com/boilertowns/react-nostalgia-boilerplate) version.

- Use `Vite` to develop locally and create bundle for production.
- Use `Vitest` to perform Unit test.

This boilerplate by default, targets browsers which support the native ES Modules, native ESM dynamic import, and `import.meta`. You can specify custom targets via [Vite build.target config option](https://vitejs.dev/config/build-options.html#build-target), where the lowest target is `es2015`.

The setup is _opinionated_ as it is based on my experience of working with difference React projects. It works very well to me and my team. I hope I can make you feel the same.

## The Setup

- [React v18][react-url]
- [React Router v6][react-router-url]
- [TypeScript][typescript-url]
- Unit test with [Testing-library][testing-library-url]
- Linting with [Eslint][eslint-url] and code formatting with [Prettier][prettier-url]
- Develop and build production with [Vite][vite-url]

## Get Started

- Use [Boilertowns](https://github.com/boilertowns/create-boilertowns) CLI.

  ```sh
  # npm
  npm create boilertowns@latest -- -b react-minimal-boilerplate

  # yarn
  yarn create boilertowns -b react-minimal-boilerplate

  # pnpm
  pnpm create boilertowns -b react-minimal-boilerplate

  # bun
  bun create boilertowns/react-minimal-boilerplate [project-name]
  ```

- Click the green "Use this template" button to generate a new repository with the same structure and files.

  <img src="https://docs.github.com/assets/cb-36544/images/help/repository/use-this-template-button.png" alt="Use this template button" width="500">

  [Ref: Github Docs](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template)

## Development

- Run the app in development environment:

  ```sh
  pnpm dev
  ```

- Run components unit tests with jest:

  ```sh
  pnpm test
  ```

- Build the app in production mode:

  ```sh
  pnpm build
  ```

- Run the app in production mode. It uses static files from `build` folder.

  ```sh
  pnpm serve
  ```

## GitHub Actions

This boilerplate uses [GitHub Actions](https://github.com/features/actions) to perform unit test on Pull Request. You can see the details at [pr-test.yml](./.github/workflows/pr-test.yml).

## Contributing

**react-minimal-boilerplate** ❤️ your contributions. If you have any ideas, suggestions, fixes, feel free to contribute.

[boilertowns-url]: https://github.com/boilertowns
[react-url]: https://beta.reactjs.org
[react-router-url]: https://reactrouter.com
[typescript-url]: https://www.typescriptlang.org
[eslint-url]: https://eslint.org
[commitlint-url]: https://github.com/conventional-changelog/commitlint
[prettier-url]: https://prettier.io
[testing-library-url]: https://testing-library.com
[vite-url]: https://vitejs.dev
