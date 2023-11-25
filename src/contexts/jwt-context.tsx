import {createContext, useEffect, useReducer} from 'react';
import type {FC, ReactNode} from 'react';
import PropTypes from 'prop-types';
import {authApi} from '../api/auth-api';
import type {User} from '../types/user';

interface State {
    isInitialized: boolean;
    isAuthenticated: boolean;
    user: User | null;
}

interface AuthContextValue extends State {
    platform: 'JWT';
    login: (username: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    register: (email: string, name: string, password: string) => Promise<void>;
}

interface AuthProviderProps {
    children: ReactNode;
}

type InitializeAction = {
    type: 'INITIALIZE';
    payload: {
        isAuthenticated: boolean;
        user: User | null;
    };
};

type LoginAction = {
    type: 'LOGIN';
    payload: {
        user: User;
    };
};

type LogoutAction = {
    type: 'LOGOUT';
};

type RegisterAction = {
    type: 'REGISTER';
    payload: {
        user: User;
    };
};

type Action =
    | InitializeAction
    | LoginAction
    | LogoutAction
    | RegisterAction;

const initialState: State = {
    isAuthenticated: false,
    isInitialized: false,
    user: null
};

const handlers: Record<string, (state: State, action: Action) => State> = {
    // @ts-ignore
    INITIALIZE: (state: State, action: InitializeAction): State => {
        const {isAuthenticated, user} = action.payload;

        return {
            ...state,
            isAuthenticated,
            isInitialized: true,
            user
        };
    },
    // @ts-ignore
    LOGIN: (state: State, action: LoginAction): State => {
        const {user} = action.payload;

        return {
            ...state,
            isAuthenticated: true,
            user
        };
    },
    LOGOUT: (state: State): State => ({
        ...state,
        isAuthenticated: false,
        user: null
    }),
    // @ts-ignore
    REGISTER: (state: State, action: RegisterAction): State => {
        const {user} = action.payload;

        return {
            ...state,
            isAuthenticated: true,
            user
        };
    }
};

const reducer = (state: State, action: Action): State => (
    handlers[action.type] ? handlers[action.type](state, action) : state
);

export const AuthContext = createContext<AuthContextValue>({
    ...initialState,
    platform: 'JWT',
    login: () => Promise.resolve(),
    logout: () => Promise.resolve(),
    register: () => Promise.resolve()
});

export const AuthProvider: FC<AuthProviderProps> = (props) => {
    const {children} = props;
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const initialize = async (): Promise<void> => {
            try {
                const auth = window.localStorage.getItem('user');
                const menu = window.localStorage.getItem('menu');
                if (auth && menu) {
                    // @ts-ignore
                    const user: User = JSON.parse(auth);
                    dispatch({
                        type: 'INITIALIZE',
                        payload: {
                            isAuthenticated: true,
                            user
                        }
                    });
                } else {
                    dispatch({
                        type: 'INITIALIZE',
                        payload: {
                            isAuthenticated: false,
                            user: null
                        }
                    });
                    window.localStorage.removeItem('user');
                    window.localStorage.removeItem('menu');
                }
            } catch (err) {
                console.error(err);
                dispatch({
                    type: 'INITIALIZE',
                    payload: {
                        isAuthenticated: false,
                        user: null
                    }
                });
                window.localStorage.removeItem('user');
                window.localStorage.removeItem('menu');
            }
        };
        const user: User = {
            access_token: '',
            change_password: '',
            created_at: '',
            dien_thoai: '',
            email: '',
            fullname: '',
            id: 0,
            is_active: '',
            is_arv: '',
            is_delete: '',
            is_lao: '',
            ma_cskcb: '',
            ma_tinh: '',
            masobhxh: '',
            ngay_sinh: '',
            nha_thau_id: '',
            remember_token: '',
            scopes: [],
            trinh_do: '',
            updated_at: '',
            user_group: '',
            user_type: '',
            username: '',
            vi_tri: '',
        };
        dispatch({
            type: 'INITIALIZE',
            payload: {
                isAuthenticated: true,
                user
            }
        });
        // initialize();
    }, []);

    const login = async (username: string, password: string): Promise<void> => {
        const user = await authApi.login({username, password});
        const menu = await authApi.getMenu(user.access_token);
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('menu', JSON.stringify(menu));
        dispatch({
            type: 'LOGIN',
            payload: {
                user
            }
        });
    };

    const logout = async (): Promise<void> => {
        localStorage.removeItem('user');
        localStorage.removeItem('menu');
        dispatch({type: 'LOGOUT'});
    };

    const register = async (
        email: string,
        name: string,
        password: string
    ): Promise<void> => {
        const accessToken = await authApi.register({email, name, password});
        const user = await authApi.me(accessToken);

        localStorage.setItem('accessToken', accessToken);

        dispatch({
            type: 'REGISTER',
            payload: {
                user
            }
        });
    };

    return (
        <AuthContext.Provider
            value={{
                ...state,
                platform: 'JWT',
                login,
                logout,
                register
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export const AuthConsumer = AuthContext.Consumer;
