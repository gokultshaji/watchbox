import React from "react";
import Row from "../Row"
import requests from "../../requestApis/allrequest";
import Banner from "../Banner";



function Home() {
  return (
    <div>
      <Banner fetchurl={requests.fetchTopRated}></Banner>
 <Row change={true} title={"Trending Now"} fetchurl={requests.fetchTrending}></Row>
 <Row title={"Originals"} fetchurl={requests.fetchNetflixOriginals}></Row>

 <Row title={"Top Rated"} fetchurl={requests.fetchTopRated}></Row>
 <Row title={"Action"} fetchurl={requests.fetchActionMovies}></Row>
 <Row title={"Comedy"} fetchurl={requests.fetchComedyMovies}></Row>

 <Row title={"Horror"} fetchurl={requests.fetchHorrorMovies}></Row>
 <Row title={"Romance"} fetchurl={requests.fetchRomanceMovies}></Row>
 <Row title={"Documentries"} fetchurl={requests.fetchDocumentaries}></Row>


    </div>
  );
}

export default Home;