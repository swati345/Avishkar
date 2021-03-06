import React, { Component } from "react";
import Team from "../components/team/Team";
import Meta from "../components/events/Meta";
import teamData from "../data/team";
import Navbar from "../components/Navbar";
import MobileNav from "../components/MobileNav";
import { withRouter } from "next/router";
class TeamPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section>
        <Meta color="#212121" />
        <Navbar path={this.props.router.pathname} color="#212121" />
        <MobileNav path={this.props.router.pathname} color="#212121" />
        <h1>Meet the Avishkar's Team</h1>
        <Team people={teamData.faculty} heading="Faculty" />
        <Team people={teamData.studentcoreteam} heading="Student Core Team" />
        <Team people={teamData.workshopslead} heading="Workshops Lead" />
        <style jsx>
          {`
            h1 {
              text-align: center;
              color: #00bcd4;
              background-color: #f5f5f5;
              box-sizing: border-box;
              padding-top: 30px;
              margin: 0px 0px 0px 0px;
            }
            @media (max-width: 700px) {
              h1 {
                background-color: white;
              }
            }
          `}
        </style>
      </section>
    );
  }
}
export default withRouter(TeamPage);
