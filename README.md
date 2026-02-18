# Reusable Component Monorepo

This repo is an example of how to run reusable components across mobile (Expo/React Native) and browser (React). We achieve this by using aliasing in React Native Web, so the same component API can map to platform-specific implementations when needed.

The example includes 3 components and shows different reuse strategies:
- `Button`: same UI across platforms.
- `Dropdown`: different fallback depending on mobile vs web.
- `NativeBottomSheet`: showcases using Expo UI for a native iOS view in addition to web/Android fallbacks.

**Project Layout**
- `apps/mobile`: Expo mobile app
- `apps/extension`: Web extension UI
- `packages/ui`: Shared UI components

**Setup**
```bash
npm install
```

**Mobile (Expo)**
```bash
cd apps/mobile

# Dev server (dev client)
npm run start

# Generate native projects (prebuild)
npx expo prebuild --clean

# Build & run on iOS
npm run ios

# Build & run on Android
npm run android
```

**Extension**
```bash
cd apps/extension

# Watch build
npm run dev

# Build
npm run build

# Serve
npm run serve
```

**Storybook**
```bash
cd packages/ui
npm run storybook
```
```bash
cd packages/ui
npm run build-storybook
```

**Components**
- `Button`: Pressable with `primary`/`secondary` variants, disabled state, and web hover styling.
- `Dropdown`: Uses `@gorhom/bottom-sheet` on native and an inline list on web.
- `NativeBottomSheet`: Demonstrates platform-specific implementations: iOS leverages `@expo/ui/swift-ui`, Android uses `@gorhom/bottom-sheet`, and Web falls back to a `Modal`.