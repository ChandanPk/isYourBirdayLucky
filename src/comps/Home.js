import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import LuckyImg from '../img/Joyride.svg';
import SadImg from '../img/upset.svg';
import { FaLinkedinIn, FaGithub, FaInstagram, FaBriefcase } from 'react-icons/fa';



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
                       <a href="https://www.linkedin.com/in/chandan-pk-510bb817a/"> <span className="icons"><FaLinkedinIn /></span> </a>
                       <a href="https://github.com/ChandanPk"> <span className="icons"><FaGithub /></span> </a>
                       <a href="https://www.instagram.com/chandan_paull/"> <span className="icons"> <FaInstagram /></span> </a>
                       <a href="https://chandankumar-portfolio.netlify.app/"> <span className="icons"> <FaBriefcase /></span> </a>
                    </h3>
                    <p id="copy-right">&copy; 2021 | chandan Kumar</p>
                </footer>

            </div>
        </div>

    );
}

export default Home;
