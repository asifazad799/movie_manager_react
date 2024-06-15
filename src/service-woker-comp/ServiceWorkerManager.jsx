import { useState, useCallback, useEffect } from "react";
import * as serviceWorkerRegistration from "../service-worker-reg";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
// import Timer from "./Timer";
import makeStyles from "@mui/styles/makeStyles";
// import { checkIsBrowserMobileOrNot } from "utils/checkMobile";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    backgroundColor: "transparent",

    "& .MuiDialog-paper": {
      maxWidth: 494,
      flexGrow: 1,
      border: "0.5px solid #CD8764",
      boxShadow: "0px 7px 20px rgba(57, 69, 117, 0.1)",
      borderRadius: 8,

      //   [theme.breakpoints.down("xl")]: {
      margin: 16,
      //   },
    },
    "& .MuiDialogTitle-root": {
      fontWeight: 500,
      fontSize: 18,
      lineHeight: "20px",
      color: "#000000",
      textAlign: "center",
      padding: "30px 31px",
    },
    "& .MuiDialogContentText-root": {
      fontWeight: 300,
      fontSize: 12,
      lineHeight: "20px",
      color: "#000000",
      textAlign: "center",
    },

    "& .MuiDialogContent-root": {
      fontWeight: 500,
      fontSize: 18,
      lineHeight: "20px",
      color: "#000000",
      textAlign: "center",
      padding: "0 31px",
    },
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    padding: "24px 31px 32px 31px",

    "& .MuiButton-root": {
      maxWidth: 130,
      flexGrow: 1,
    },

    // [theme.breakpoints.down("xl")]: {
    marginTop: 0,
    // },
  },
}));

export const ServiceWorkerManager = () => {
  const classes = useStyles();
  const [isTimerStarted, setIsTimerStarted] = useState(false);
  const [open, setOpen] = useState(false);
  const [unavailableBrowser, setUnavailableBrowser] = useState(false);

  const onSWUpdate = useCallback((registration) => {
    const waitingWorker = registration.waiting;
    if (waitingWorker) {
      waitingWorker.postMessage({ type: "SKIP_WAITING" });
      setOpen(true);
    }
  }, []);

  //condition for checking safari web browser
  useEffect(() => {
    if (navigator.userAgent.match(/safari/i)) {
      //   const isMobileBrowser = checkIsBrowserMobileOrNot();
      //   if (!isMobileBrowser) {
      //     setUnavailableBrowser(true);
      //   }
    }
  }, [onSWUpdate, unavailableBrowser]);

  // register the service worker
  useEffect(() => {
    // if (!unavailableBrowser) {
    serviceWorkerRegistration.register({
      onUpdate: onSWUpdate,
    });
    // }
  }, [onSWUpdate, unavailableBrowser]);

  const reloadApp = () => {
    window.location.reload();
  };

  const handleLater = () => {
    setIsTimerStarted(true);
    setOpen(false);
  };

  const handleUpdate = () => {
    setOpen(false);
    reloadApp();
  };

  const getTimerTimestamp = () => {
    const time = new Date();
    return time.setSeconds(time.getSeconds() + 120); // 2 minutes timer
  };

  return (
    <>
      <Dialog
        open={open}
        BackdropProps={{ style: { backgroundColor: "transparent" } }}
        aria-labelledby="udpate-dialog"
        className={classes.root}
      >
        <DialogTitle id="udpate-dialog">Update Available</DialogTitle>
        <DialogContent>
          <DialogContentText>
            We recommend you to update your app. Save your work and update for
            for latest version. App will automatically be updated after 2
            minutes
          </DialogContentText>
        </DialogContent>
        <DialogActions className={classes.buttons}>
          <Button variant="outlined" onClick={handleLater}>
            Later
          </Button>
          <Button variant="contained" onClick={handleUpdate}>
            Update Now
          </Button>
        </DialogActions>
      </Dialog>
      {/* {isTimerStarted && (
        <Timer time={getTimerTimestamp()} onTimerEnd={reloadApp} />
      )} */}
    </>
  );
};

export default ServiceWorkerManager;
