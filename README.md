<h1>TicTacToe Duel</h1>
<h3>App is available at <a href="https://play.google.com/store/apps/details?id=com.xo_game1" target="blank">Play Store</a></h3>

<h2>Steps Of Installation</h2>
<p>1)Fork this repository.</p>
<p>2)Install all the required packages through the following commands.</p>

```
npm install
```
<p>3)Get an API key from <a href="https://api-ninjas.com/profile">API Ninjas Jokes API</a> </p>
<p>4) Update this key in the Joke.tsx file.</p>

```
const JokeBox = () => {
  const [joke, setJoke] = useState('');
  const func = async () => {
    const url = 'https://api.api-ninjas.com/v1/dadjokes?limit=1';
    const apiKey = ''; // add your api key here
```
<p>5)Now finally run this command to run the app, if not working, you can refer to <a href="https://reactnative.dev/docs/environment-setup">React Native Setup Docs</a> .</p>

```
  npx react-native run-android 
```
