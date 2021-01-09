import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  MuiSvgIconRoot: {
    color: 'white',
    width: '28px',
    height: '28px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }
}));

function TopBar({ counts }) {
  const classes = useStyles();

  return (
    <div className="cont-topbar">
      <div className="text-topbar">
        <p>Switch Experience</p>
      </div>
      <button className="menu-btn" onClick={ 
        ()=>{
          counts[1]( true )
      }}>
        <MenuIcon className={classes.MuiSvgIconRoot} />
      </button>
    </div>
  );
}
export default TopBar;
