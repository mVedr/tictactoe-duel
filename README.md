<h1>TicTacToe Duel</h1>
<h3>App is available at <a href="https://play.google.com/store/apps/details?id=com.xo_game1" target="_blank">Play Store</a></h3>
<p>It is a 2 player TicTacToe Game with customizable characters and score maintenance of various players, it also tries to cheer up the losing player by telling them jokes 
that are fetched from an API.</p>

<h2>Steps Of Installation</h2>
<p>1)Download/Fork this repository.</p>
<p>2)Install all the required packages through the following commands.</p>

```
npm install
```
<p>3)Get an API key from <a href="https://api-ninjas.com/profile" target="_blank">API Ninjas Jokes API</a> </p>
<p>4) Update this key in the Joke.tsx file.</p>

```
const JokeBox = () => {
  const [joke, setJoke] = useState('');
  const func = async () => {
    const url = 'https://api.api-ninjas.com/v1/dadjokes?limit=1';
    const apiKey = ''; // add your api key here
```
<p>5)Now finally run this command to run the app, if not working, you can refer to <a href="https://reactnative.dev/docs/environment-setup"  target="_blank" >React Native Setup Docs</a> .</p>

```
  npx react-native run-android 
```
