import React from "react";


const Home = () => {
    return (
        <>
        <div style={{height : '100%' , background:"#87CEEB"}}>
            <div className="Center_div">
                <br/>
                <h1>Enter Your Name</h1>
                <br/>
                <input type="text" placeholder='Enter your Name'/>
                <button>Add</button>
                <ol>
                    <li>Ashish</li>
                    <li>Arpan</li>
                    <li>Krishna</li>

                </ol>
            </div>

        </div>
        </>
    )
}
export default Home;