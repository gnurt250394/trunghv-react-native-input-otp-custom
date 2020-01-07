# react-native-input-otp-custom

## Getting started

`$ npm install react-native-input-otp-custom --save`

### Mostly automatic installation

`$ react-native link react-native-input-otp-custom`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-input-otp-custom` and add `InputOtpCustom.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libInputOtpCustom.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainApplication.java`
  - Add `import com.reactlibrary.InputOtpCustomPackage;` to the imports at the top of the file
  - Add `new InputOtpCustomPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-input-otp-custom'
  	project(':react-native-input-otp-custom').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-input-otp-custom/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-input-otp-custom')
  	```


## Usage
```javascript
import InputOtpCustom from 'react-native-input-otp-custom';

// TODO: What to do with the module?
InputOtpCustom;
```
