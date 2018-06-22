export const DATA_AVAILABLE = 'DATA_AVAILABLE';
export const MOVIE_DATA_AVAILABLE = 'MOVIE_DATA_AVAILABLE';
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const TAB_CHILD_ONE = 'TAB_CHILD_ONE'
export const TAB_CHILD_TWO = 'TAB_CHILD_TWO'
export const TAB_BACK = 'TAB_BACK'

export function getLoginRequest() {
    return (dispatch) => {
        dispatch({
            type: LOGIN_REQUEST,
            checkString: Math.random(),
        });
    };
}

export function getTabChild() {
    return (dispatch) => {
        dispatch({
            type: TAB_CHILD_ONE,
            tabChild: Math.random(),
        });
    }
}

export function getTabChildSecond() {
    return (dispatch) => {
        dispatch({
            type: TAB_CHILD_TWO,
            tabChildSecond: Math.random(),
        });
    }
}

export function getData() {
    return (dispatch) => {
        setTimeout(() => {
            var data = Data.instructions;
            dispatch({
                type: DATA_AVAILABLE,
                data: data
            });
        }, 2000);

    };
}

export function getMoviePopularData(mPage) {
    console.log('This is an Pagination :--->', mPage);
    return (dispatch) => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=ff7e79101f6a4d8656617b0c9ff27d9d&language=en-US&page=${mPage}`)
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({
                    type: MOVIE_DATA_AVAILABLE,
                    data: responseJson.results
                });
            });
    };

}

