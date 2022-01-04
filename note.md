REACT = SPA (single page application)
(lourd à charger mais rapide après)
d'où le
//--------
app.get("/\*", (\_, res) => {
res.sendFile(path.join(**dirname, '../front/build/index.html'));
//**dirname=variable globale fournie par node
});
//--------
dans server.js (on redirige tout sur index.html)

//=======================
heroku login -> connexion à heroku
git push heroku main

//=======================
en cas de problème avec heroku, tenter un
heroku restart
(ça a marché pour 1 problème de connection à la bdd)

//=======================
au cas où :
npx kill-port 7000
git remote -v
