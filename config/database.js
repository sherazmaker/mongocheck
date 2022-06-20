// module.exports = ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'bookshelf',
//       settings: {
//         client: 'sqlite',
//         filename: env('DATABASE_FILENAME', '.tmp/data.db'),
//       },
//       options: {
//         useNullAsDefault: true,
//       },
//     },
//   },
// });

// module.exports = ({ env }) => ({
//   defaultConnection: "default",
//   connections: {
//     default: {
//       connector: "mongoose",
//       settings: {
//         uri: env("DATABASE_URI"),
//       },
//       options: {
//         ssl: true,
//       },
//     },
//   },
// });

module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        client: "mongo",
        uri: "mongodb+srv://logomoto:logomoto@cluster0.cs9j1.mongodb.net/?retryWrites=true&w=majority",
      },
      options: {
        ssl: true,
      },
    },
  },
});
