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
import Person from "./Person";
export const Experience = () => {
    const [selectedIndex, setIndex] = useState(0);
    const [toggleOtp, setOtpToggle] = useState(false);
    const [otp, setotp] = useState('');
    const wishes = [
        {
            main: "Greetings from myMemories.",
            wishes: " Here you will be able to read all the wishes and messages from your family, friends and loved ones",
            writerName: "click on each picture to load respective messages",
            
        },
        {   id : "parents",
            index: 1,
            image: "/familia.png",
            main: "1",
            wishes: " NA",
            writerName: "NA"
        },
        {
            id : "nehadi/Jiaji",
            index: 2,
            image: "/familia2.jpg",
            main: "Jiaji and Nehadi",
            writerName: "Chutka you are the bestest sister and bestest baashi , we all love you a lot 😍😍😍😘😘😘 you are my best friend , I can share each and everything with you , I love you very much  God bless you with lots of happiness, love and good health 😘😘😘 Happiest birthday chutka 😍😘😘😘😘😘😘 Neha didi",
            wishes: "Happy birthday dearest Juhi! You are the sweet little sister that I got as a surprise gift. You are innocent yet very sensible. May you get everything that you ever wanted. God bless you and keep smiling always. Happy birthday :) Happy Birthday 🎈 Juhi!  -Jiaji"
        },
        {
            id : "brothers",
            index: 3,
            image: "/familia3.jpg",
            main: "3",
            wishes: " asdasd",
            writerName: "No matter how rare we speak... No matter how many fruits the trees will reap... Its something that no scale can measure... You are my world and my treasure...Its your love and support I seek... My fav couple are You and Prateek...   --Chints"
        },
        {
            id : "Pinchu",
            index: 4,
            image: "/pinchu.jpg",
            main: "🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈 ",
            wishes: " Happy birthday baashi, I love you a lot , you are my best friend😍😍😍  I love talking to you and fighting with you , you are my crime partner  ",
            writerName: "Pinchu"
        },
        {
            id : "Nidhidi/anshuman",
            index: 5,
            image: "/pinchu.jpg",
            main: "🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈 ",
            wishes: "Dear Juhi, Wish you a very happy birthday! Always stay your cheerful, bubbly, kind, smart, beautiful, and caring self. Anshuman and I wish you many happy and blissful moments in the coming year. May all your wishes come true! 😍🎊🎁🎂",
            writerName: "Nidhi and Anshuman"
        },
        {
            id : "rahul/Sakshi",
            index: 6,
            image: "/sakshi.png",
            main: "Rahul and Sakshi",
            wishes: " Happy Birthday 🎈 Juhi! I wish you nothing but joy and happiness, today and always. You’re an incredible friend and deserve only the best life has to offer. Have a celebratory drink (or two) from me! Happy Birthday 🎉 🥳 Rahul",
            writerName: "NA"
        },
        {
            id : "Sivali",
            index: 7,
            image: "/friend2.jpg",
            main: "3",
            wishes: " NA",
            writerName: "NA"
        },
        {
            id : "Abishek",
            index: 8,
            image: "/abhishek.png",
            main: "🎈🎈🎈🎈",
            wishes: " “On your birthday we wish for you that whatever you want most in life it comes to you just the way you imagined it or better.  Sending your way a bouquet of happiness…To wish you a very happy birthday!”🎁🍰🍫🥮🎉",
            writerName: "Abhishek"
        },
        {
            id : "samba/suman",
            image: "/friendsall.jpg",
            index: 9,
            main: "3",
            wishes: " asdasd",
            writerName: "NA"
        },
        {
            id : "pranay",
            index: 10,
            main: "3",
            wishes: " asdasd",
            writerName: "NA"
        },
        {
            id : "wasim",
            index: 11,
            image: "/friend4.png",
            main: "3",
            wishes: " asdasd",
            writerName: "NA"
        },
        {
            id : "shivika/Nimisha",
            index: 12,
            image: "/shivikaNimi.jpg",
            main: "3",
            wishes: " asdasd",
            writerName: "NA"
        },        
        {
            id : "Family2",
            index: 13,
            image: "/newFamilia.jpg",
            main: "3",
            wishes: " asdasd",
            writerName: "NA"
        },
        {
            id: "error",
            index: 14,
            image: "",
            main: "Dear visitor",
            wishes: " An incorrect OTP was entered",
            writerName: ""
        },
        {
            id: "correct",
            index: 15,
            image: "",
            main: "Dear visitor",
            wishes: " Correct OTP",
            writerName: ""
        }

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
                start: "bottom bottom",
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
                        <div className="hero-cta-2">Scroll to discover</div>
                        <Circles />
                    </div>

                    <div id="container">
                        <div className="module ">
                            <div className="gradient-right-pannel">
                            </div></div>
                        
                        {
                            wishes.map(person => {
                                if(!person.id ||  person.id === 'error' || person.id === 'correct') {
                                    return null;
                                }
                                return <Person id={person.id}
                                selectedIndex={selectedIndex}
                                currentIndex={person.index}
                                image={person.image}
                                alt={''}
                                setIndex={setIndex} 
                            />
                            })
                        }
                        
                        <div className="module ">
                            <div id = "me" className="envelope-container-exp">
                                <div onClick={() => {
                                    setOtpToggle(true);
                                } } className="gradient-right-pannel">
                                    <img id="me" style={selectedIndex === 15 ? { boxShadow: "19px 25px 24px 5px rgb(119 224 119 / 56%)" } : { boxShadow: "19px 25px 24px 5px #888888" }} src="/me.jpg" height="350" width="350" alt="Petrie the Powderpuff" />
                                </div>
                                <FormControlLabel
                                    control={<Switch checked={selectedIndex === 15} name="checkedA" />}
                                    label={selectedIndex === 15 ? "Loaded" : "Click to load"}
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
                                            if (otp === 'ukowdatiluna') {
                                                setIndex(15)
                                            }
                                            else {
                                                setIndex(14)
                                            }
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