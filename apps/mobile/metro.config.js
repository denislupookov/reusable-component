const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const projectRoot = __dirname;
const monorepoRoot = path.resolve(projectRoot, '../..');

const config = getDefaultConfig(projectRoot);

// 1. Watch all files within the monorepo
config.watchFolders = [monorepoRoot];

// 2. Let Metro know where to resolve packages and in what order
config.resolver.nodeModulesPaths = [
    path.resolve(projectRoot, 'node_modules'),
    path.resolve(monorepoRoot, 'node_modules'),
];

// 3. Force Metro to resolve (sub)dependencies only from the `nodeModulesPaths`
// but EXCLUDE duplicate packages from the monorepo packages to avoid "Multiple Reacts"
const exclusionList = [
    // Exclude react-native from packages/ui
    /\/packages\/ui\/node_modules\/react-native\/.*/,
    /\/packages\/ui\/node_modules\/react\/.*/,
    /\/packages\/ui\/node_modules\/react-dom\/.*/,

    // Also likely block conflicting deps
    /\/packages\/ui\/node_modules\/@react-native\/virtualized-lists\/.*/,
    /\/packages\/ui\/node_modules\/react-native-gesture-handler\/.*/,
    /\/packages\/ui\/node_modules\/react-native-reanimated\/.*/,
    /\/packages\/ui\/node_modules\/react-native-safe-area-context\/.*/,
];
if (Array.isArray(config.resolver.blockList)) {
    config.resolver.blockList.push(...exclusionList);
} else {
    // If it's a regex or undefined, we might need to handle it differently, 
    // but for Expo default config, it is an array.
    config.resolver.blockList = [...(config.resolver.blockList || []), ...exclusionList];
}

module.exports = config;
