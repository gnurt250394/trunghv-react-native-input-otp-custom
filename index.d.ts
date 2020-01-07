interface InputProperties {
    pinCount: number,
    codeInputFieldStyle: object,
    codeInputHighlightStyle: object,
    onCodeFilled: () => void,
    onCodeChanged: () => void,
    autoFocusOnLoad: boolean,
    code: string,
}
declare module "trunghc-react-native-input-otp-custom" {

    export default class InputOtp extends React.Component<InputProperties> {
    }
}