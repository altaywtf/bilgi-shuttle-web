import * as React from 'react';
import { Header } from '../../components';
import { PageTitle } from '../../components';
import { Footer } from '../../components';

const s = require('./style.css');

class App extends React.Component<any, void> {
  render() {
    const { params, location, children } = this.props;
    return (
      <section className={s.App}>
        <Header />
        <PageTitle title={params.node}
          path={location.pathname}/>
        <section className={s.Content}>
          {children}
        </section>
        <Footer />
      </section>
    );
  }
}

export { App }
