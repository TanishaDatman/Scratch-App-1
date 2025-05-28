import React from 'react';
import { Platform, View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function EChart({ option }: { option: any }) {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <style>
          html, body, #main {
            height: 100%;
            margin: 0;
            padding: 0;
            background-color: #fff;
          }
        </style>
      </head>
      <body>
        <div id="main"></div>
        <script src="https://cdn.jsdelivr.net/npm/echarts@5.4.2/dist/echarts.min.js"></script>
        <script>
          var myChart = echarts.init(document.getElementById('main'));
          var option = ${JSON.stringify(option)};
          myChart.setOption(option);
        </script>
      </body>
    </html>
  `;

  if (Platform.OS === 'web') {
    return (
      <div style={{ height: 300, width: '100%', marginTop: 100 }}>
        <iframe
          srcDoc={htmlContent}
          style={{ width: '100%', height: '100%', border: 'none' }}
          sandbox="allow-scripts"
          title="echart"
        />
      </div>
    );
  }

  return (
    <View style={styles.container}>
      <WebView
        originWhitelist={['*']}
        source={{ html: htmlContent }}
        javaScriptEnabled
        domStorageEnabled
        scalesPageToFit
        automaticallyAdjustContentInsets={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: '100%',
    marginTop: 100,
  },
});
