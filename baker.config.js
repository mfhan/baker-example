const entrypoints = [
  // Add more script entrypoints here as needed
  'app',
];

export default {
  output: 'docs',
  domain: 'https://mfhan.github.io',
  entrypoints: `scripts/${
    entrypoints.length > 1 ? `{${entrypoints.join(',')}}` : entrypoints[0]
  }.js`,
  pathPrefix: '/baker-example/',
};
