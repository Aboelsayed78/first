new Vue ({
  el:'#info',
  data: {
    name: 'Mohamed',
    skills: ['HTML', 'CSS', 'JS', 'SASS', 'jQyery', 'Vue']
  },
  methods: {
    sayMyName: function(n){
      this.name = n
    }
  }
})
