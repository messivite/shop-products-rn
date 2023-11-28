import React, { memo } from 'react';
import { ActivityIndicator } from 'react-native';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '@Store';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AppNavigation from '@Core/navigation/AppNavigation';
import ErrorBoundary from 'react-native-error-boundary';
import { ErrorFallbackView } from '@Components';
import { errorHandler } from '@Hooks';
const App = () => {
  return (
    <ErrorBoundary onError={errorHandler} FallbackComponent={ErrorFallbackView}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <Provider store={store}>
            <PersistGate
              loading={<ActivityIndicator size={'large'} />}
              persistor={persistor}>
              <AppNavigation />
            </PersistGate>
          </Provider>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </ErrorBoundary>
  );
};

export default memo(App);
