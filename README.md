# Application Nextoome

Pour installer ionic
--
`npm install -g cordova ionic`

Pour déployer le projet
--
`ionic cordova platform add ios`
`ionic cordova platform add android`
`ionic build`

Pour tester dans un navigateur
--
`ionic serve --lab`

L'utilisation de certain modules de Cordova (comme HTTP) ne sera pas prise en compte dans un navigateur donc il est recommandé de tester plutôt sur un simulateur ou un appareil Android ou iOS

Pour tester sur un appareil Android connecté
--
`ionic cordova run android --device`

Pour tester dans un simulateur iOS
--
`ionic cordova run ios -l -c --emulator --target="iPhone-6s, 11.2" --livereload`
