import {FETCHING_STARWARS, FETCHING_STARWARS_SUCCESS, FETCHING_STARWARS_FAILURE} from '../actions';
const initialState = {
    // define a few properties here.
    // Array characters, Boolean fetching, null error.
    starWars : [],
    isFetching : false,
    error : null
};


export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
      // Fill me in with the important reducers
      // action types should be FETCHING, SUCCESS and FAILURE
      // your switch statement should handle all of these cases.
      case FETCHING_STARWARS :
          return {...state, isFetching : true};
      case FETCHING_STARWARS_SUCCESS :
          return {...state, 
                  isFetching : false,
                  starWars : [...state.starWars, ...action.payload] 
                 }; 
      case FETCHING_STARWARS_FAILURE :
          return {...state, isFetching : false, error : action.payload};
      default:
        return state;
  }
};
