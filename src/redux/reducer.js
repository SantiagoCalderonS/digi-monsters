const initialState= {
    counter: 0,
    show: false,
    principal: {},
    allMonsters: [],
    allObjets: []
    }

export default function reducer ( state = initialState, actions) {
    
    switch(actions.type){
        
        case 'SET_MONSTER':
            return {...state, principal: actions.payload };
        
        case 'SET_ALLMONSTERS':
            return {...state, allMonsters: actions.payload };
            
        case 'SET_ALLOBJETS':
            return {...state, allObjets: actions.payload };

        case '+':
            return { ...state, counter: state.counter + actions.payload };
      
        case '-':
            return {...state, counter: state.counter - actions.payload };

        case 'SHOW':
            return {...state, show: !state.show };
            
            //repasar funcion del default
            default: return {...state};
    }
};