import * as React from "react";
import { Search } from "@material-ui/icons";
import {
  Paper as MuiPaper,
  InputAdornment,
  Typography,
  TextField,
  IconButton,
  CircularProgress,
} from "@material-ui/core";
import styled from "styled-components";

interface Props {}

const Paper = styled(MuiPaper)`
  padding: 30px;
  max-width: 450px;
  margin: 50px auto;
`;

export const App: React.FC<Props> = () => {
  const [idPartner, setIdPartner] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const partnerSearchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIdPartner(e.target.value);
  };
  const onSubmitHandler = React.useCallback(
    (e: React.SyntheticEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log(idPartner);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 5000);
    },
    [idPartner]
  );

  return (
    <Paper>
      <Typography variant="h4" component="div" gutterBottom>
        Gestión Individual
      </Typography>
      <br />
      <form onSubmit={onSubmitHandler} action="">
        <TextField
          id="outlined-name"
          label="Partner ID"
          value={idPartner}
          variant="outlined"
          fullWidth
          onChange={partnerSearchHandler}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {loading ? (
                  <IconButton aria-label="loading">
                    <CircularProgress color="inherit" size={24} />
                  </IconButton>
                ) : (
                  <IconButton type="submit" aria-label="search">
                    <Search />
                  </IconButton>
                )}
              </InputAdornment>
            ),
          }}
        />
      </form>
    </Paper>
  );
};
