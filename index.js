import { ExpoRoot } from "expo-router";
import { registerRootComponent } from 'expo';
import { setDefaultOptions } from 'date-fns';
import fr from 'date-fns/locale/fr';

setDefaultOptions({ locale: fr });

export function App() {
    const ctx = require.context("./src/app");
    return <ExpoRoot context={ctx} />;
}

registerRootComponent(App);
