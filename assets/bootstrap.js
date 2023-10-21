import { startStimulusApp } from '@symfony/stimulus-bridge';
import { registerReactControllerComponents } from '@symfony/ux-react';

// Registers React components as Stimulus controllers
registerReactControllerComponents(require.context('./react/components', true, /\.(j|t)sx?$/));


// Registers Stimulus controllers from controllers.json and in the controllers/ directory
export const app = startStimulusApp(require.context(
    '@symfony/stimulus-bridge/lazy-controller-loader!./react/components',
    true,
    /\.[jt]sx?$/
));