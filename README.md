<h1>TicTacToe Duel</h1>
<h3>App is available at <a href="https://play.google.com/store/apps/details?id=com.xo_game1" target="_blank">Play Store</a></h3>
<p>It is a 2 player TicTacToe Game with customizable characters and score maintenance of various players, it also tries to cheer up the losing player by telling them jokes 
that are fetched from an API.</p>

<h2>Some Screenshots:</h2>

<img src="https://github.com/mVedr/tictactoe-duel/assets/94962003/91316c22-37c8-4fd1-b4a6-25f0cfbd3918.png" width="300" height="500">
<br/> <br/>
<img src="https://github.com/mVedr/tictactoe-duel/assets/94962003/bdad1401-1110-424c-93e7-1a8ad31f32cc.png" width="300" height="500">
<br/> <br/>
<img src="https://github.com/mVedr/tictactoe-duel/assets/94962003/1570b394-f0d0-42b8-bb04-251f8b76e843.png" width="300" height="500">
<br/> <br/>
<img src="https://github.com/mVedr/tictactoe-duel/assets/94962003/adef3228-2620-4bbe-9106-2960bf9ab360.png" width="300" height="500">
<br/> <br/>
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
<p>NOTE: The final command can take some time to setup, so please be patient... </p>
<p>If you are not able to setup this way , just Copy Paste 1)package.json 2)App.tsx 3)Joke.tsx into your app and do "npm install" </p>
