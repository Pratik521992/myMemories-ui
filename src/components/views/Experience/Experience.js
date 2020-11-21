import React, { useEffect, useState } from "react";
import "./experience.scss"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useSelector } from "react-redux";
import WishCard from "../wishCard/wishCard";
import { FormControlLabel, Switch } from "@material-ui/core";
import Circles from "./Circles";
export const Experience = () => {
    const [selectedIndex, setIndex] = useState(0);
    const [toggleOtp, setOtpToggle] = useState(false);
    const [otp, setotp] = useState('');
    const wishes = [
        {
            main: "Welcome to myMemories.",
            wishes: " Here you will be able to read all the wishes and messages from your family, friends and loved ones",
            writerName: "click on each picture to load respective messages"
        },
        {   id : "parents",
            main: "1",
            wishes: " asdasd",
            writerName: "There u go!!"
        },
        {
            id : "nehadi/Jiaji",
            main: "Jiaji and Nehadi",
            writerName: "Chutka you are the bestest sister and bestest baashi , we all love you a lot 😍😍😍😘😘😘 you are my best friend , I can share each and everything with you , I love you very much  God bless you with lots of happiness, love and good health 😘😘😘 Happiest birthday chutka 😍😘😘😘😘😘😘 Neha didi",
            wishes: "Happy birthday dearest Juhi! You are the sweet little sister that I got as a surprise gift. You are innocent yet very sensible. May you get everything that you ever wanted. God bless you and keep smiling always. Happy birthday :) Happy Birthday 🎈 Juhi!"
        },
        {
            id : "brothers",
            main: "3",
            wishes: " asdasd",
            writerName: "There u go!!"
        },
        {
            id : "Pinchu",
            main: "3",
            wishes: " Happy birthday baashi, I love you a lot , you are my best friend😍😍😍  I love talking to you and fighting with you , you are my crime partner  ",
            writerName: "Pinchu"
        },
        {
            id : "rahul/Sakshi",
            main: "Rahul and Sakshi",
            wishes: " Happy Birthday 🎈 Juhi! I wish you nothing but joy and happiness, today and always. You’re an incredible friend and deserve only the best life has to offer. Have a celebratory drink (or two) from me! Happy Birthday 🎉 🥳 Rahul",
            writerName: "There u go!!"
        },
        {
            id : "Sivali",
            main: "3",
            wishes: " asdasd",
            writerName: "There u go!!"
        },
        {
            id : "samba/suman",
            main: "3",
            wishes: " asdasd",
            writerName: "There u go!!"
        },
        {
            id : "pranay",
            main: "3",
            wishes: " asdasd",
            writerName: "There u go!!"
        },
        {
            id : "wasim",
            main: "3",
            wishes: " asdasd",
            writerName: "There u go!!"
        },
        {
            id : "shivika/Nimisha",
            main: "3",
            wishes: " asdasd",
            writerName: "There u go!!"
        },
        {
            id : "Abishek",
            main: "🎈🎈🎈🎈",
            wishes: " “On your birthday we wish for you that whatever you want most in life it comes to you just the way you imagined it or better.  Sending your way a bouquet of happiness…To wish you a very happy birthday!”🎁🍰🍫🥮🎉",
            writerName: "Abhishek"
        },
        {
            id : "Family2",
            main: "3",
            wishes: " asdasd",
            writerName: "There u go!!"
        },
        {
            id : "me",
            main: "3",
            wishes: " asdasd",
            writerName: "There u go!!"
        },

    ]

    const open = useSelector((state) => state.modal.wishModalStatus);
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const rightPanel = document.getElementById("rightPanel");
        const container = document.getElementById("container");
        const trigger1 = document.getElementsByClassName("trigger1");
        const module = document.getElementsByClassName("module");
        const panels =
            document.getElementsByClassName("panel");


        // List to Intro


        // Horizontal Scrolling

        let introScroll = gsap.to(rightPanel, {
            x: () => "-=" + (rightPanel.offsetWidth),
            ease: "none",
            scrollTrigger: {
                start: 0,
                invalidateOnRefresh: true,
                scrub: 0,
                end: () => "+=" + (rightPanel.offsetWidth)
            }
        })

        let contentScroll = gsap.to(container, {
            x: () => -(container.offsetWidth),
            ease: "none",
            scrollTrigger: {
                trigger: rightPanel,
                start: "bottom top",
                invalidateOnRefresh: true,
                markers: true,
                scrub: 0,
                end: () => "+=" + (container.offsetWidth)
            }
        })
        gsap.to(".hero-cta", {
            y: 80,
            scrollTrigger: {
                trigger: "body",
                start: 'top top',
                end: 'bottom top',
                scrub: true,
            }
        });

    }, [])

    const getExp = () => {
        if (open) {
            return null;
        }
        else
            return (
                <div className=" experience-container">
                    <div class="panel" id="leftPanel">
                        <div className=" area">
                            <div className="left-top">
                                <div className="gradient-left-pannel ">
                                    <img id="1" src="/profile.png" height="350" width="350" alt="Petrie the Powderpuff" />
                                </div>
                            </div>
                            <div className="messages1">
                                <Circles />
                                <div className="msg-container">
                                    <h1 className="wish-msg-2">
                                        <span >"Many Many happy returns of the day"</span>

                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="area panel" id="rightPanel">
                        <WishCard wish={wishes[selectedIndex]} />
                        <Circles />
                        <div className="hero-cta">Scroll to discover</div>
                    </div>

                    <div id="container">
                        <div className="module ">
                            <div className="gradient-right-pannel">
                            </div></div>
                        <div className="module ">
                            <div className="envelope-container-exp">
                                <div onClick={() => setIndex(1)} className="gradient-right-pannel">
                                    <img id="1" style={selectedIndex === 1 ? { boxShadow: "19px 25px 24px 5px rgb(119 224 119 / 56%)" } : { boxShadow: "19px 25px 24px 5px #888888" }} src="/familia.png" height="550" width="550" alt="Petrie the Powderpuff" />
                                </div>
                                <FormControlLabel
                                    style={{ fontSize: '44px', marginLeft: '24px' }}
                                    control={<Switch checked={selectedIndex === 1} onChange={() => setIndex(1)} name="checkedA" />}
                                    label={selectedIndex === 1 ? "Loaded" : "Click to load"}
                                />
                                <Circles />
                            </div>
                        </div>
                        <div className="module ">
                            <div id = "nehadi/Jiaji" className="envelope-container-exp">
                                <div onClick={() => setIndex(2)} className="gradient-right-pannel">
                                    <img id="1" style={selectedIndex === 2 ? { boxShadow: "19px 25px 24px 5px rgb(119 224 119 / 56%)" } : { boxShadow: "19px 25px 24px 5px #888888" }} src="/familia2.jpg" height="350" width="350" alt="Petrie the Powderpuff" />
                                </div>
                                <FormControlLabel
                                    control={<Switch checked={selectedIndex === 2} onChange={() => setIndex(2)} name="checkedA" />}
                                    label={selectedIndex === 2 ? "Loaded" : "Click to load"}
                                />
                                <Circles />
                            </div>
                        </div>
                        <div className="module ">
                            <div id = "brothers" className="envelope-container-exp">
                                <div onClick={() => setIndex(3)} className="gradient-right-pannel">
                                    <img id="1" style={selectedIndex === 3 ? { boxShadow: "19px 25px 24px 5px rgb(119 224 119 / 56%)" } : { boxShadow: "19px 25px 24px 5px #888888" }} src="/familia3.jpg" height="350" width="350" alt="Petrie the Powderpuff" />
                                </div>
                                <FormControlLabel
                                    control={<Switch checked={selectedIndex === 3} onChange={() => setIndex(3)} name="checkedA" />}
                                    label={selectedIndex === 3 ? "Loaded" : "Click to load"}
                                />
                                <Circles />
                            </div>
                        </div>
                        <div className="module ">
                            <div id = "pinchu" className="envelope-container-exp">
                                <div onClick={() => setIndex(4)} className="gradient-right-pannel">
                                    <img id="1" style={selectedIndex === 4 ? { boxShadow: "19px 25px 24px 5px rgb(119 224 119 / 56%)" } : { boxShadow: "19px 25px 24px 5px #888888" }} src="/pinchu1.jpg" height="350" width="350" alt="Petrie the Powderpuff" />
                                </div>
                                <FormControlLabel
                                    control={<Switch checked={selectedIndex === 4} onChange={() => setIndex(4)} name="checkedA" />}
                                    label={selectedIndex === 4 ? "Loaded" : "Click to load"}
                                />
                                <Circles />
                            </div>
                        </div>
                        <div className="module ">
                            <div  id = "sakshi" className="envelope-container-exp">
                                <div onClick={() => setIndex(5)} className="gradient-right-pannel">
                                    <img id="1" style={selectedIndex === 5 ? { boxShadow: "19px 25px 24px 5px rgb(119 224 119 / 56%)" } : { boxShadow: "19px 25px 24px 5px #888888" }} src="/friend1.jpg" height="350" width="350" alt="Petrie the Powderpuff" />
                                </div>
                                <FormControlLabel
                                    control={<Switch checked={selectedIndex === 5} onChange={() => setIndex(5)} name="checkedA" />}
                                    label={selectedIndex === 5 ? "Loaded" : "Click to load"}
                                />
                                <Circles />
                            </div>
                        </div>
                        <div className="module ">
                            <div id = "Shivali" className="envelope-container-exp">
                                <div onClick={() => setIndex(6)} className="gradient-right-pannel">
                                    <img id="1" style={selectedIndex === 6 ? { boxShadow: "19px 25px 24px 5px rgb(119 224 119 / 56%)" } : { boxShadow: "19px 25px 24px 5px #888888" }} src="/friend2.jpg" height="350" width="350" alt="Petrie the Powderpuff" />
                                </div>
                                <FormControlLabel
                                    control={<Switch checked={selectedIndex === 6} onChange={() => setIndex(6)} name="checkedA" />}
                                    label={selectedIndex === 6 ? "Loaded" : "Click to load"}
                                />
                                <Circles />
                            </div>
                        </div>
                        <div className="module ">
                            <div id = "SamaSumanWasim" className="envelope-container-exp">
                                <div onClick={() => setIndex(7)} className="gradient-right-pannel">
                                    <img id="1" style={selectedIndex === 7 ? { boxShadow: "19px 25px 24px 5px rgb(119 224 119 / 56%)" } : { boxShadow: "19px 25px 24px 5px #888888" }}  height="350" width="350" alt="Petrie the Powderpuff" />
                                </div>
                                <FormControlLabel
                                    control={<Switch checked={selectedIndex === 7} onChange={() => setIndex(7)} name="checkedA" />}
                                    label={selectedIndex === 7 ? "Loaded" : "Click to load"}
                                />
                                <Circles />
                            </div>
                        </div>
                        <div className="module ">
                            <div id = "shivika/Nimisha" className="envelope-container-exp">
                                <div onClick={() => setIndex(8)} className="gradient-right-pannel">
                                    <img id="1" style={selectedIndex === 8 ? { boxShadow: "19px 25px 24px 5px rgb(119 224 119 / 56%)" } : { boxShadow: "19px 25px 24px 5px #888888" }} src="/friend4.png" height="350" width="350" alt="Petrie the Powderpuff" />
                                </div>
                                <FormControlLabel
                                    control={<Switch checked={selectedIndex === 8} onChange={() => setIndex(8)} name="checkedA" />}
                                    label={selectedIndex === 8 ? "Loaded" : "Click to load"}
                                />
                                <Circles />
                            </div>
                        </div>
                        
                        <div className="module ">
                            <div id = "Abhishek" className="envelope-container-exp">
                                <div onClick={() => setIndex(11)} className="gradient-right-pannel">
                                    <img id="1" style={selectedIndex === 9 ? { boxShadow: "19px 25px 24px 5px rgb(119 224 119 / 56%)" } : { boxShadow: "19px 25px 24px 5px #888888" }} src="/friend3.jpg" height="350" width="350" alt="Petrie the Powderpuff" />
                                </div>
                                <FormControlLabel
                                    control={<Switch checked={selectedIndex === 11} onChange={() => setIndex(11)} name="checkedA" />}
                                    label={selectedIndex === 11 ? "Loaded" : "Click to load"}
                                />
                                <Circles />
                            </div>
                        </div>
                        <div className="module ">
                            <div id = "newFamilia" className="envelope-container-exp">
                                <div onClick={() => setIndex(12)} className="gradient-right-pannel">
                                    <img id="1" style={selectedIndex === 12 ? { boxShadow: "19px 25px 24px 5px rgb(119 224 119 / 56%)" } : { boxShadow: "19px 25px 24px 5px #888888" }} src="/newFamilia.jpg" height="350" width="350" alt="Petrie the Powderpuff" />
                                </div>
                                <FormControlLabel
                                    control={<Switch checked={selectedIndex === 12} onChange={() => setIndex(9)} name="checkedA" />}
                                    label={selectedIndex === 12 ? "Loaded" : "Click to load"}
                                />
                                <Circles />
                            </div>
                        </div>
                        <div className="module ">
                            <div id = "me" className="envelope-container-exp">
                                <div onClick={() => setOtpToggle(true)} className="gradient-right-pannel">
                                    <img id="1" style={selectedIndex === 10 ? { boxShadow: "19px 25px 24px 5px rgb(119 224 119 / 56%)" } : { boxShadow: "19px 25px 24px 5px #888888" }} src="/me.jpg" height="350" width="350" alt="Petrie the Powderpuff" />
                                </div>
                                <FormControlLabel
                                    control={<Switch checked={selectedIndex === 10} name="checkedA" />}
                                    label={selectedIndex === 10 ? "Loaded" : "Click to load"}
                                />
                                <Circles />
                                <Dialog open={toggleOtp} onClose={() => setOtpToggle(false)}>
                                    <DialogTitle id="form-dialog-title">Enter OTP</DialogTitle>
                                    <DialogContent>
                                        <DialogContentText>
                                            Please Enter OTP
                                    </DialogContentText>
                                        <TextField
                                            autoFocus
                                            value={otp}
                                            margin="dense"
                                            id="otp"
                                            label="Enter OTP"
                                            type="password"
                                            fullWidth
                                            onChange={(e) => setotp(e.target.value)}
                                        />
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={() => setOtpToggle(false)} color="primary">
                                            Cancel
                                        </Button>
                                        <Button onClick={() => {
                                            setOtpToggle(false);
                                            if (otp === '2311') setIndex(10)
                                        }} color="primary">
                                            Enter
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                                
                            </div>
                        </div>
                        END
                    </div>
END
                </div>
            )
    };

    return (
        <> {getExp()}</>
    )
}