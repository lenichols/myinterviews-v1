import { routerActions } from 'react-router-dom';
import AddInterview from './components/AddInterview';
import Interviews from './components/Interviews';

const userIsAuthenticated = user.req;

export default(
    <Route path="/"compoent={App}>
    <Route path="addinterview" component={AddInterviewPage} />
    <Route path="interview" component={InterviewPage} />
    <Route path="signup" component={SignUpPage} />
    <Route path="login" component={LogInPage} />
    <Route path="logout" component={LogOutPage} />
    <Route path="*" component={NotFoundPage} />
    </Route>
);