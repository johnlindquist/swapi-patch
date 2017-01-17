//https://swapi-json-server-ddpsgpqivc.now.sh/people/1
import { Component } from 'react'
import axios from 'axios'
export default class extends Component {
    static async getInitialProps() {
        const {data} = await axios.get('https://swapi-json-server-ddpsgpqivc.now.sh/people/1')

        return data
    }

    update(){
        axios.patch('https://swapi-json-server-ddpsgpqivc.now.sh/people/1', {name: 'John Skywalker'})
    }

    render() {
        console.log('render')
        return <div>
            {this.props.name}
            <button onClick={this.update}>Update</button>
        </div>
    }
}
