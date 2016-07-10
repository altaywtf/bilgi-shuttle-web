import * as React from 'react';
import { Header } from '../../components';
import { PageTitle } from '../../components';
import { Footer } from '../../components';

const s = require('./style.css');

interface IProps {
  children?: any;
  location?: {
    pathname: string
  };
  params?: {
    node: string
  };
}

export class App extends React.Component<IProps, void> {
  render() {
    const { params, location, children } = this.props;
    return (
      <section className={s.App}>
        <Header />
        <PageTitle
          title={params.node}
          path={location.pathname}
        />
        <section className={s.Content}>
          {children}
        </section>
        <Footer />
      </section>
    );
  }
}

export default App;
