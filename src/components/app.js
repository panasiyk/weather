import React, {Component} from 'react';
import TopPart from '../components/topPart';
import DropDownMenu from './dropDownMenu';
import City from './city';

class App extends Component {
    render() {
        return (
            <div>
                <TopPart/>
                <DropDownMenu/>
                <City/>
            </div>
        );
    }
}
export default App;