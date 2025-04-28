import viteImagemin from 'vite-plugin-imagemin';
import path from 'path';

export default () => {
  return {
    build: {
      rollupOptions: {
        input: {
          ua: path.resolve(__dirname, 'ua.html'),
          eng: path.resolve(__dirname, 'eng.html'),
        },
      },
    },
    plugins: [
      viteImagemin({
        gifsicle: {
          optimizationLevel: 3,
          interlaced: false,
        },
        optipng: {
          optimizationLevel: 3,
        },
        mozjpeg: {
          quality: 80,
        },
        pngquant: {
          quality: [0.8, 0.9],
          speed: 4,
        },
        svgo: {
          plugins: [
            {
              name: 'removeViewBox',
            },
            {
              name: 'removeEmptyAttrs',
              active: false,
            },
          ],
        },
      }),
    ],
  };
};
