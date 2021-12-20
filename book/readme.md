cd C:\Users\julie\OneDrive\Documents\ADA\book
npm start : lancer le server node js
npm run client : npm start du dossier client = lancer react

pour le dev : dans book/package.json, ajouter la ligne "proxy": "http://localhost:5500", avant la ligne "eslintConfig"

deploy Heroku :
git add
git commit
git push heroku master
