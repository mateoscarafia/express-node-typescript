# Microservice app

Nodejs Microservice

## Installation
```bash
npm install
```

## Start app in dev

```bash
npm run dev
```

## Run build

```bash
npm run build
```

## Run /dist app

```bash
npm run start
```

## Run Unit Testing
```bash
npm run test
```

## Performance dashboard
```bash
/status
```

## Helmet config
```javascript
app.use(helmet());
app.use(helmet.xssFilter());
app.use(helmet.noSniff());
app.use(helmet.frameguard({ action: "deny" }));
app.use(helmet.hidePoweredBy());
app.use(helmet.referrerPolicy({ policy: "same-origin" }));
```