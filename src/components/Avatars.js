import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import itemsAvatars from '../Avatars.json';


const useStyles = makeStyles((theme) => ({
  root: {
    padding: '10px',
    paddingLeft: '25px',
    paddingRight: '25px',
    borderRadius: '10px',
    fontSize: '15px',
    color: 'white',
    margin: '0 20px',
    backgroundImage: 'linear-gradient(180deg, #92def7, #545bc1)',
    "&:hover": {
      boxShadow: '0 5px 8px #887d7d'
    }
  },
}));

function Avatars() {
    const classes = useStyles();
    let [values, setValues] = useState('avatar2');
    
    function Animations(index) {
        let element = document.querySelector(`#id${index}`);
        element.animate([
            { transform: 'translateY(0)' },
            { transform: 'translateY(-20px)'},
            { transform: 'translateY(-20px) rotate(15deg)' },
            { transform: 'translateY(-20px) rotate(-15deg)' }
        ], {
            duration: 250,
            iterations: 1
        });
    }

    return (
        <div className="cont-avatar">
            <span>Select avatars to switch chatbot voice & tone</span>
            <div className="avatars">
                {Object.keys(itemsAvatars).map( (object, index)=>{
                    return (
                        <div className="avatar-sample" id={`id${index}`} key={index}>
                            <img src={itemsAvatars[object].img} onClick={
                                ()=>{
                                    setValues(object);
                                    Animations(index);
                                }
                            }/>
                        </div>
                    );
                })}
            </div>
            <div className="messages">
                <p><b>{itemsAvatars[values].name}</b></p><br/><br/>
                <p>{itemsAvatars[values].intro}</p>
            </div>
            <div className="foot-avatar">
                <Button className={classes.root} variant="contained">
                    Keep Chatting!
                </Button>
                <Button className={classes.root} variant="contained">
                    Get in Touch!
                </Button>
            </div>
        </div>
    );
}
export default Avatars;