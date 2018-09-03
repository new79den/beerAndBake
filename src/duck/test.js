import { appName } from '../init/config';

export const widget = 'test';

// Actions
export const TEST   = `${appName}/${widget}/TEST`;

//reducer
export default function reducer(state = {test: 'rest'}, action = {}) {
    switch (action.type) {
        // do reducer stuff
        default: return state;
    }
}

