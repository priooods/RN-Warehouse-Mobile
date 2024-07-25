import { InputModeOptions, StyleProp, ViewStyle } from "react-native"

export interface ModelInput {
    label: string,
    isRequired?: boolean,
    placeholder?: string,
    inputMode?: InputModeOptions,
    value: string | undefined,
    changeValue: (value: string) => void,
    styleContainer?: StyleProp<ViewStyle>,
    styleInput?: StyleProp<ViewStyle>,
}