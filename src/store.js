import Vue from 'vue';

import Vuex from 'vuex';

Vue.use(Vuex);

export  const  store=new Vuex.store({

    state:{

        registration:[],

        users:[

            {id:1,name:'aung',registered:false},
            {id:2,name:'thu',registered:false},
            {id:3,name:'phyo',registered:false}
        ]

    }
});