import {
  Typography,
  TextField,
  Container,
  Paper,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import * as actions from "../redux/actions/actions";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  },
  textfield1: {
    display: "flex",
    textAlign: "center",
  },
  paper: {
    paddingTop: "50px",
    paddingBottom: "50px",
    marginTop: "100px",
  },
  test: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "50px",
  },
}));

function Landing() {
  const classes = useStyles();

  const { handleSubmit, control } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (data) => {
    console.log(data);
    if (data.room === "createroom") {
      console.log("dipatching action to create room");
      dispatch(actions.initializeGame(data.name));
    }
    history.push("/game");
  };

  return (
    <Container component="main" maxWidth="md">
      <Paper className={classes.paper} elevation={5}>
        <Typography variant="h3" align="center" component="h2">
          Enter your name
        </Typography>
        <Container component="main" maxWidth="xs">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="name"
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  className={classes.textfield}
                  placeholder="Enter your Name"
                  label="Your Name"
                  variant="outlined"
                  fullWidth
                  autoFocus
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
              rules={{ required: "Name is required" }}
            />
            <Controller
              rules={{ required: true }}
              control={control}
              defaultValue="createroom"
              name="room"
              render={({ field: { onChange, value } }) => (
                <RadioGroup value={value} onChange={onChange}>
                  <FormControlLabel
                    value="joinroom"
                    control={<Radio />}
                    label="Join Room"
                  />
                  <FormControlLabel
                    value="createroom"
                    control={<Radio />}
                    label="Create Room"
                  />
                </RadioGroup>
              )}
            />
            <Button
              className={classes.submit}
              type="submit"
              variant="contained"
              fullWidth
              color="secondary"
            >
              ENTER
            </Button>
          </form>
        </Container>
      </Paper>
    </Container>
  );
}

export default Landing;
