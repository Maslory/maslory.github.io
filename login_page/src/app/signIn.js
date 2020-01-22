import React from 'react';
import '../style/style.sass';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import 'typeface-roboto';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { connect } from "react-redux";
import { changeToken, changeChecked, request, changeLogin, changePassword } from "./actions/actions"
import { useEffect } from 'react';
import { style, checkBox } from './styledComponents/style'
import { withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => (style(theme)))

export const CustomCheckbox = withStyles(checkBox)(props => <Checkbox color="default" {...props} />);

const SignIn = (props) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checked: false,
  });

  const handleCheck = (event) => {
    props.changeChecked(!props.checked)
  }

  const handleChangeLogin = (event) => {
    // изменить состояние почты
    props.changeLogin(event.target.value)
  }

  const handleChangePassword = (event) => {
    // изменить состояние пароля
    props.changePassword(event.target.value)
  }

  const handleSubmit = () => {
    // отправка формы на сервер (логин/пароль), отсюда же вызывается сага
    props.call()
  }

  useEffect(() =>
    ValidatorForm.addValidationRule('minValue', (value) => {
      if (value.length < 6) {
        return false;
      }
      return true;
    }),
    ValidatorForm.addValidationRule('maxValue', (value) => {
      if (value.length > 16) {
        return false;
      }
      return true;
    })
  );

  return (
    <Container className={classes.signInPage} component='main' maxWidth='xs' style={{ height: '100vh' }} >
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '85vh' }}
      >
        <Grid container
          justify="center"
          direction='column'
          alignItems='center'
        >
          <Grid item   >
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
          </Grid>
          <Grid item>
            <Typography className={classes.title} variant="h4" gutterBottom>
              Вход в аккаунт
      </Typography>
          </Grid>
        </Grid>

        <Grid >
          <Grid item xs={12} sm={12}>
            <ValidatorForm

              onSubmit={handleSubmit}
              onError={errors => console.log(errors)}
            >
              <TextValidator
                label="Почта"
                value={props.login}
                variant="outlined"
                name="email"
                type="email"
                className={classes.input}
                onChange={handleChangeLogin}

                validators={['required', 'isEmail']}
                errorMessages={['this field is required', 'email is not valid']}
              />
              <TextValidator
                className={classes.input}
                label="Пароль"
                variant="outlined"
                name="password"
                type="password"
                onChange={handleChangePassword}
                value={props.password}
                validators={['required', 'minValue', 'maxValue']}
                errorMessages={['this field is required', 'минимальная длина пароля 6 символов',
                  'максимальная длина пароля 16 символов']}
              />
              <FormControlLabel
                className={classes.checkBox}
                control={
                  <CustomCheckbox
                    checked={props.checked}
                    onChange={handleCheck}
                    value="checked"
                    color='primary'
                    type="checkbox"
                  />
                }
                label="Запомнить меня"
              />
              <Button type='submit' className={classes.button} variant="contained" color='primary' >
                Войти в аккаунт
      </Button>
            </ValidatorForm>
          </Grid>
        </Grid>

        <Grid container
          justify="space-between"
          direction='row'

        >
          <Grid item   >
            <Typography variant="body1">
              <Link href="#"
                className={classes.link}
              >
                Забыли пароль?
      </Link>
            </Typography>
          </Grid>
          <Grid item xs={6} >
            <Typography >
              <Link href="#"
                variant='body1'
                className={classes.link}
              >
                Ещё нет аккаунта? Регистрация
      </Link>
            </Typography>

          </Grid>
        </Grid>

      </Grid>
      <Box mt={8}>
        <Typography className={classes.title} gutterBottom variant="body2"  >
          Copyright© Ваш сайт 2019
            </Typography>
      </Box>
    </Container>
  );

}


function mapDispatchToProps(dispatch) {
  return {
    // changeToken: (token) => dispatch(changeToken(token)),
    changeChecked: (checked) => dispatch(changeChecked(checked)),
    call: () => dispatch(request()),
    changePassword: (password) => dispatch(changePassword(password)),
    changeLogin: (login) => dispatch(changeLogin(login))
  };
}

function mapStateToProps(state, store, getState) {
  return {
    token: state.Token,
    checked: state.Checked,
    login: state.Login,
    password: state.Password
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
