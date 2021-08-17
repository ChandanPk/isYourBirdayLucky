import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import LuckyImg from '../img/Joyride.svg';
import SadImg from '../img/upset.svg';
import { FaLinkedinIn, FaGithub, FaDiscord, FaTelegramPlane } from 'react-icons/fa';



const Home = () => {

    const [startDate, setStartDate] = useState(null);
    const [luckNum, setLuckyNum] = useState(null);
    const [luck, setLuck] = useState(null);
    const [badLuck, setBadLuck] = useState(null);
    const [display, setDisplay] = useState(null);
    const [notice, setNotice] = useState(true);

    const check = (e) => {
        e.preventDefault()
        const d = new Date(startDate);
        const date = d.getDate();
        const year = d.getFullYear();
        const month = d.getMonth();
        const result = ((date + year + (month + 1)) % luckNum);
        console.log(result);


        if (result === 0) {
            setLuck(true);
            setBadLuck(null);
        } else {
            setBadLuck(true);
            setLuck(null);
        }

        setDisplay(true);

    }

    return (
        <div className="home">
            <div className="bg">
                <div className="intro">
                    <h1 className="title">Is Your Birthday Lucky?</h1>
                    <a href="#details-sec" className="scroll"> scroll down to check out</a>
                </div>
            </div>

            <div id="details-sec" className="intro">
                <form onSubmit={(e)=> check(e)}>

                    {notice &&
                        <div id="border">
                            <span className="notice">Privacy Notice! </span>
                            <span className="notice-content">We are not storing your data.</span>
                            <span onClick={() => { setNotice(false) }} id="delete">X</span>
                        </div>
                    }


                    <h2>Enter Your Birthdate and lucky number to continue...</h2>
                    <p className="prompt">Select your Birth date:</p>
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}
                        dateFormat='dd/MM/yyyy'
                        isClearable
                        showYearDropdown
                        scrollableYearDropdown
                        placeholderText="DD/MM/YYYY"
                        required

                    />

                    <p className="prompt">Enter your Lucky Number:</p>
                    <input type="number" onChange={(e) => setLuckyNum(e.target.value)} required></input>
                    <button type="submit" >check</button>
                </form>


                {display &&
                    luck ? <div>
                    <p className="declaration">Hurray!!You are a lucky person!</p>
                    <img src={LuckyImg} width={250} alt="img"></img>
                </div> :

                    badLuck && <div>
                        <p className="declaration">Oops!!Your birthday is not a lucky number</p>
                        <img src={SadImg} width={250} alt="img"></img>
                    </div>
                }


                <footer>
                    <h3 id="icons-grid">
                        <span className="icons"><FaLinkedinIn /></span>
                        <span className="icons"><FaGithub /></span>
                        <span className="icons"> <FaTelegramPlane /></span>
                        <span className="icons"> <FaDiscord /></span>
                    </h3>
                    <p id="copy-right">&copy; 2021 | chandan Kumar</p>
                </footer>

            </div>
        </div>

    );
}

export default Home;
