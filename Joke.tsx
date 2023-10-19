import {ActivityIndicator, Text, View} from 'react-native';
import {useState} from 'react';

const JokeBox = () => {
  const [joke, setJoke] = useState('');
  const func = async () => {
    const url = '';
    const apiKey = 'nBKINOk9lrDdrlf+fJCHBw==71tdgdskI8DB3Tia';

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'X-Api-Key': apiKey,
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const fn = data[0];
      // console.warn(fn.joke)
      setJoke(fn.joke);
      return fn;
    } finally {
    }
  };
  if (joke === '') func();
  //console.warn(data)

  return (
    <View>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 15,
          fontWeight: '600',
          margin: 9,
          paddingBottom : 5,
          color : "green"
        }}>
        {joke}
      </Text>
    </View>
  );
};

export default JokeBox;
