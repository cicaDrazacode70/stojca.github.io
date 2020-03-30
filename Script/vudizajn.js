const vueApp = new Vue({
    el: '#vapp',
    data: { 
      display: 'Sajmon elitni web programer!',
      obavestenje: "Server status: online;      ip: 64.227.74.1:7777;      developed by Sajmon_Jamaica.", 
      ime: "",
      prezime: ""
    },
    computed: {
      punoime: function() {
        return this.ime + "_" + this.prezime;
      }
    }
});