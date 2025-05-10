import footerContent from './../../api/footerApi.json'
import { MdPlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";
import {NavLink} from 'react-router-dom'
export const Footers =()=>{


    const footerIcon={
        MdPlace:<MdPlace />,
        IoCallSharp:<IoCallSharp/>,
        TbMailPlus:<TbMailPlus/>
    }
    return <footer className="footer-section">
        <div className="container grid grid-three-cols">
            {
                footerContent.map((curData,index)=>{
                    const {icon,title,details}=curData
                    return(
                        <div className="footer-contact" key={index}>
                            <div className="icon">{footerIcon[icon]}</div>
                            <div className="footer-content-text">
                                <p>{title}</p>
                                <p>{details}</p>
                            </div>
                        </div>
                    );
                })
            }

        </div>
        <div className="copyright-area">
            <div className="container">
                <div className="grid grid-two-cols">
                    <div className="copyright-text">
                        <p>
                            copyright ,All Right Reserved
                            <NavLink to="https://brijeshdave7.github.io/MyPortfolio/">
                                Brijesh Dave
                            </NavLink>
                        </p>
                    </div>
                    <div className="footer-menu">
                        <ul>
                            <li>
                                <NavLink to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="https://github.com/BrijeshDave7" target='blank'>
                                    GitHub
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/Contact'>
                                    Contact Us
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
}