App = {
  contracts: {},
  init: async () => {
    await App.consolePrint();
  },
  consolePrint: async () => {
    console.log("********");
  },
};

App.init();