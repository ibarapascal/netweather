module.exports = {
  title: 'React Style Guide Example',
  components: 'src/components/**/[A-Z]*.tsx',
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  propsParser: require('react-docgen-typescript').withCustomConfig('./tsconfig.json').parse,
};
