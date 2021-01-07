import React from 'react'
import "./Footer.css"
const Footer =() => {
    return (
        <div className ="main-footer">
            <div className="container">
                <div className="row">
                    {/* column1 */}
                    <div className="col">
                        <h4> Contact Us</h4>
                        <ul className="list-unstyled">
                            <li>289-821-1981</li>
                            <li>Toronto, ON</li>
                            <li>30 banks Dr</li>
                        </ul>
                    </div>
                    {/* column2 */}
                    <div className="ccl">
                        <h4>Links</h4>
                        <ul classname="list-unstyled">
                            <li>289-821-1981</li>
                            <li>Toronto, ON</li>
                            <li>30 banks Dr</li>
                        </ul>
                    </div>
                    {/* column3 */}
                    <div className="ccl">
                        <h4>Learn More</h4>
                        <ul classname="list-unstyled">
                            <li>289-821-1981</li>
                            <li>Toronto, ON</li>
                            <li>30 banks Dr</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy; {new Date().getFullYear()} MyBudget | All Rights Reserved | Terms of Service | Privacy 

                    </p>

                </div>

            </div> 
            <h1>MyBudget</h1>
        </div>
    )
}

export default Footer
