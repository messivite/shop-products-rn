import { MainStackParams } from '@Interfaces/navigation/types';
import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const useNavHelper = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<MainStackParams>>();

  // MAINSTACK ROUTES
  const handleBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.navigate('TabbarNavigation', {});
    }
  };

  return {
    handleBack,
  };
};

export default useNavHelper;
