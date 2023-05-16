import react from '@vitejs/plugin-react-swc';
import * as path from 'path';
import { defineConfig } from 'vite';
// eslint-disable-next-line import/no-extraneous-dependencies
import EnvironmentPlugin from 'vite-plugin-environment';
import svgrPlugin from 'vite-plugin-svgr';

export default defineConfig(() => {
    return {
        base: process.env.NODE_ENV === 'development' ? '/' : '/ppa/',
        envDir: './config',
        plugins: [
            react(),
            svgrPlugin({
                svgrOptions: {
                    icon: true,
                    // ...svgr options (https://react-svgr.com/docs/options/)
                },
            }),
        ],
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@import "src/styles/_mixins.scss";`,
                },
            },
        },
        build: {
            cssMinify: false,
            minify: false,
            sourcemap: false,
            rollupOptions: {
                output: {
                    manualChunks: (id) => {
                        let chunkName;

                        if (id.includes('node_modules')) {
                            chunkName = id
                                .toString()
                                .split('node_modules/')[1]
                                .split('/')[1]
                                .toString();
                        }

                        if (
                            ['react', 'react-router-dom', 'react-dom'].some(
                                (key) => chunkName && chunkName.startsWith(key),
                            )
                        )
                            return 'vendor';

                        return chunkName;
                    },
                    esModule: true,
                    interop: 'compat',
                    systemNullSetters: false,
                },
            },
        },
        resolve: {
            alias: {
                '@assets': path.resolve(__dirname, './src/assets'),
                '@components': path.resolve(__dirname, './src/components'),
                '@config': path.resolve(__dirname, './src/config'),
                '@contexts': path.resolve(__dirname, './src/contexts'),
                '@hooks': path.resolve(__dirname, './src/hooks'),
                '@mocks': path.resolve(__dirname, './src/mocks'),
                '@pages': path.resolve(__dirname, './src/pages'),
                '@router': path.resolve(__dirname, './src/router'),
                '@rtlconfig': path.resolve(__dirname, './src/rtlconfig'),
                '@typings': path.resolve(__dirname, './src/typings'),
                '@utils': path.resolve(__dirname, './src/utils'),
            },
        },
    };
});
