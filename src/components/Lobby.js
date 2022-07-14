import {
  GridList,
  GridListTile,
  Button,
  Paper,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import * as actions from "../redux/actions/actions";
import { React, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  img: {
    maxWidth: "100%",
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    height: 180,
  },
  bottom: {
    position: "absolute",
    bottom: 50,
  },
}));

export default function Lobby() {
  const cards = useSelector((state) => state.allCards.cards);
  const gameid = useSelector((state) => state.allCards.roomid);
  const dispatch = useDispatch();

  const [spacing, setSpacing] = useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  const handleClick = (data) => {
    console.log("Game Started", gameid);
    dispatch(actions.startGame(gameid));
  };

  const allCards = cards.map((card, i) => (
    <GridListTile cols={1}>
      <img className={classes.img} src={card.image} />
    </GridListTile>
  ));
  return (
    <>
      <Button onClick={handleClick}>Start game</Button>

      <div className={classes.bottom}>
        <div className={classes.root}>
          <GridList cellHeight={160} cols={13} className={classes.gridList}>
            {allCards}
          </GridList>
        </div>
      </div>
    </>
  );
}
