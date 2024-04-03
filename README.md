# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts
Оптимизированная галерея изображений на React
Этот проект представляет собой галерею изображений, разработанную с использованием библиотеки React. Галерея загружает изображения с публичного API и включает в себя различные оптимизации для улучшения производительности, такие как ленивая загрузка, предзагрузка критически важных изображений и отображение данных о производительности.

Установка
Для запуска проекта на локальном компьютере выполните следующие шаги:

Установите Node.js и npm (если они еще не установлены).
Склонируйте репозиторий проекта на свой компьютер.
Перейдите в корневую директорию проекта и выполните команду npm install для установки всех зависимостей.
После установки зависимостей выполните команду npm start для запуска проекта в режиме разработки.
Основные компоненты
App
Компонент App является основным компонентом приложения. В нем происходит загрузка изображений с помощью публичного API, а также отображение галереи изображений. В компоненте App также реализованы оптимизации производительности, такие как ленивая загрузка и отображение данных о времени загрузки приложения.

LazyImage
Компонент LazyImage представляет отдельное изображение в галерее. Он отвечает за ленивую загрузку изображения, используя IntersectionObserver. Когда изображение попадает в зону видимости пользователя, оно загружается с помощью предоставленного URL.

Оптимизации производительности
Ленивая загрузка изображений: Изображения загружаются только тогда, когда они попадают в область видимости пользователя.
Предзагрузка критически важных изображений: Некоторые изображения определены как критически важные и предзагружаются для улучшения пользовательского опыта.
Отображение данных о производительности: В приложении отображается время загрузки приложения для мониторинга производительности.
Используемые технологии
React
JavaScript
HTML
CSS
Заключение
Этот проект демонстрирует использование React для создания веб-приложения с оптимизированной загрузкой изображений и улучшенной производительностью. Он может быть использован как пример для изучения и практики различных методов оптимизации веб-приложений.


In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
