import React from 'react'
import Title from 'react-title-component'
import BackButton from './utils/BackButton';

export default class About extends React.Component {
  render () {
    return(
      <div>
        <Title render="BilgiShuttle | About"/>
        <div className="page-title">
          <div className="row">
            <div className="col-xs-2">
              <BackButton />
            </div>
            <div className="col-xs-8">
              <h2>About</h2>
            </div>
          </div>
        </div>

        <div className="about">
          <div className="row">
              <div className="col-md-3 col-xs-1"></div>
              <div className="col-md-6 col-xs-10">
                <div className="about-content">
                  <p><b>BilgiShuttle</b> is an open-source project that aims to build simple and usable cross-platform app for listing the shuttle routes and times of İstanbul Bilgi University.</p>

                  <p>There is a <a href="https://github.com/bilgishuttle/bilgi-shuttle-api">REST API</a> on the backend which is running on <a href="http://api.bilgishuttle.com">api.bilgishuttle.com</a></p>

                  <p>You are currently viewing the <a href="https://github.com/bilgishuttle/bilgi-shuttle-web">web</a> application.</p>

                  <p>We also have <a href="https://github.com/bilgishuttle/bilgi-shuttle-ios">iOS</a> and <a href="https://github.com/bilgishuttle/bilgi-shuttle-android">Android</a> versions, but they aren't published yet.</p>

                  <p>However, you can check all the applications written for this project on <a href="https://github.com/bilgishuttle">Github</a>.</p>

                  <p>If you'd like to support the project, you can contact us on <a href="mailto:bilgishuttle@gmail.com">bilgishuttle@gmail.com</a></p>
                </div>
              </div>
              <div className="col-md-3 col-xs-1"></div>
          </div>
        </div>
      </div>
    );
  }
}
