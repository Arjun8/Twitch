import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import StreamList from './streams/streamList';
import StreamCreate from './streams/streamCreate';
import StreamShow from './streams/streamShow';
import StreamEdit from './streams/streamEdit';
import StreamDelete from './streams/streamDelete';
import Header from './header';
class App extends React.Component{
    render()
    {
        return (

            <div className="ui container">
                <BrowserRouter>
                <Header/>
            <Route path='/' exact component={StreamList}/>
            <Route path='/stream/create' exact component={StreamCreate}/>
            <Route path='/stream/show' exact component={StreamShow}/>
            <Route path='/stream/edit' exact component={StreamEdit}/>
            <Route path='/stream/delete' exact component={StreamDelete}/>
            </BrowserRouter></div>
        )
    }
}
export default App;