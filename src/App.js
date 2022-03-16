import { Route, Switch, Redirect } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import QuoteDetail from "./pages/QuoteDetail";
import NewQuote from "./pages/NewQuote";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Layout>
      <Switch>
        {/* Redirect to quotes as default */}
        <Route path='/' exact>
          <Redirect to='/quotes' />
        </Route>

        {/* All quote */}
        <Route path='/quotes' exact>
          <AllQuotes />
        </Route>

        {/* Quote detail when we click on a specific quote */}
        <Route path='/quotes/:quoteId'>
          <QuoteDetail />
        </Route>

        {/* Add new quote */}
        <Route path='/new-quote'>
          <NewQuote />
        </Route>

        {/* Fallback Not Found Page */}
        {/* This * route has to come last to pick up all other urls */}
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
