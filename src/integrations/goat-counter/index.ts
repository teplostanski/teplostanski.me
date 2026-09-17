import type { AstroIntegration } from 'astro';
import type { GoatCounterOptions, ResolvedGoatCounterOptions } from './types';

const defaults: ResolvedGoatCounterOptions = {
  endpoint: '',
  enabled: true,
  autoPageviews: true,
  hashMode: false,
  allowLocal: false,
  allowFrame: false,
  params: {},
};

export function goatCounterIntegration(options: GoatCounterOptions = {}): AstroIntegration {
  const resolvedOptions: ResolvedGoatCounterOptions = {
    ...defaults,
    ...options,
    params: {
      ...defaults.params,
      ...options.params,
    },
  };

  if (!resolvedOptions.endpoint) {
    throw new Error('[astro-goat-counter] `endpoint` is required');
  }

  const clientUrl = new URL('./client.ts', import.meta.url).href;

  return {
    name: 'astro-goat-counter',
    hooks: {
      'astro:config:setup': ({ injectScript }) => {
        if (!resolvedOptions.enabled) return;

        injectScript(
          'page',
          `import('${clientUrl}').then(({ setupGoatCounter }) => {
            setupGoatCounter(${JSON.stringify(resolvedOptions)});
          }).catch(err => {
            console.error('[astro-goat-counter] Load error:', err);
          });`
        );
      },
    },
  };
}

export default goatCounterIntegration;