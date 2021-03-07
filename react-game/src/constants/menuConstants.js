const menuConstants = {
  menuLayout: {
    mainMenu: [
      {
        title: 'Resume game',
        ruTitle: 'Продолжить игру',
        path: '/game'
      },
      {
        title: 'Start new game',
        ruTitle: 'Новая игра',
        path: '/regimes'
      },
      {
        title: 'Settings',
        ruTitle: 'Настройки',
        path: '/settings'
      }, 
      {
        title: 'Records',
        ruTitle: 'Записи',
        path: '/records'
      }, 
    ],
    regimes: [
      {
        title: 'bo3',
        ruTitle: 'bo3',
        path: '/game'
      },
      {
        title: 'bo5',
        ruTitle: 'bo5',
        path: '/game'
      }, 
      {
        title: 'domination',
        ruTitle: 'Доминация',
        path: '/game'
      }, 
      {
        title: 'back',
        ruTitle: 'Назад',
        path: '/',
      }, 
    ],
    settings: [
      {
        title: 'audio',
        ruTitle: 'Звук',
      },
      {
        title: 'color scheme',
        ruTitle: 'Цвет',
      }, 
      {
        title: 'language',
        ruTitle: 'Язык',
      }, 
      {
        title: 'back',
        ruTitle: 'Назад',
        path: '/',
      }, 
    ],
    records: [
      {
        title: 'back',
        ruTitle: 'Назад',
        path: '/',
      }, 
    ]
  }
};

export default menuConstants;