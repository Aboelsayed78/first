new Vue ({
  el:'#info',
  data: {
    classs: 'styled',
    name: 'Mohamed',
    skills: ['HTML', 'CSS', 'JS', 'SASS', 'jQyery', 'Vue']
  },
  methods: {
    chMyName: function(n){
      this.name = n
    },
    reMyName: function(n){
      this.name = n
    },
    reset: function(){
      this.classs = 'reset'
    },
    styled: function(){
      this.classs = 'styled'
    }
  }
})
