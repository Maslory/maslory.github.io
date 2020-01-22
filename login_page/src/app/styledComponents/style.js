import {
    makeStyles
} from '@material-ui/core/styles';
import {
    withStyles
} from '@material-ui/core/styles';

export function style(theme) {
    return {
        avatar: {
            background: '#E10050',
        },
        title: {
            position: 'relative',
            width: '100%',
            textAlign: 'center',
            marginLeft: theme.spacing(2)
        },
        input: {
            width: '100%',
            marginTop: theme.spacing(3),

            '& label.Mui-focused': {
                color: '#2196F3',
            },
            '& .MuiInput-underline:after': {
                borderBottomColor: '#2196F3',
            },
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    borderColor: 'rgba(0, 0, 0, 0.36)',
                },
                '&:hover fieldset': {
                    borderColor: 'rgba(0, 0, 0, 0.87)',
                },
                '&.Mui-focused fieldset': {
                    borderColor: '#2196F3',
                },
            },
        },

        checkBox: {
            marginTop: theme.spacing(1),
            width: '100%',
        },
        button: {
            marginTop: theme.spacing(3),
            width: '100%',
            background: '#2196F3',
            '&:hover': {
                background: '#2F80ED'
            },
        },

        signInPage: {
            minWidth: '320px',
            height: '100vh',
        },
        link: {
            marginTop: theme.spacing(1),
            textAlign: 'right',
            float: 'right',
            color: '#2196F3'
        }
    }
}

export const checkBox = {
    root: {
        '&:hover': {
            background: 'rgba(33, 150, 243, 0.1)',
        },
        '&$checked': {
            color: '#2F80ED',
        },
    },
    checked: {},
}