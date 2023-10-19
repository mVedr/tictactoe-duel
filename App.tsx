/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';

import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Modal,
  Button,
  TextInput,
  Image,
} from 'react-native';
import JokeBox from './Joke';

function App(): JSX.Element {
  const [firstTurn, setFirstTurn] = useState(true);
  const [t11, setT11] = useState(0);
  const [t12, setT12] = useState(0);
  const [t13, setT13] = useState(0);
  const [t21, setT21] = useState(0);
  const [t22, setT22] = useState(0);
  const [t23, setT23] = useState(0);
  const [t31, setT31] = useState(0);
  const [t32, setT32] = useState(0);
  const [t33, setT33] = useState(0);
  const [playedOnce, setPlayedOnce] = useState(false);
  const [p1, setP1] = useState('Player 1');
  const [p2, setP2] = useState('Player 2');
  const [t1, setT1] = useState(0);
  const [t2, setT2] = useState(0);
  const [p1c, setP1c] = useState('X');
  const [p2c, setP2c] = useState('O');

  const resetBoard = () => {
    setT11(0);
    setT12(0);
    setT13(0);
    setT21(0);
    setT22(0);
    setT23(0);
    setT31(0);
    setT32(0);
    setT33(0);
    setFirstTurn(true);
  };

  const tie = () => {
    return (
      t11 !== 0 &&
      t12 !== 0 &&
      t13 !== 0 &&
      t21 !== 0 &&
      t22 !== 0 &&
      t23 !== 0 &&
      t31 !== 0 &&
      t32 !== 0 &&
      t33 !== 0
    );
  };

  const checkForX = () => {
    const a = t11 === 1 && t22 === 1 && t33 === 1;
    const b = t11 === 1 && t12 === 1 && t13 === 1;
    const c = t21 === 1 && t22 === 1 && t23 === 1;
    const d = t31 === 1 && t32 === 1 && t33 === 1;
    const e = t11 === 1 && t21 === 1 && t31 === 1;
    const f = t12 === 1 && t22 === 1 && t32 === 1;
    const g = t13 === 1 && t23 === 1 && t33 === 1;
    const h = t31 === 1 && t22 === 1 && t13 === 1;
    const ans = a || b || c || d || e || f || g || h;
    // if(ans===true){
    //   setT1(t1 + 1);
    // }
    return ans;
  };

  const checkForY = () => {
    const a = t11 === 2 && t22 === 2 && t33 === 2;
    const b = t11 === 2 && t12 === 2 && t13 === 2;
    const c = t21 === 2 && t22 === 2 && t23 === 2;
    const d = t31 === 2 && t32 === 2 && t33 === 2;
    const e = t11 === 2 && t21 === 2 && t31 === 2;
    const f = t12 === 2 && t22 === 2 && t32 === 2;
    const g = t13 === 2 && t23 === 2 && t33 === 2;
    const h = t31 === 2 && t22 === 2 && t13 === 2;
    const ans = a || b || c || d || e || f || g || h;
    // if(ans===true){
    //   setT2(t2 + 1);
    // }
    return ans;
  };

  // useEffect(() => {
  //   if (p1c.length > 1) {
  //     console.warn('Character must be of length 1');
  //   }
  //   if (p2c.length > 1) {
  //     console.warn('Character must be of length 1');
  //   }
  // }, []);

  return (
    <View style={{flex: 1, justifyContent: 'space-evenly'}}>
      <View>
        <View
          style={{
            flexDirection: 'row',
            borderWidth: 10,
            borderBottomWidth: 5,
            borderColor: 'black',
            marginTop: 10,
            justifyContent: 'space-evenly',
            marginLeft: 6,
            marginRight: 6,
          }}>
          <Pressable
            onPress={() => {
              //  console.warn("hi")
              if (t11 !== 0) return;
              if (firstTurn) {
                setT11(1);
              } else {
                setT11(2);
              }
              setFirstTurn(!firstTurn);
            }}>
            {t11 === 0 && (
              <Text style={{fontWeight: '800', fontSize: 60, margin: 3}}>
                -
              </Text>
            )}
            {t11 === 1 && (
              <Text
                style={{
                  fontWeight: '800',
                  fontSize: 60,
                  margin: 3,
                  color: 'red',
                }}>
                {p1c}
              </Text>
            )}
            {t11 === 2 && (
              <Text
                style={{
                  fontWeight: '800',
                  fontSize: 60,
                  margin: 3,
                  color: 'blue',
                }}>
                {p2c}
              </Text>
            )}
          </Pressable>
          <Pressable
            onPress={() => {
              if (t12 !== 0) return;
              if (firstTurn) {
                setT12(1);
              } else {
                setT12(2);
              }
              setFirstTurn(!firstTurn);
            }}>
            {t12 === 0 && (
              <Text style={{fontWeight: '800', fontSize: 60, margin: 3}}>
                -
              </Text>
            )}
            {t12 === 1 && (
              <Text
                style={{
                  fontWeight: '800',
                  fontSize: 60,
                  margin: 3,
                  color: 'red',
                }}>
                {p1c}
              </Text>
            )}
            {t12 === 2 && (
              <Text
                style={{
                  fontWeight: '800',
                  fontSize: 60,
                  margin: 3,
                  color: 'blue',
                }}>
                {p2c}
              </Text>
            )}
          </Pressable>
          <Pressable
            onPress={() => {
              if (t13 !== 0) return;
              if (firstTurn) {
                setT13(1);
              } else {
                setT13(2);
              }
              setFirstTurn(!firstTurn);
            }}>
            {t13 === 0 && (
              <Text style={{fontWeight: '800', fontSize: 60, margin: 3}}>
                -
              </Text>
            )}
            {t13 === 1 && (
              <Text
                style={{
                  fontWeight: '800',
                  fontSize: 60,
                  margin: 3,
                  color: 'red',
                }}>
                {p1c}
              </Text>
            )}
            {t13 === 2 && (
              <Text
                style={{
                  fontWeight: '800',
                  fontSize: 60,
                  margin: 3,
                  color: 'blue',
                }}>
                {p2c}
              </Text>
            )}
          </Pressable>
        </View>
        <View
          style={{
            flexDirection: 'row',
            borderWidth: 10,
            borderBottomWidth: 5,
            borderColor: 'black',
            justifyContent: 'space-evenly',
            marginLeft: 6,
            marginRight: 6,
          }}>
          <Pressable
            onPress={() => {
              if (t21 !== 0) return;
              if (firstTurn) {
                setT21(1);
              } else {
                setT21(2);
              }
              setFirstTurn(!firstTurn);
            }}>
            {t21 === 0 && (
              <Text style={{fontWeight: '800', fontSize: 60, margin: 3}}>
                -
              </Text>
            )}
            {t21 === 1 && (
              <Text
                style={{
                  fontWeight: '800',
                  fontSize: 60,
                  margin: 3,
                  color: 'red',
                }}>
                {p1c}
              </Text>
            )}
            {t21 === 2 && (
              <Text
                style={{
                  fontWeight: '800',
                  fontSize: 60,
                  margin: 3,
                  color: 'blue',
                }}>
                {p2c}
              </Text>
            )}
          </Pressable>
          <Pressable
            onPress={() => {
              if (t22 !== 0) return;
              if (firstTurn) {
                setT22(1);
              } else {
                setT22(2);
              }
              setFirstTurn(!firstTurn);
            }}>
            {t22 === 0 && (
              <Text style={{fontWeight: '800', fontSize: 60, margin: 3}}>
                -
              </Text>
            )}
            {t22 === 1 && (
              <Text
                style={{
                  fontWeight: '800',
                  fontSize: 60,
                  margin: 3,
                  color: 'red',
                }}>
                {p1c}
              </Text>
            )}
            {t22 === 2 && (
              <Text
                style={{
                  fontWeight: '800',
                  fontSize: 60,
                  margin: 3,
                  color: 'blue',
                }}>
                {p2c}
              </Text>
            )}
          </Pressable>
          <Pressable
            onPress={() => {
              if (t23 !== 0) return;
              if (firstTurn) {
                setT23(1);
              } else {
                setT23(2);
              }
              setFirstTurn(!firstTurn);
            }}>
            {t23 === 0 && (
              <Text style={{fontWeight: '800', fontSize: 60, margin: 3}}>
                -
              </Text>
            )}
            {t23 === 1 && (
              <Text
                style={{
                  fontWeight: '800',
                  fontSize: 60,
                  margin: 3,
                  color: 'red',
                }}>
                {p1c}
              </Text>
            )}
            {t23 === 2 && (
              <Text
                style={{
                  fontWeight: '800',
                  fontSize: 60,
                  margin: 3,
                  color: 'blue',
                }}>
                {p2c}
              </Text>
            )}
          </Pressable>
        </View>
        <View
          style={{
            flexDirection: 'row',
            borderWidth: 10,
            borderColor: 'black',
            justifyContent: 'space-evenly',
            marginLeft: 6,
            marginRight: 6,
          }}>
          <Pressable
            onPress={() => {
              if (t31 !== 0) return;
              if (firstTurn) {
                setT31(1);
              } else {
                setT31(2);
              }
              setFirstTurn(!firstTurn);
            }}>
            {t31 === 0 && (
              <Text style={{fontWeight: '800', fontSize: 60, margin: 3}}>
                -
              </Text>
            )}
            {t31 === 1 && (
              <Text
                style={{
                  fontWeight: '800',
                  fontSize: 60,
                  margin: 3,
                  color: 'red',
                }}>
                {p1c}
              </Text>
            )}
            {t31 === 2 && (
              <Text
                style={{
                  fontWeight: '800',
                  fontSize: 60,
                  margin: 3,
                  color: 'blue',
                }}>
                {p2c}
              </Text>
            )}
          </Pressable>
          <Pressable
            onPress={() => {
              if (t32 !== 0) return;
              if (firstTurn) {
                setT32(1);
              } else {
                setT32(2);
              }
              setFirstTurn(!firstTurn);
            }}>
            {t32 === 0 && (
              <Text style={{fontWeight: '800', fontSize: 60, margin: 3}}>
                -
              </Text>
            )}
            {t32 === 1 && (
              <Text
                style={{
                  fontWeight: '800',
                  fontSize: 60,
                  margin: 3,
                  color: 'red',
                }}>
                {p1c}
              </Text>
            )}
            {t32 === 2 && (
              <Text
                style={{
                  fontWeight: '800',
                  fontSize: 60,
                  margin: 3,
                  color: 'blue',
                }}>
                {p2c}
              </Text>
            )}
          </Pressable>
          <Pressable
            onPress={() => {
              if (t33 !== 0) return;
              if (firstTurn) {
                setT33(1);
              } else {
                setT33(2);
              }
              setFirstTurn(!firstTurn);
            }}>
            {t33 === 0 && (
              <Text style={{fontWeight: '800', fontSize: 60, margin: 3}}>
                -
              </Text>
            )}
            {t33 === 1 && (
              <Text
                style={{
                  fontWeight: '800',
                  fontSize: 60,
                  margin: 3,
                  color: 'red',
                }}>
                {p1c}
              </Text>
            )}
            {t33 === 2 && (
              <Text
                style={{
                  fontWeight: '800',
                  fontSize: 60,
                  margin: 3,
                  color: 'blue',
                }}>
                {p2c}
              </Text>
            )}
          </Pressable>
        </View>
        <View style={{margin: 16}}>
          {firstTurn && (
            <Text style={{fontSize: 30, fontWeight: 'bold', color: 'red'}}>
              {p1}'s Turn !!!
            </Text>
          )}
          {!firstTurn && (
            <Text style={{fontSize: 30, fontWeight: 'bold', color: 'blue'}}>
              {p2}'s Turn !!!
            </Text>
          )}
        </View>
        <Modal transparent={true} visible={tie()}>
          <View style={styles.container}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>Draw Match !</Text>
            <Button onPress={() => resetBoard()} title="Restart"></Button>
          </View>
        </Modal>
        <Modal transparent={true} visible={checkForX()}>
          <View style={styles.container}>
            <Text
              style={{
                fontSize: 70,
                fontWeight: 'bold',
              }}>
              {p1c}
            </Text>

            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 25,
                margin: 15,
                padding: 9,
                color: 'darkgreen',
              }}>
              {p1} Won🔥🔥
            </Text>
            <Text style={{fontWeight: 'bold', fontSize: 18, textAlign: 'left'}}>
              Chill Out {p2} !
            </Text>
            <JokeBox />
            <Button
              onPress={() => {
                setT1(t1 + 1);
                resetBoard();
              }}
              title="Restart"></Button>
          </View>
        </Modal>
        <Modal transparent={true} visible={checkForY()}>
          <View style={styles.container}>
            <Text
              style={{
                fontSize: 70,
                fontWeight: 'bold',
              }}>
              {p2c}
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 25,
                margin: 15,
                padding: 9,
                color: 'darkgreen',
              }}>
              {p2} Won🔥🔥
            </Text>
            <Text style={{fontWeight: 'bold', fontSize: 18, textAlign: 'left'}}>
              Chill Out {p1}
            </Text>
            <JokeBox />
            <Button
              onPress={() => {
                setT2(t2 + 1);
                resetBoard();
              }}
              title="Restart"></Button>
          </View>
        </Modal>
        <Modal transparent={false} visible={!playedOnce}>
          <View style={styles.container}>
            <Text
              style={{
                fontWeight: '900',
                fontSize: 36,
                fontStyle: 'italic',
                margin: 20,
              }}>
              Just Another XO
            </Text>
            <TextInput
              onChangeText={txt => setP1(txt)}
              style={{
                backgroundColor: 'white',
                margin: 5,
                borderRadius: 14,
                padding: 16,
              }}
              placeholder="Enter Player 1's Name"></TextInput>
            <TextInput
              onChangeText={txt => setP2(txt)}
              placeholder="Enter Player 2's Name"
              style={{
                backgroundColor: 'white',
                margin: 18,
                borderRadius: 14,
                padding: 16,
              }}></TextInput>
            <TextInput
              onChangeText={txt => {
                if (txt !== p2) setP1c(txt);
              }}
              style={{
                backgroundColor: 'white',
                margin: 5,
                borderRadius: 14,
                padding: 16,
              }}
              placeholder="Enter Player 1's Emoji"></TextInput>
            <TextInput
              onChangeText={txt => {
                if (txt !== p1) setP2c(txt);
              }}
              placeholder="Enter Player 2's Emoji"
              style={{
                backgroundColor: 'white',
                margin: 18,
                borderRadius: 14,
                padding: 16,
              }}></TextInput>
            <Button
              onPress={() => {
                setPlayedOnce(true);
              }}
              title="Start Playing"></Button>
          </View>
        </Modal>
      </View>
      <View
        style={{
          backgroundColor: 'blue',
          margin: 8,
          padding: 16,
          borderRadius: 13,
        }}>
        <Text
          style={{
            fontSize: 40,
            fontWeight: 'bold',
            textAlign: 'center',
            color: 'white',
          }}>
          Wins
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            //textAlign: 'center',
            padding: 5,
            color: 'white',
          }}>
          {p1} : {t1}
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            //textAlign: 'center',
            padding: 5,
            color: 'white',
          }}>
          {p2} : {t2}
        </Text>
      </View>
      {/* <JokeBox /> */}
      {/* <Text> HI </Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  txt: {
    fontWeight: 'bold',
    fontSize: 8,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 40,
    borderRadius: 40,
    backgroundColor: 'lightblue',
  },
});

export default App;
