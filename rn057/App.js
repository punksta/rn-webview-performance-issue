import React from "react";

import {Button, FlatList, WebView as CoreWebview, Text, View} from "react-native";
import {WebView} from "react-native-webview";


const arraySize = 1000;

const array = Array.apply(null, Array(arraySize)).map((_, i) => i);

class A extends React.Component {
  shouldComponentUpdate(
      nextProps: Readonly<P>,
      nextState: Readonly<S>,
      nextContext: any
  ): boolean {
    return false;
  }

  render() {
    const {index} = this.props;

    return (
        <View>
          <View
              style={{
                margin: 16
              }}
          >
            <Text style={{backgroundColor: "red"}}>before webview {index}</Text>
            <Button
                style={{backgroundColor: "green"}}
                title={`before webview ${index}`}
                onPress={() => {}}
            />

            <WebView
                scrollEnabled={false}
                key={"webview"}
                style={{
                  width: "100%",
                  height: 400
                }}
                width="100%"
                source={{
                  html: "hello"
                }}
            />

            <Text style={{backgroundColor: "red"}}>after webview = {index}</Text>

            <Button
                style={{backgroundColor: "green"}}
                title={`after webview ${index}`}
                onPress={() => {}}
            />
          </View>
        </View>
    );
  }
}

const keyExtractor = (item, index) => index.toString();
const renderItem = ({index}) => <A index={index} />;

class DummyTestScreen extends React.Component {
  render() {
    return (
        <View style={{flex: 1, backgroundColor: "gray"}}>
          <FlatList
              keyExtractor={keyExtractor}
              style={{flex: 1}}
              renderItem={renderItem}
              data={array}
          />
          <Text>Test</Text>
        </View>
    );
  }
}

const r = () => <DummyTestScreen />;
export default r;
