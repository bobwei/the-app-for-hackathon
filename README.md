# README

Bootagraphy

Book a trip with wonderful photography!

team members: Bob, Criss, Marisa, Victor, Zito

## Development Flow

First time
```
yarn
mv .example.env .env
```

Development server
```
npm start
```

## Production Flow

Build static assets
```
npm run build
```

Run production server
```
npm run server
```

## Deploy to Github Pages

```
npm run build && npm run deploy:gh-pages
```

## Deploy to Heroku

create heroku app
```
heroku apps:create myapp
heroku config:push
```

```
git push heroku master
```
