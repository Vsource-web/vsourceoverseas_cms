module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'local',
      providerOptions: {
        sizeLimit: 200 * 1024 * 1024, 
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
});
