module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'welcome',
        {
          Setup: [
            'Setup/Anischedule' ,
            'Setup/Economy' ,
            'Setup/Counter' ,
            'Setup/custom_welcome_message' ,
            'Setup/custom_leave_message' ,
            'Setup/XP_System',
            'Setup/proxy'
          ],
        },

      ],
    },
        'Commands',

  ],
  api: [
    `api/chatapi`,
    `api/animalfactapi`,
    `api/jokeapi`,
    `api/lyricsapi`,
    `api/pokedexapi`
  ]
};