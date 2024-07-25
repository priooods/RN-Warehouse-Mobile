import { StyleProp, ViewStyle } from "react-native";
import { RouterInterface } from "../../utils/router_component";

export interface AppbarModel {
    title: string;
    router_interface: RouterInterface,
    style?: StyleProp<ViewStyle>
}