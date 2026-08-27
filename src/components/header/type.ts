import { RootStackParamList } from '@/routes/RootRoutes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export interface headerProps {
  screenName: string;
}
export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
