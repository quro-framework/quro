import { Configuration } from 'webpack'
import * as path from 'path'
import pkg from './package.json'

const config: Configuration = {
  mode: 'development',
  entry: './src/index.ts',
  target: 'node',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, './lib'),
    library: pkg.name,
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      }
    ]
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.ts', '.js', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
}

export default config
