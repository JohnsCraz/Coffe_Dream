import React from "react";

function Home(){
    return(
        <div className="home">
            <div class="container">
                <div class="row align-items-center my-5">
                    <div class="col-lg-7">
                   
                    </div>
                    <div class="col-lg-5">
                       
                    </div>
                </div>
                <Header/>
            </div>
        </div>
    );
}

class Header extends React.Component{
    render(){
      return <h1 class="my-title">Coffee Highway</h1>
    }
  }

export default Home;