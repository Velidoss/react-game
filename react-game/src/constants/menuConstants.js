const menuConstants = {
  menuLayout: {
    mainMenu: [
      {
        title: 'Start game',
        path: '/regimes'
      },
      {
        title: 'Settings',
        path: '/settings'
      }, 
      {
        title: 'Records',
        path: '/records'
      }, 
    ],
    regimes: [
      {
        title: 'bo3',
        path: '/game'
      },
      {
        title: 'bo5',
        path: '/game'
      }, 
      {
        title: 'domination',
        path: '/game'
      }, 
      {
        title: 'back',
        path: '/',
      }, 
    ],
    settings: [
      {
        title: 'audio',
      },
      {
        title: 'color scheme',
      }, 
      {
        title: 'language',
      }, 
      {
        title: 'back',
        path: '/',
      }, 
    ],
    records: [
      {
        title: 'back',
        path: '/',
      }, 
    ]
  }
};

export default menuConstants;