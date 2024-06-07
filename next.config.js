/** @type {import('next').NextConfig} */
const nextConfig = {
  compilerOptions: {
    skipLibCheck: true,
    target: 'es5',
    lib: ['dom', 'dom.iterable', 'esnext'],
    allowJs: true,
    skipLibCheck: true,
    strict: false,
    forceConsistentCasingInFileNames: true,
    noEmit: true,
    esModuleInterop: true,
    module: 'esnext',
    moduleResolution: 'node',
    resolveJsonModule: true,
    isolatedModules: true,
    jsx: 'preserve',
    incremental: true,
    types: ['new-types'],
  },
  include: [
    'new-types.d.ts',
    'next-env.d.ts',
    '.next/types/**/*.ts',
    '**/*.ts',
    '**/*.tsx',
  ],
  exclude: ['node_modules'],
};

module.exports = nextConfig;
